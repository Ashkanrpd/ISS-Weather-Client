import React from "react";

export default function Home() {
  return (
    <div>
      <h3>Welcome to ISS-Weather Application</h3>
      <div>What we do here is simple:</div>
      <ul>
        <li>We find Your current location coordinates.</li>
        <li>
          We find International Space Station (iSS) current location
          coordinates.
        </li>
        <li>We find weather details for both locations.</li>
        <li>We calculate the temperture difference between the two points.</li>
      </ul>
      <div>
        Are you ready to see how cool this app is? then click on the START
        button.
      </div>
    </div>
  );
}
