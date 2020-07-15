import React, { useContext, useState } from "react";
import { NotesContext } from "../contexts/NotesContext";
import { Col, Card, Button } from "react-bootstrap";
import "./NoteItem.scss";

const NoteItem = (props) => {
  const { text, id } = props;
  const { deleteNote, editNote } = useContext(NotesContext);
  const [isEdit, setIsEdit] = useState(false);
  const [updateText, setUpdateText] = useState(text);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("UPDATE note");
    editNote(updateText, id);
    setIsEdit(false);
  };

  return (
    <Col xs={12} sm={6} md={6} lg={4}>
      <Card className="note-item">
        <Card.Body>
          <Card.Title>Note #{id}</Card.Title>
          {isEdit ? (
            <form onSubmit={handleSubmit}>
              <textarea
                name="textarea"
                value={updateText}
                onChange={(event) => {
                  setUpdateText(event.target.value);
                }}
              />
              <button type="submit" value="update note">
                Update note
              </button>
            </form>
          ) : (
            <span>
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
    </Col>
  );
};

export default NoteItem;
