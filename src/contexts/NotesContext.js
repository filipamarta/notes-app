import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const NotesContext = createContext();

const NotesContextProvider = (props) => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);

  useEffect( () => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes]);

  const addNote = (title, text) => {
    //console.log(`ADD note`);
    setNotes([...notes, { id: uuidv4(), title: title, text: text }]);
  };

  const deleteNote = (id) => {
    //console.log(`DELETE note with id: ${id}`);
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (title, text, id) => {
    //console.log(`EDIT note with id: ${id}`);
    let updatedNotes = notes.map((note) => (note.id === id ? { ...note, title, text } : note))
    setNotes(updatedNotes);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
