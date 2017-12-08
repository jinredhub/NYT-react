import React from "react";

export const ListItem = props => 

	<li  className="list-group-item"><a href={props.url}>{props.snippet}</a>{props.children}</li>


