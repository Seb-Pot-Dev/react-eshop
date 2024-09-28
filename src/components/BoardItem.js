import React from "react";
import "../styles/BoardItem.css";
import InfoBoard from "./InfoBoard";
import { useState } from "react";


const BoardItem = ({ name, cover, id, width, concave, price, updateCart, cart, skate }) => {
  return (
    <li className="skate-item">
      <img className="board-item-cover" src={cover} alt={`${name} cover`} />
      <span className="board-item-name">{name}</span>
      <InfoBoard width={width} concave={concave} price={price} />
      <button className="add-to-cart" onClick={() => updateCart([...cart, skate])}>
        +
      </button>
    </li>
  );
};

export default BoardItem;