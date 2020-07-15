import React, { useContext } from "react";
import NoteItem from "./NoteItem";
import { NotesContext } from "../contexts/NotesContext";
import { CardColumns } from "react-bootstrap";

const NotesList = () => {
  const { notes } = useContext(NotesContext);
  return (
    <div>
      {notes.length ? (
        <CardColumns>
          {notes.map((note) => (
            <NoteItem key={note.id} {...note} />
          ))}
        </CardColumns>
      ) : (
        <div className="empty-list">
          <p>there are no notes for now...</p>
        </div>
      )}
    </div>
  );
};

export default NotesList;
