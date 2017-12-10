import React from "react";

export const SaveBtn = props => 

	<button 
		className="btn btn-success float-right"
		onClick={()=>props.saveArticle(props.snippet, props.url)}>{props.children}
	</button>


