import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "./CreateContext";

function Card() {
  const { cart, addToCart } = useContext(CartContext);
  const [specialOffers, setSpecialOffers] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Fetch data from the backend
    const fetchSpecialOffers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/special-offers");
        setSpecialOffers(response.data); // Set fetched data to state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching special offers:", error);
        setLoading(false);
      }
    };
    fetchSpecialOffers();
  }, []);

  const handleAddToCart = (food) => {
    addToCart(food, 1);
  };

  if (loading) {
    return <div>Loading special offers...</div>;
  }

  return (
    <div style={{ backgroundColor: "#7D6E83", padding: "20px" }}>
      <h2 style={{ textAlign: "center", padding: "10px" }}>Special Offers</h2>
      <div className="card-display">
        {specialOffers.map((food, index) => {
          const itemInCart = cart.find((item) => item.name === food.name);
          return (
            <div className="card-main" key={index}>
              <img className="img-shape" src={food.imgUrl} alt={food.name} />
              <h2 style={{ marginTop: "10px" }}>{food.name}</h2>
              <p style={{ opacity: "0.5" }}>
                <s>₦{food.pricebefore} per plate</s>
              </p>
              <p>₦{food.price} per Plate</p>
                <div className="btn-boxm">
                  <button
                    className="btn-box"
                    onClick={() => handleAddToCart(food)}
                  >
                    <i className="fa-solid fa-fire"></i> Add to cart
                  </button>
                </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
