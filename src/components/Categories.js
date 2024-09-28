import React from "react";
import skateList from "../datas/skateList";

const Categories = ({ setSelectedCategory }) => {
	return (
		<div>
			<select onChange={(e) => setSelectedCategory(e.target.value)}>
				<option value="all">All</option>
				{Array.from(
					new Set(skateList.map((skate) => skate.category))
				).map((category) => (
					<option key={category} value={category}>
						{category.charAt(0).toUpperCase() + category.slice(1)}
					</option>
				))}
			</select>
		</div>
	);
};

export default Categories;
