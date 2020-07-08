import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./home.jsx";
import Result from "./result.jsx";
import MyError from "./error.jsx";

function App() {
  const [user, setUserCoords] = useState({
    latitude: undefined,
    longitude: undefined,
  });
  const [result, setResult] = useState(undefined);
  async function callBackend() {
    let response = await fetch(
      `http://localhost:4000/calc?latitude=${user.latitude}&longitude=${user.longitude}`
    );
    let body = await response.text();
    console.log(body);
    setResult(JSON.parse(body));
  }
  function userCoords() {
    navigator.geolocation.getCurrentPosition(function (position) {
      if (position) {
        setUserCoords({
          latitide: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      } else throw new Error("There is no coords for the user");
    });
  }
  useEffect(() => userCoords(), []);
  return (
    <div className="App">
      <Home />
      <button onClick={() => callBackend()}>
        {result ? "Start Again" : "Start"}{" "}
      </button>
      {result && result.code === 200 && result.success && (
        <Result result={result} />
      )}
      {result && !result.success && <MyError result={result} />}
    </div>
  );
}

export default App;
