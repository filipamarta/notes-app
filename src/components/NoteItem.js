import React, { useContext, useState } from "react";
import { NotesContext } from "../contexts/NotesContext";
import { Card, Button, Form } from "react-bootstrap";
import "./NoteItem.scss";

const NoteItem = (props) => {
  const { title, text, id } = props;
  const { deleteNote, editNote } = useContext(NotesContext);
  const [isEdit, setIsEdit] = useState(false);
  const [updateText, setUpdateText] = useState(text);
  const [updateTitle, setUpdateTitle] = useState(title);

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log("UPDATE note");
    editNote(updateTitle, updateText, id);
    setIsEdit(false);
  };

  return (
    <Card className="note-item">
      <Card.Body>
        {isEdit ? (
          <Form onSubmit={handleSubmit} className="edit-form">
            <Form.Group controlId="editTitleNoteForm">
              <Form.Control
                as="textarea"
                rows="1"
                name="textarea"
                value={updateTitle}
                required
                onChange={(event) => {
                  setUpdateTitle(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="editTextNoteForm">
              <Form.Control
                as="textarea"
                rows="6"
                name="textarea"
                value={updateText}
                required
                onChange={(event) => {
                  setUpdateText(event.target.value);
                }}
              />
            </Form.Group>
            <Button type="submit" value="update note" className="edit-btn">
              Update note
            </Button>
          </Form>
        ) : (
          <span>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Button
              className="mr-2 delete-btn"
              type="button"
              name="delete"
              onClick={() => {
                deleteNote(id);
              }}
            >
              Delete
            </Button>
            <Button
              className="edit-btn"
              type="button"
              name="edit"
              onClick={() => {
                setIsEdit(true);
              }}
            >
              Edit
            </Button>
          </span>
        )}
      </Card.Body>
    </Card>
  );
};

export default NoteItem;
