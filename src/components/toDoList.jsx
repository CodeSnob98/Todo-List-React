import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";
import { ListItemText } from "@material-ui/core";
export default function ToDoList(props) {
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
