import React, { useContext, useState } from "react";
import { NotesContext } from "../contexts/NotesContext";
import { Form, Button } from "react-bootstrap";
import "./AddNoteForm.scss";

const AddNoteForm = () => {
  const { addNote } = useContext(NotesContext);
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SUBMIT note");
    if (text.length > 0) {
      addNote(text);
      setIsError(false);
      setText("");
    } else {
      setIsError(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="primary-form">
      <Form.Group controlId="addNewNoteForm">
        <Form.Label>~ To keep in mind ~</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          placeholder="write your note here"
          name="textarea"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
          onClick={() => {setIsError(false)}}
        />
      </Form.Group>
      <p className={isError ? "error-msg fadeIn" : "error-msg fadeOut"}>
        Don't forget to write something to keep in mind{" "}
        <span role="img" aria-label="hand">
          ☝️
        </span>
      </p>
      <Button type="submit" value="add note">
        Add Note{" "}
        <span role="img" aria-label="note">
          ✍️
        </span>
      </Button>
    </Form>
  );
};

export default AddNoteForm;
