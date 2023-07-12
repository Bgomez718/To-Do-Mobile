import react from "react";
import { useState } from "react";
import { ReactComponent as Check } from "./resources/check-mark-svgrepo-com.svg";

const uncheckBoxStyle = {
  position: "relative",
  appearance: "none",
  backgroundColor: "transparent",
  border: "3px solid rgb(35,123,255)",
  borderColor: "rgb(35,123,255)",
  background: "transparent",
  width: "24px",
  height: "24px",
  marginLeft: "10px",
  marginRight: "10px",
  borderRadius: "400px",
};

const checkBoxStyle = {
  appearance: "none",
  backgroundColor: "#183588",
  border: "3px solid #183588",
  borderColor: "#183588",
  width: "24px",
  height: "24px",
  marginLeft: "10px",
  marginRight: "10px",
  borderRadius: "400px",
};

/* When creating the onHandle button I created the 
function at global scope which affect all of the components
of this type, I confused the rule of not create components inside 
of components.  */

export default function Task(props) {
  const [isChecked, setIsChecked] = useState(false);
 
  //if its not checked
  function handleClick(boolean) {
    setIsChecked(!isChecked);
  }
  return (
    <div className="listContainer">
      <button
        style={isChecked ? checkBoxStyle : uncheckBoxStyle}
        type="checkbox"
        onClick={handleClick}
      >
        <Check
          style={
            isChecked
              ? {
                  fill: "white",
                  position: "relative",
                  right: "2px",
                  top: "2px",
                }
              : { fill: "transparent" }
          }
        />
      </button>
      <label className={isChecked ? "strikethrough" : "noStrike"}>
        {props.label}
      </label>
    </div>
  );
}
