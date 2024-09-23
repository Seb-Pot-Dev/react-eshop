import React from "react";
import skateList from "../datas/skateList";
import "../styles/ShoppingList.css";
function ShoppingList() {
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
			<ul className="skate-list">
				{/* Parcourir la skateList pour créer des éléments de liste */}
				{skateList.map((skate) => (
					<li style={{display: 'flex'}} key={skate.id} className="skate-item">
						{skate.name}&nbsp;
						{skate.isBestSale && (
							<div title="en solde" className="sales">🔥</div>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}

// Exporter le composant ShoppingList par défaut
export default ShoppingList;
