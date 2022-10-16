import React from "react";
import { useDispatch } from "react-redux";
import { ADD_CONTACT } from "../../redux/types";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const User = ({ result }) => {
  const dispatch = useDispatch();

  return (
    <Container style={{ width: "100%" }}>
      <Row className="d-flex justify-content-center align-items-center border-top p-0">
        <Col className="d-flex justify-content-start align-items-center px-0 py-3">
          <img
            src={result.image}
            alt={result.image}
            width={50}
            className="me-3"
          />
          <h3>{result.userName}</h3>

          {console.log(result.image)}
        </Col>
        <Col className="d-flex justify-content-end p-0 py-3">
          <Button
            variant="success"
            size="sm"
            onClick={() => dispatch({ type: ADD_CONTACT, payload: result.id })}
          >
            Add Friend
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default User;

// <>
//   <h1>{result.userName}</h1>
//   <img src={result.image} alt={result.image} />
//   <button
//     onClick={() => dispatch({ type: ADD_CONTACT, payload: result.id })}
//   >
//     Add friend
//   </button>
// </>
