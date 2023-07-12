import react from "react";
import Button from "./Button";
import AddTaskPage from "./components/AddTaskPage";
import { useState } from "react";
import { ReactComponent as Icon } from "./resources/plus-add-new-create-svgrepo-com.svg";

export default function Categories(props) {
  const [showCard, setShowCard] = useState("false");

  function ShowAddPage() {
    setShowCard(!showCard);
    console.log("IIIIIIIII");
  }
  function showSection() {
    console.log("HELLLOOOOOOOOOO");
  }
  return (
    <div className="sectionContainer">
      {/* The goal of this is to show a set of new task when a section is clicked*/}
      <button className="section" onClick={showSection}>
        <label className="taskCount">18 task</label>
        <label className="taskLabel">Hello</label>
      </button>
      <Button className="add" icon={<Icon />} onClick={ShowAddPage} />
      {showCard && <AddTaskPage />}
    </div>
  );
}
