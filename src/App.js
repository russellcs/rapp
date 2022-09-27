import React, { useEffect } from "react";
import Startup from "./components/Startup";
import Interface from "./components/Interface";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_SCREEN_MODE } from "./redux/types";
import { DataController } from "./controllers";

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
    const _dataController = new DataController();
    _dataController.init();
  }, []);

  return (
    <>
      <button onClick={() => localStorage.clear()}>Clear localStorage</button>
      {loading ? <Startup /> : <Interface />}
    </>
  );
};

export default App;
