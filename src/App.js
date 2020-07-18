import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./home.jsx";
import Result from "./result.jsx";
import MyError from "./error.jsx";

function App() {
  const [result, setResult] = useState(undefined);
  const [user, setUserCoords] = useState({
    latitude: undefined,
    longitude: undefined,
  });
  console.log("user", user);

  async function callBackend() {
    let response = await fetch(
      `https://still-dusk-85699.herokuapp.com/calc?latitude=${user.latitude}&longitude=${user.longitude}`
    );
    let body = await response.text();
    console.log(body);
    setResult(JSON.parse(body));
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
      <button onClick={() => callBackend()}>
        {result ? "Start Again" : "Start"}{" "}
      </button>
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
