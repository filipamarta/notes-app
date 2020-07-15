import React, { useContext, useState } from "react";
import { NotesContext } from "../contexts/NotesContext";
import { Col, Card, Button, Form } from "react-bootstrap";
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
            <Form onSubmit={handleSubmit} className="edit-form">
              <Form.Group controlId="editNoteForm">
                <Form.Control
                  as="textarea"
                  rows="8"
                  name="textarea"
                  value={updateText}
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
