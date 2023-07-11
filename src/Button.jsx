import React from "react";

export default function Button(props) {
  /*
    This code is a bit extra. The only benefit I get from this is being able to center 
    all icons by automatically wrapping it in a flex wrapper
   */
  const styles = {
    width: "35px",
    height: "35px",
    borderStyle: "none",
    borderRadius: "365px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <button
        style={styles}
        className={props.className}
        onClick={props.onClick}
      >
        {props.icon}
      </button>
    </div>
  );
}
