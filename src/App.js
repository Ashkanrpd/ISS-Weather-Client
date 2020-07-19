import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./home.jsx";
import Result from "./result.jsx";
import MyError from "./error.jsx";

function App() {
  const [btn, setBtn] = useState(false);
  const [result, setResult] = useState(undefined);
  const [user, setUserCoords] = useState({
    latitude: undefined,
    longitude: undefined,
  });

  async function callBackend() {
    setBtn(true);
    setResult(undefined);
    let response = await fetch(
      `https://still-dusk-85699.herokuapp.com/calc?latitude=${user.latitude}&longitude=${user.longitude}`
    );
    let body = await response.text();
    setResult(JSON.parse(body));
    setBtn(false);
  }

  function userCoords() {
    navigator.geolocation.getCurrentPosition(function (position) {
      if (position) {
        setUserCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      } else throw new Error("There is no coords for the user");
    });
  }

  useEffect(() => userCoords(), []);

  return (
    <div className="App">
      <Home />
      {user.latitude && user.longitude ? (
        <button onClick={() => callBackend()} disabled={btn}>
          {result ? "Start Again" : "Start"}{" "}
        </button>
      ) : (
        <div className="waiting">
          {" "}
          Collecting user coordinates, please wait...
        </div>
      )}
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
