import React from "react";

function Cart({ cartItems, showCart, handleClose, handleIncrease, removeFromCart }) {
  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.amount * item.quantity; // Multiply amount by quantity for each item
    }, 0);
  };

  return (
    <div>
      <div
        className={`offcanvas offcanvas-end ${showCart ? 'show' : ''}`} 
        tabIndex="-1" 
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
          {cartItems.length > 0 ? (
            <>
              <ul className="list-group">
                {cartItems.map((item, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      {item.name} - ₦{item.amount} per plate
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
              <div className="total-price" style={{ marginTop: "20px", textAlign: "right" }}>
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
