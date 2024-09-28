import React from "react";
import skateList from "../datas/skateList";
import "../styles/ShoppingList.css";
import BoardItem from "./BoardItem";
import { useState } from "react";
import Categories from "./Categories";
  
function ShoppingList({cart, updateCart}) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkateList = selectedCategory === 'all' 
    ? skateList 
    : skateList.filter(skate => skate.category === selectedCategory);

  return (
    <div>
      <Categories setSelectedCategory={setSelectedCategory} />
      <ul className="skate-list">
        {filteredSkateList.map((skate) => (
          <div key={skate.id}>
          <BoardItem
            name={skate.name}
            cover={skate.cover}
            id={skate.id}
            width={skate.width}
            concave={skate.concave}
            price={skate.price}
            updateCart={updateCart}
            cart={cart}
            skate={skate}
          />
        </div>
      ))}
      </ul>
    </div>
  );
}

// Exporter le composant ShoppingList par défaut
export default ShoppingList;