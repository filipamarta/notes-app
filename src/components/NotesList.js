import React, { useContext } from "react";
import NoteItem from "./NoteItem";
import { NotesContext } from "../contexts/NotesContext";
import Row from "react-bootstrap/Row";

const NotesList = () => {
  const { notes } = useContext(NotesContext);
  return (
    <div>
      {notes.length ? (
        <Row>
          {notes.map((note) => (
            <NoteItem key={note.id} {...note} />
          ))}
        </Row>
      ) : (
        <div className="empty-list">
          <p>there are no notes for now...</p>
        </div>
      )}
    </div>
  );
};

export default NotesList;
