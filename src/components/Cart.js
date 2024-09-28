import React from "react";
import "../styles/Cart.css";
import { useState } from "react";

const Cart = ({cart, updateCart}) => {

	const [isOpen, setIsOpen] = useState(false);

	return isOpen ? (
		<>
			<div className="cart-container">
				<div className="cart-closed">
					<button onClick={() => setIsOpen(false)}>
						Fermer le panier
					</button>
				</div>
				<h2 className="cart-title">Panier</h2>
				<ul className="cart-list">
				{Object.entries(cart.reduce((acc, skate) => {
					acc[skate.name] = acc[skate.name] || { ...skate, quantity: 0 };
					acc[skate.name].quantity += 1;
					return acc;
				}, {})).map(([name, skate]) => (
					<li key={name}>{name} - {skate.price}€ x {skate.quantity}</li>
				))}	
				</ul>
				<p className="cart-total">Total : {cart.reduce((acc, skate) => acc + skate.price, 0)}€</p>
				<button onClick={() => updateCart([])}>
					Vider le panier
				</button>
			</div>
		</>
	) : (
		<div className="cart-closed">
			<button onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
		</div>
	);
};

export default Cart;
