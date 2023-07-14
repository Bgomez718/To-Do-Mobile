import react from "react";

export default function OptionsTaskPage(props) {
  const { onCancel, onDelete } = props;

  function handleDelete() {
    onDelete(); // Invoke the onDelete callback passed from the Task component
  }

  return (
    <div className="dim">
      <div className="option-container">
        <button className="addTaskBtn text1"> Update </button>
        <button className="deleteTaskBtn text1" onClick={props.onDelete}>
          Delete
        </button>
        <button className="cancelTaskBtn text1" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
