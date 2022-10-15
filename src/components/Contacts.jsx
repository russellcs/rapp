import React from "react";
import Naviation from "./Navigation";
import { useSelector } from "react-redux";
import Results from "./Contacts/Results";

const Contacts = () => {
  const allUsers = useSelector((state) => state.allUsers);
  const user = useSelector((state) => state.user);

  console.log(user);

  //remove blocked from friends
  const friends = user.friends.filter((friend) => {
    return !user.blocked.includes(friend);
  });

  //keep all the friends from all users
  const results = allUsers.filter((person) => {
    return friends.includes(person.id);
  });

  console.log(results);

  return (
    <>
      {/* <Naviation /> */}
      <h2>Contacts</h2>
      {results.length > 0 ? (
        <Results results={results} />
      ) : (
        <p>Sorry, no friends found</p>
      )}
    </>
  );
};

export default Contacts;
