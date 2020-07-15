import React, { useContext, useState } from "react";
import { NotesContext } from "../contexts/NotesContext";
import { Form, Button } from "react-bootstrap";
import "./AddNoteForm.scss";

const AddNoteForm = () => {
  const { addNote } = useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SUBMIT note");
    if (title.length > 0 && text.length > 0) {
      addNote(title, text);
      setIsError(false);
      setTitle("");
      setText("");
    } else {
      setIsError(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="primary-form">
      <h2>~ To keep in mind ~</h2>
      <Form.Group controlId="addTitleNoteForm">
        <Form.Control
          as="textarea"
          rows="1"
          placeholder="give your note a title"
          name="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </Form.Group>
      <Form.Group controlId="addTextNoteForm">
        <Form.Control
          as="textarea"
          rows="3"
          placeholder="write your note here"
          name="text"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
          onClick={() => {setIsError(false)}}
        />
      </Form.Group>
      <p className={isError ? "error-msg fadeIn" : "error-msg fadeOut"}>
       Don't forget to fill in both fields{" "}
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
