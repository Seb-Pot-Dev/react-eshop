import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
	const [inputValue, setInputValue] = useState("");

    function handleInput(e) {
		setInputValue(e.target.value)
	}

    function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className="footer">
			<div className="footer-elem">
				Pour les passionnés de skateboard 🛹🛹🛹
			</div>
			<div className="footer-elem">Laissez-nous votre mail :</div>
			<div className="footer-form">
				<input
					type="text"
					value={inputValue}
					placeholder="Entrez votre email"
					onBlur={handleBlur}
					onChange={handleInput}
				/>
				
			</div>
		</footer>
	);
}

export default Footer;
