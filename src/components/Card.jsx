import React from "react";
import foods from "../food";

function Card({ addToCart, cartItems=[] }) {
    const handleAddToCart = (food) => {
      addToCart(food, 1);
    };
  
    const handleIncrease = (food) => {
      console.log('increasing', food)
      addToCart(food, 1);
    };
  
    const handleDecrease = (food) => {
      const itemInCart = cartItems.find(item => item.name === food.name);
      if (itemInCart.quantity > 1) {
        addToCart(food, -1); 
      } else {
        addToCart(food, -itemInCart.quantity);
      }
    };
  
    return (
        <div style={{ backgroundColor: "#7D6E83", padding: '20px' }}>
            <h2 style={{ textAlign: "center", padding: "10px" }}>Special Offers</h2>
            <div className="card-display">
            {foods.map((food, index) => {
                const itemInCart = cartItems.find(item => item.name === food.name);
                return (
                <div className="card-main" key={index}>
                    <img className="img-shape" src={food.imgUrl} alt="food-img" />
                    <h2 style={{marginTop:'10px'}}>{food.name}</h2>
                    <p style={{opacity:'0.5'}}><s>{food.bamount} per plate</s></p>
                    <p>#{food.amount} per Plate</p>
                    {itemInCart ? (
                    <div style={{textAlign:'center'}}className="quantity-controls">
                        <button className="btn btn-secondary" onClick={() => handleDecrease(food)}>-</button>
                        <span>{itemInCart.quantity}</span>
                        <button className="btn btn-secondary" onClick={() => handleIncrease(food)}>+</button>
                    </div>
                    ) : (
                    <div className="btn-boxm">
                      <button className="btn-box" onClick={() => handleAddToCart(food)}>
                          <i className="fa-solid fa-fire"></i> Add to cart
                      </button>
                    </div>
                    )}
                </div>
                );
            })}
            </div>
        </div>
        );
  }

export default Card;