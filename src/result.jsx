import React from "react";

export default function props(props) {
  return (
    <div className="result">
      <div>
        ISS is at the sky of the{" "}
        {props.result.content.location.country || "no country"}
      </div>
      <div>
        Region: {props.result.content.location.name || "no specific region"}
      </div>
      <div>
        Observation Time: {props.result.content.location.observationTime}
      </div>
      <div>Temperature: {props.result.content.location.temperature}C</div>
      <div>Humidity: {props.result.content.location.humidity}%</div>
      <div>
        Observation Time: {props.result.content.location.observationTime}
      </div>
      <div>Visibility: {props.result.content.location.visibility}KM</div>
      <div>Your distance to ISS is {props.result.content.distance}</div>
      <div>
        The temperature difference between your location and{" "}
        {props.result.content.location.name} is {props.result.content.tempDif}
      </div>
    </div>
  );
}
