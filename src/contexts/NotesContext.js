import React, { createContext, useState, useEffect } from "react";

export const NotesContext = createContext();

const NotesContextProvider = (props) => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);

  useEffect( () => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes]);

  const addNote = (text) => {
    setNotes([...notes, { id: notes.length + 1, text: text }]);
  };

  const deleteNote = (id) => {
    console.log(`DELETE note with id: ${id}`);
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (text, id) => {
    console.log(`EDIT note with id: ${id}`);
    let updatedNotes = notes.map((note) => (note.id === id ? { ...note, text } : note))
    setNotes(updatedNotes);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
