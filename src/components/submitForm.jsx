import React from "react";
export default function SubmitForm(props) {
  const [currTask, setCurrTask] = React.useState("");
  return (
    <div className="App ">
      <textarea
        id="task"
        value={currTask}
        onChange={(event) => setCurrTask(event.target.value)}
      />
      <button
        id="btn"
        onClick={(event) => {
          event.preventDefault();
          if (currTask !== "") {
            props.onSave(currTask);
            setCurrTask("");
          }
        }}
      >
        Add
      </button>
    </div>
  );
}
