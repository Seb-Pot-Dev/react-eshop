import React from "react";
import "../styles/BoardItem.css";
import InfoBoard from "./InfoBoard";


const BoardItem = ({ name, cover, id, width, concave, price }) => {
  return (
    <li className="skate-item">
      <img className="board-item-cover" src={cover} alt={`${name} cover`} />
      <span className="board-item-name">{name}</span>
      <InfoBoard width={width} concave={concave} price={price} />
    </li>
  );
};

export default BoardItem;