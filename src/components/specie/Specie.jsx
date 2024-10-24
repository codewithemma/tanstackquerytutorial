import React from "react";

const Specie = ({ name, language, averageLifeSpan }) => {
  return (
    <li>
      {name}
      <ul>
        <li>language: {language}</li>
        <li>average lifespan: {averageLifeSpan} </li>
      </ul>
    </li>
  );
};

export default Specie;
