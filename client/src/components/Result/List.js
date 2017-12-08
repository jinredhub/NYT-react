import React from "react";
// import "./List.css";

export const List = props => {

	return(
		<div className="list-overflow-container">
			<ul id={props.id} className="list-group">
				{props.children}
			</ul>
		</div>
		);
}