import React from "react";
import skateList from "../datas/skateList";
import "../styles/ShoppingList.css";
import BoardItem from "./BoardItem";
import { useState } from "react";
  
function ShoppingList({cart, updateCart}) {
  // Réduire la skateList pour obtenir des catégories uniques
  const categories = skateList.reduce(
    (acc, skate) =>
      acc.includes(skate.category) ? acc : acc.concat(skate.category),
    []
  );

  return (
    <div>
      <ul>
        {/* Parcourir les catégories pour créer des éléments de liste */}
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
        {skateList.map((skate) => (
        <div key={skate.id}>
        {/* Parcourir la skateList pour créer des éléments de liste */}
          <BoardItem
            name={skate.name}
            cover={skate.cover}
            id={skate.id}
            width={skate.width}
            concave={skate.concave}
            price={skate.price}
          />
        <button onClick={() => updateCart([...cart, skate])}>
          Ajouter au panier
        </button>
        </div>
        ))} 
    </div>
  );
}

// Exporter le composant ShoppingList par défaut
export default ShoppingList;