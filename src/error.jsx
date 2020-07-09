import React from "react";

export default function MyError(props) {
  return (
    <div className="error">
      <div> Ops, Something went wrong! try again later...</div>
      <div>Error name: {props.result.name}</div>
      <div>Error code: {props.result.code}</div>
      <div>Error message: {props.result.msg}</div>
    </div>
  );
}
