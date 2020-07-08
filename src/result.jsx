import React from "react";

export default function props(props) {
  return (
    <div>
      <div>ISS is at the sky of the {props.content.location.country}</div>
      <div>Region: {props.content.location.name}</div>
      <div>Observation Time: {props.content.location.observationTime}</div>
      <div>Temperature: {props.content.location.temperature}C</div>
      <div>Humidity: {props.content.location.humidity}%</div>
      <div>Observation Time: {props.content.location.observationTime}</div>
      <div>Visibility: {props.content.location.visibility}KM</div>
      <div>Your distance to ISS is {Math.round(props.content.distance)}KM</div>
      <div>
        The temperature difference between your location and{" "}
        {props.content.location.name} is {props.content.tempDif}
      </div>
    </div>
  );
}
