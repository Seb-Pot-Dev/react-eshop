import React from 'react';

function InfoBoard({ width, concave, price }) {
	return (
		<div className="board-item-info">
			<p>Price: ${price}</p>
			<p>Width: {width}</p>
			<p>Concave: {concave}</p>
		</div>
	);
}

export default InfoBoard;