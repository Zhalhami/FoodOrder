import React from "react";

function Cart({ cartItems, showCart, handleClose, handleIncrease, removeFromCart, clearCart }) {

  
  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.price; 
      return total + price * item.quantity; 
    }, 0);
  };

  return (
    <div>
      {/* Bootstrap Offcanvas for the Cart */}
      <div
        className={`offcanvas offcanvas-end ${showCart ? "show" : ""}`}
        tabIndex="-1"
        style={{
          display: showCart ? "block" : "none",
          transition: "transform 0.3s ease-in-out",
        }}
        id="offcanvasCart"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasCartLabel">Your Cart</h5>
          <button
            type="button"
            className="btn-close text-reset"
            aria-label="Close"
            onClick={handleClose}
          ></button>
        </div>
        <div className="offcanvas-body">
          {cartItems && cartItems.length > 0 ? (
            <>
              <ul className="list-group">
                { cartItems && cartItems.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      {item.name} - ₦{item.price} per plate
                    </div>
                    <div className="quantity-controls d-flex align-items-center">
                      <button
                        className="btn btn-secondary btn-sm me-2"
                        onClick={() => removeFromCart(item)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-secondary btn-sm ms-2"
                        onClick={() => handleIncrease(item)}
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              {/* Display the total amount */}
              <div
                className="total-price"
                style={{ marginTop: "20px", textAlign: "left" }}
              >
                <button className="btn btn-danger" onClick={ () => clearCart()}> Clear Cart </button>
              </div>
              <div
                className="total-price"
                style={{ marginTop: "20px", textAlign: "right" }}
              >
                <h5>Total: ₦{calculateTotal()}</h5>
              </div>
            </>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
