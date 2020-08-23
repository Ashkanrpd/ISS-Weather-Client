import React from "react";

export default function MyError(props) {
  return (
    <div className="error">
      <div>Error code: {props.result.code}</div>
      <div> Ops, Something went wrong! Please try again later...</div>
      <div>
        {" "}
        This usually happens when we are unable to gather all the information.
      </div>
      <div>
        E.g. ISS is in the middle of the ocean or somewhere where information is
        not accessible.
      </div>
    </div>
  );
}
