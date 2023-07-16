import React from "react";

export default function OptionsTaskPage(props) {
  const { onCancel, onDelete } = props;

  return (
    <div className="dim">
      <div className="option-container">
        <button className="deleteTaskBtn text1" onClick={onDelete}>
          Delete
        </button>
        <button className="cancelTaskBtn text1" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
