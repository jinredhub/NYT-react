import React from "react";

export const ListItem = props => 

	<li  className="list-group-item"><a href={props.url}>{props.children}</a><button 
	className="btn btn-success"
		onClick={()=>props.saveArticle(props.children, props.url)}>save</button></li>


