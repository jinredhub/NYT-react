import React from "react";

export const Input = props => 

	<div className = "form-group">
		<label for={props.id}>{props.label}</label>
		<input className = "form-control" id={props.id} placeholder={props.placeholder} 
		value={props.value} onChange={props.onChange} />
	</div>


