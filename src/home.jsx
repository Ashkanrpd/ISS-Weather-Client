import React from "react";

export default function Home() {
  return (
    <div className="home">
      <h3>Welcome to ISS-Weather Application</h3>
      <div>We simply find:</div>
      <ul>
        <li>Your current location coordinates.</li>
        <li>
          The International Space Station (ISS) current location coordinates.
        </li>
        <li>Weather details for both locations.</li>
        <li>
          The distance and the temperature difference between the two points.
        </li>
      </ul>
      <div>Are you ready to see how cool this app is?</div>
    </div>
  );
}
