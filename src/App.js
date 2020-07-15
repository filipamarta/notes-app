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
            <p>
              An app for{" "}
              <a
                href="https://www.opplane.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Opplane
              </a>{" "}
              code challenge developed <span role="img" aria-label="love">🥰</span> by{" "}
              <a
                href="https://github.com/filipamarta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Filipa Marta
              </a>{" "}
              with simple text notes that can be viewed, created, modified, and
              deleted. Should be persisted in the browser's Local Storage.
              <br />
              Tech used: ReactJS, SASS, UUID and Bootstrap. For more information
              check directly the GitHub page of this project{" "}
              <a
                href="https://github.com/filipamarta/interview-opplane-challenge"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
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
