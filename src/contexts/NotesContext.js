import React, { createContext, useState } from "react";

export const NotesContext = createContext();

const NotesContextProvider = (props) => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text:
        "What are controlled components? In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. When a user submits a form the values from the aforementioned elements are sent with the form. With React it works differently. The component containing the form will keep track of the value of the input in it's state and will re-render the component each time the callback function e.g. onChange is fired as the state will be updated. A form element whose value is controlled by React in this way is called a controlled component. With a controlled component, every state mutation will have an associated handler function. This makes it straightforward to modify or validate user input.",
    },
    {
      id: 2,
      text:
        "What is React.createClass? React.createClass allows us to generate component classes. But with ES6, React allows us to implement component classes that use ES6 JavaScript classes.",
    },
  ]);

  const addNote = (text) => {
    console.log("ADD note", text);
    setNotes([...notes, { id: notes.length + 1, text: text }]);
  };

  const deleteNote = (id) => {
    console.log(`DELETE note with id: ${id}`);
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (updatedText, id) => {
    console.log(`EDIT note with id: ${id}`);
    setNotes(notes.map((note) => (note.id === id ? note.text = updatedText : note)));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
