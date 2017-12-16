import React from "react";

export const Cards = props => {

	return(

            <div className="card text-center ">
		        <div className="card-header bg-info">
		         <h5>{props.header}</h5>
		        </div>
		        <div className="card-block">
		        {props.children}
		        </div>
            </div>                
          );
    }


