import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_SCREEN_MODE } from "../redux/types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Nav, Card, Button, Stack } from "react-bootstrap";

const Naviation = () => {
  const dispatch = useDispatch();
  const screenMode = useSelector((state) => state.screenMode);

  return (
    <Stack direction="horizontal" gap={3}>
      {screenMode !== 2 && (
        <Button
          size="sm"
          variant="success"
          onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 2 })}
        >
          Contacts
        </Button>
      )}

      {screenMode !== 3 && (
        <Button
          size="sm"
          variant="success"
          onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 3 })}
        >
          Messaging
        </Button>
      )}

      {screenMode !== 4 && (
        <Button
          size="sm"
          variant="success"
          onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 4 })}
        >
          Search
        </Button>
      )}
    </Stack>
  );
};

export default Naviation;
