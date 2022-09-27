import React from "react";
import User from "./User";

const Results = ({ results }) => {
  return results.map((result) => {
    return <User key={result.id} result={result} />;
  });
};

export default Results;
