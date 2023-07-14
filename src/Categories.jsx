import react from "react";
import Button from "./Button";
import AddTaskPage from "./components/AddTaskPage";
import Task from "./Task";
import { useState } from "react";
import { ReactComponent as Icon } from "./resources/plus-add-new-create-svgrepo-com.svg";

export default function Categories(props) {
  const [showCard, setShowCard] = useState("false");
  const [tasks, setTask] = useState([]);

  function ShowAddPage() {
    setShowCard(!showCard);
  }

  function handleAddTask(task) {
    //need to grab
    setTask([...tasks, task]);
    setShowCard(!showCard);
  }

  return (
    <div className="sectionContainer">
      {/* The goal of this is to show a set of new task when a section is clicked*/}
      <button className="section">
        <label className="taskCount">18 task</label>
        <label className="taskLabel">Hello</label>
      </button>
      <div className="tasksList">
        {tasks.map((task, index) => (
          <Task label={task} id={index} />
        ))}
        ;
      </div>
      <Button className="add" icon={<Icon />} onClick={ShowAddPage} />
      {!showCard && (
        <AddTaskPage
          onClick={ShowAddPage}
          onCancel={ShowAddPage}
          onAdd={handleAddTask}
        />
      )}
    </div>
  );
}
