import react from "react";
import { useState } from "react";
import Button from "../Button";

export default function AddTaskPage(props) {
  const [inputValue, setInputValue] = useState("");
  const { onCancel, onAdd } = props; //these props allows us to assign functions from parent components down to it
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  return (
    <div className="addTask-container">
      <form>
        <br />
        <br />
        <h4 className="text1 tPos1">Add Task </h4>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button
          className="addTaskBtn text1"
          onClick={() => props.onAdd(inputValue)} //these lets us pass the inputValue that we keep track of inside of this component and allow us to add it to whatever func its mapped to
        >
          Add
        </button>
        <button className="cancelTaskBtn text1" onClick={props.onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}
