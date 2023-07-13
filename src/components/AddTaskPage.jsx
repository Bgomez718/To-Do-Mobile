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
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button />
        <button />
      </form>
    </div>
  );
}
