import React from "react";

function Card(props){
    return(
        <div className="col-lg-4 col-sm-6 card">
            <img  className="img-shape" src = {props.img} alt="food-img" />
            <h4>{props.amount} each</h4>
            <p>{props.name}</p>
            <button><i class="fa-solid fa-fire"></i> Add to cart</button>
        </div>   
    )
}

export default Card;