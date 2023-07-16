import react from "react";
import Button from "./Button";
import AddTaskPage from "./components/AddTaskPage";
import Task from "./Task";
import { useState } from "react";
import { ReactComponent as Icon } from "./resources/plus-add-new-create-svgrepo-com.svg";

export default function TaskList(props) {
  const [showCard, setShowCard] = useState("false");
  const [tasks, setTask] = useState([]);
  const [taskCount, setTaskCount] = useState(getCount());

  function getCount() {
    let count = 0;
    tasks.map((task) => {
      count++;
    });
    if (count == 1) {
      return 1 + " task";
    }
    return count + " tasks";
  }

  function ShowAddPage() {
    setShowCard(!showCard);
  }

  function handleAddTask(task) {
    //need to grab
    setTask([...tasks, task]);
    setShowCard(!showCard);
  }

  function handleDeleteTask(id) {
    const newList = [...tasks];
    newList.splice(id, 1);
    setTask(newList);
  }

  return (
    <div className="sectionContainer">
      {/* The goal of this is to show a set of new task when a section is clicked*/}

      <div className="flex-container">
        <label className="titles">TODAY'S TASK</label>
      </div>
      <div className="tasksList">
        {tasks.map((task, index) => (
          <Task label={task} id={index} onDelete={handleDeleteTask} />
        ))}
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
