import React, { useState } from "react";
import Naviation from "./Navigation";
import { useSelector } from "react-redux";

const Messaging = () => {
  const [foreignUser, setForeignUser] = useState(2);

  const messages = useSelector((state) => state.messages);
  const user = useSelector((state) => state.user);

  const userMessages = messages.filter((message) => {
    return (
      (message.fromId === user.id || message.toId === user.id) &&
      (message.fromId === foreignUser || message.toId === foreignUser)
    );
  });

  userMessages.forEach((message) => {
    const direction = message.fromId === user.id ? "In" : "Out";
    console.log(">>>", direction);
  });

  return (
    <>
      Messaging
      <Naviation />
    </>
  );
};

export default Messaging;
