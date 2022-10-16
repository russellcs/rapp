import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BLOCK_USER } from "../../redux/types";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const User = ({ result }) => {
  const dispatch = useDispatch();
  const [blockClick, setBlockClick] = useState(false);

  const onBlock = () => {
    if (blockClick) {
      dispatch({ type: BLOCK_USER, payload: result.id });
    } else {
      setTimeout(() => {
        setBlockClick(true);
      }, 1000);
    }
  };

  return (
    <Container style={{ width: "100%" }}>
      <Row className="d-flex justify-content-center align-items-center border-top p-0">
        <Col className="d-flex justify-content-start align-items-center px-0 py-3">
          <img
            src={result.image}
            alt={`${result.userName}'s Photo`}
            width={50}
            className="me-3"
          />
          <p style={{ "font-weight": "bold" }}>{result.userName}</p>

          {console.log(result.image)}
        </Col>
        <Col className="d-flex justify-content-end p-0 py-3">
          <Button variant="success" size="sm" onClick={onBlock}>
            {blockClick ? "Confirm" : "Block"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default User;
