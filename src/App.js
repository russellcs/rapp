import React, { useEffect } from "react";
import Startup from "./components/Startup";
import Interface from "./components/Interface";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_SCREEN_MODE } from "./redux/types";
import { DataController } from "./controllers";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Naviation from "./components/Navigation";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true); //local state
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const setInterface = () => {
    const payload = user.id ? 2 : 1;
    dispatch({ type: SET_SCREEN_MODE, payload });
    setLoading(false);
  };

  //after two seconds set loading to false
  useEffect(() => {
    setTimeout(() => {
      setInterface();
    }, 1000);

    //get initial data
    // const _dataController = new DataController();
    // _dataController.init();
  }, []);

  return (
    <Container
      className="p-3 d-flex flex-column justify-content-between"
      style={{ "block-size": "100vh" }}
    >
      <Row style={{ "overflow-y": "scroll" }}>
        {loading ? <Startup /> : <Interface />}
      </Row>
      <Row className="d-flex">
        <Col>
          <Naviation />
        </Col>
        <Col className="d-flex justify-content-end">
          <Button
            size="sm"
            variant="success"
            onClick={() => localStorage.clear()}
          >
            Clear localStorage
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
