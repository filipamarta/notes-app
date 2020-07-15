import React, { useContext } from "react";
import NoteItem from "./NoteItem";
import { NotesContext } from "../contexts/NotesContext";
import Row from "react-bootstrap/Row";

const NotesList = () => {
  const { notes } = useContext(NotesContext);
  return (
    <div>
      <Row>
        {notes.map((note, id) => (
          <NoteItem key={note.id} {...note} />
        ))}
      </Row>
    </div>
  );
};

export default NotesList;
