 import React from "react";

const Cards = (props: { name: string; age: number; gender: string }) => {
  const { name, age, gender } = props;

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};

export default Cards;
