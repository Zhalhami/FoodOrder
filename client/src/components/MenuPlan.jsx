import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Cart from "./Cart";
import { CartContext } from "./CreateContext";
import Footer from "./Footer";
import emailjs from 'emailjs-com';
import axios from "axios";

function MenuPlan() { 
  const { cart, showCart, handleShowCart, handleCloseCart, removeFromCart, addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(1);
  const [dietaryRestriction, setDietaryRestriction] = useState('');
  const [menus, setMenus] = useState([]);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const fetchMenuData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/main-menu");
        setTimeout(() => {
          setMenus(response.data)
          setLoading(false)
        }, 3000)
      } catch (error) {
        console.error("Error fetching menu data:", error);
        setLoading(false);
      }
    };
  
    fetchMenuData();
  }, []);

  const handleAddToCart = (food) => {
    addToCart(food, 1); // Add an item to the cart with quantity 1.
  };

  const handleClick = (btnNum) => {
    setToggle(btnNum);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const serviceId = "service_1q6gnhd";
  //   const templateId = 'template_d5fqzfp';
  //   const publicKey = 'SEB0ias0vozojUMXP';

  //   const templateParams = {
  //     from_name: dietaryRestriction,
  //     user_email: email,
  //     message: message
  //   };

  //   emailjs.send(serviceId, templateId, templateParams, publicKey)
  //     .then((response) => {
  //       console.log('SUCCESS!', response.status, response.text);
  //       setAlertMessage("Message sent successfully! Hi, thanks for reaching out to us, We will get back to you via the email you provided shortly!!!");
  //       setShowAlert(true);

  //       setDietaryRestriction('');
  //       setEmail('');
  //       setMessage('');
  //     }, (error) => {
  //       console.log('FAILED...', error);
  //       setAlertMessage("Failed to send message, please try again later.");
  //       setShowAlert(true);
  //     });

  //   setTimeout(() => {
  //     setShowAlert(false);
  //   }, 7000);
  // };

  return (
    <div className="wrapper">
      <Header />
      <Cart
        cartItems={cart}
        showCart={showCart}
        handleClose={handleCloseCart}
        handleIncrease={handleAddToCart}
        removeFromCart={removeFromCart}
      />
      <main style={{ flex: '1', marginTop: '90px' }}>
        <section className="menu-section">
          <h1 className="section-title">Restaurant Menu</h1>
          {loading ? (
            <div className="loader"></div> 
          ) : (
            <div className="menu-grid">
              {menus.map((menu) => (
                <div className="menu-card" key={menu.id}>
                  <img className="menu-image" src={menu.imgUrl} alt={menu.name} />
                  <div className="menu-info">
                    <h4 className="menu-name">{menu.name}</h4>
                    <p className="menu-price">₦{menu.price}</p>
                    <button
                      className="menu-btn"
                      onClick={() => handleAddToCart(menu)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        <section className="menu-planning">
          <h2 className="section-title">Plan Your Menu</h2>
          <div className="btn-container">
            <button className="plan-btn" onClick={() => handleClick(1)}>
              <i className="fa-solid fa-bowl-food"></i>
              <h4>Custom Order</h4>
              <p>
                Have your order customized to your preference and get it on time.
              </p>
            </button>
            <button className="plan-btn" onClick={() => handleClick(2)}>
              <i className="fa-solid fa-user-doctor"></i>
              <h4>Chat With a Nutritionist</h4>
              <p>
                Our experienced nutritionists are ready to help you plan your meal.
              </p>
            </button>
          </div>
          <hr />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default MenuPlan;
