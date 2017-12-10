import React from "react";

export const Cards = props => {

	return(

            <div className="card">
		        <div className="card-header text-center">
		         <h5>{props.header}</h5>
		        </div>
		        <div className="card-block">
		        {props.children}
		        </div>
            </div>                
          );
    }


