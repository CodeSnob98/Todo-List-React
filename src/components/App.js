import React from "react";
import "./../styles/App.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ListItemText } from "@material-ui/core";
function ToDoList(props) {
  const [open, setOpen] = React.useState(false);
  const [currTask, setCurrTask] = React.useState(props.content);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleSave = (event) => {
    event.preventDefault();
    if (currTask !== "") {
      props.onSave(currTask, props.id);
      setCurrTask("");
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <ListItemText primary={props.content} />

      <button className="delete" onClick={() => props.onDelete(props.id)}>
        Delete
      </button>

      <button className="edit" onClick={handleClickOpen}>
        Edit
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Task </DialogTitle>
        <DialogContent>
          <textarea
            className="editTask"
            id={props.id}
            value={currTask}
            onChange={(event) => setCurrTask(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <button
            className="saveTask"
            onClick={(event) => {
              handleSave(event);
              handleClose();
            }}
          >
            Save
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
function ToDo(props) {
  return (
    <div className="App">
      {props.tasks.map((todo, index) => (
        <ToDoList
          className="list"
          content={todo}
          key={index}
          id={index}
          onDelete={props.onDelete}
          onSave={props.onSave}
        />
      ))}
    </div>
  );
}
function SubmitForm(props) {
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
function App() {
  const tasks = [];
  const [task, setTask] = React.useState(tasks);

  const handleDelete = (index) => {
    const arrCopy = [...task];
    arrCopy.splice(index, 1);
    //console.log(arrCopy);
    setTask(arrCopy);
  };
  const handleSubmit = (currTask) => {
    if (currTask !== "") {
      const arrCopy = [...task];
      arrCopy.push(currTask);
      console.log(currTask);
      setTask(arrCopy);
    }
  };
  const handleSave = (currTask, index) => {
    let arrCopy = [...task];
    arrCopy.splice(index, 1, currTask);
    setTask(arrCopy);
  };
  return (
    <div id="main">
      <SubmitForm onSave={handleSubmit} />
      <hr />
      <ToDo tasks={task} onDelete={handleDelete} onSave={handleSave} />
    </div>
  );
}

export default App;
