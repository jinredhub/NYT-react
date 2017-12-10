import React from "react";

export const DeleteBtn = props => 

	<button 
		className="btn btn-danger"
		onClick={()=>props.deleteArticle(props.snippet)}>{props.children}
	</button>


