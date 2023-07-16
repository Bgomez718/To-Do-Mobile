import React, { useState } from "react";
import { ReactComponent as Check } from "./resources/check-mark-svgrepo-com.svg";
import { ReactComponent as Dots } from "./resources/three-dots-svgrepo-com.svg";
import OptionsTaskPage from "./components/OptionsTaskPage";

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

export default function Task(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const { label, id, onDelete } = props;

  function handleClick() {
    setIsChecked(!isChecked);
  }

  function toggleOptions() {
    setShowOptions(!showOptions);
  }

  function handleDelete() {
    onDelete(id);
    toggleOptions();
  }

  return (
    <div className="listContainer">
      <button
        style={isChecked ? checkBoxStyle : uncheckBoxStyle}
        type="checkbox"
        onClick={handleClick}
      >
        <Check
          style={isChecked ? { fill: "white" } : { fill: "transparent" }}
        />
      </button>
      <label className={isChecked ? "strikethrough" : "noStrike"}>
        {label}
      </label>
      <Dots
        style={{
          fill: "#7284ba",
          marginLeft: "auto",
          marginRight: "15px",
          minWidth: "30px",
        }}
        onClick={toggleOptions}
      />
      {showOptions && (
        <OptionsTaskPage onDelete={handleDelete} onCancel={toggleOptions} />
      )}
    </div>
  );
}
