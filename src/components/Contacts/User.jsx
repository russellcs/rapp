import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BLOCK_USER } from "../../redux/types";

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
    <>
      <h1>{result.userName}</h1>
      <img src={result.image} alt={result.image} />
      <button onClick={onBlock}>{blockClick ? "Confirm" : "Block"}</button>
    </>
  );
};

export default User;
