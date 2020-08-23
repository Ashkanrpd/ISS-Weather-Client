import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./home.jsx";
import Result from "./result.jsx";
import MyError from "./error.jsx";

function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(undefined);
  const [denyGeo, setDenyGeo] = useState(undefined);
  const [user, setUserCoords] = useState({
    latitude: undefined,
    longitude: undefined,
  });

  async function callBackend() {
    setLoading(true);
    setResult(undefined);
    let response = await fetch(
      `https://still-dusk-85699.herokuapp.com/calc?latitude=${user.latitude}&longitude=${user.longitude}`
    );
    console.log("res", response);
    let body = await response.text();
    setResult(JSON.parse(body));
    setLoading(false);
  }

  function userCoords() {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        if (position) {
          setUserCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        }
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
        setDenyGeo(true);
      }
    );
  }

  useEffect(() => userCoords(), []);

  return (
    <div className="App">
      <Home />
      {user.latitude && user.longitude ? (
        <button onClick={() => callBackend()} disabled={loading}>
          {result ? "Start Again" : "Start"}{" "}
        </button>
      ) : (
        <div className="waiting">
          {denyGeo
            ? "Please allow your browser to collect your coordinates and refresh the page!"
            : "Collecting user coordinates, please wait..."}
        </div>
      )}
      {loading && <div className="waiting"> Please wait a few seconds... </div>}
      {result && result.code === 200 && result.success && (
        <Result result={result} />
      )}
      {result && result.code !== 200 && !result.success && (
        <MyError result={result} />
      )}
    </div>
  );
}

export default App;
