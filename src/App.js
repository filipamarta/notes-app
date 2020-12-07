import React from "react";
import "./App.scss";
import NotesContextProvider from "./contexts/NotesContext";
import AddNoteForm from "./components/AddNoteForm";
import NotesList from "./components/NotesList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const App = () => (
  <NotesContextProvider>
    <Container fluid>
      <Row>
        <Col
          xs={12}
          sm={{ span: 12, offset: 0 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 8, offset: 2 }}
        >
          <header>
            <h1>Welcome to your Notes App!</h1>
          </header>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={{ span: 12, offset: 0 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 8, offset: 2 }}
        >
          <AddNoteForm />
        </Col>
      </Row>
      <Row>
        <Col>
          <NotesList />
        </Col>
      </Row>
    </Container>
  </NotesContextProvider>
);

export default App;
