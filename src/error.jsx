import React from "react";

export default function MyError(props) {
  return (
    <div>
      <div> Ops, Something went wrong! try again later...</div>
      <div>Error name: {props.name}</div>
      <div>Error code: {props.code}</div>
      <div>Error message: {props.msg}</div>
    </div>
  );
}
