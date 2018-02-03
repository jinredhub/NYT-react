import React from "react";

export const DeleteBtn = props => 

	<button 
		className="btn btn-danger btn-sm float-right"
		onClick={()=>props.deleteArticle(props.snippet)}>{props.children}
	</button>


