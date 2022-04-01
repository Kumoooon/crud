import { Navbar, Container, Button } from "react-bootstrap";
import Modal from "./Modal";
import { useEffect, useState, Component } from "react";

function Header() {
  let [modal, setmodal] = useState(false);

  return (
    <>
      <Navbar>
        <Container fluid className="mainbar">
          <Navbar.Brand href="/" className="main" style={{ color: "white" }}>
            R-Board
          </Navbar.Brand>
          {modal === false ? null : <Modal />}
          <button
            onClick={() => {
              setmodal(!modal);
            }}
          >
            글쓰기
          </button>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
