import react from "react";
import { useState } from "react";
import Button from "../Button";

export default function AddTaskPage() {
  const [inputValue, setInputValue] = useState("");
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
        <button className="addTaskBtn text1">Add Task</button>
        <button className="cancelTaskBtn text1">Cancel</button>
      </form>
    </div>
  );
}
