import react from "react";
import { useState } from "react";
import TaskList from "../TaskList";

export default function Categories(props) {
  const [taskCount, setTaskCount] = useState();
  const [showList, setShowList] = useState(false);

  function handleShowList() {
    setShowList(!showList);
  }

  return (
    <div className="categories-container">
      <div className="flex-container">
        <label className="titles"> CATEGORIES </label>
      </div>
      <button className="section">
        <label className="taskCount">{props.count} </label>
        <label className="taskLabel">{props.label}</label>
      </button>
      {showList && <TaskList /> }
    </div>
  );
}
