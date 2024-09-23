import React from "react";
import '../styles/Cart.css';
const Cart = () => {
	const flowers = [
		{ name: "Toy Machine", price: 60 },
		{ name: "Almost", price: 70 },
		{ name: "Antihero", price: 55 },
	];

	const totalPrice = flowers.reduce(
		(total, flower) => total + flower.price,
		0
	);

	return (
		<div className="cart-container">
			<h2 className="cart-title">Panier</h2>
			<ul className="cart-list">
				{flowers.map((flower, index) => (
					<li key={index} className="cart-item">
						{flower.name} : {flower.price}€
					</li>
				))}
			</ul>
			<p className="cart-total">Total : {totalPrice}€</p>
		</div>
	);
};

export default Cart;
