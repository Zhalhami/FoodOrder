import React, {useContext, useEffect, useState} from "react";
import Header from "./Header";
import Cart from "./Cart";
import { CartContext } from "./CreateContext";
import Footer from "./Footer";
import emailjs from 'emailjs-com'
import  axios  from "axios";

function MenuPlan() { 
  const { cart, showCart, handleShowCart, handleCloseCart, removeFromCart,addToCart } = useContext(CartContext);
  const [toggle, setToggle] = useState(1)
  const [dietaryRestriction, setDietaryRestriction] = useState('');
  const [menus, setMenus] = useState([])
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch both collections from the database
        const [menuResponse, foodResponse] = await Promise.all([
          axios.get("http://localhost:5000/api/main-menu"),
          axios.get("http://localhost:5000/api/special-offers"),
        ]);
  
        // Combine them using the name field to avoid duplicates
        const combinedData = [...menuResponse.data, ...foodResponse.data].reduce(
          (uniqueItems, item) => {
            if (!uniqueItems.some((existingItem) => existingItem.name === item.name)) {
              uniqueItems.push(item);
            }
            return uniqueItems;
          },
          []
        );
  
        // Update state
        setMenus(combinedData);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };
  
    fetchData();
  }, []);

  const handleAddToCart = (food) => {
    addToCart(food, 1); // Add an item to the cart with quantity 1.
  };

  const handleIncrease = (food) => {
    addToCart(food, 1); // Increase the quantity by 1.
  };

  const handleDecrease = (food) => {
    const itemInCart = cart.find((item) => item.name === food.name);
    if (itemInCart.quantity > 1) {
      addToCart(food, -1); // Decrease the quantity by 1.
    } else {
      addToCart(food, -itemInCart.quantity); // Remove the item entirely.
    }
  };
    
  const handleClick = (btnNum) => {
      setToggle(btnNum);
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = "service_1q6gnhd";
        const templateId = 'template_d5fqzfp';
        const publicKey = 'SEB0ias0vozojUMXP';

        const templateParams = {
            from_name: dietaryRestriction,
            user_email: email,
            message: message
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setAlertMessage("Message sent successfully! Hi, thanks for reaching out to me, We will get back to you via the email you provided shortly!!!  ");
                setShowAlert(true);

                setDietaryRestriction('');
                setEmail('');
                setMessage('');
            }, (error) => {
                console.log('FAILED...', error);
                setAlertMessage("Failed to send message, please try again later.");
                setShowAlert(true);
            });

        setTimeout(() => {
            setShowAlert(false);
        }, 7000);
    };
    return (
      <div className="wrapper">
        <Header />
        <Cart
        cartItems={cart}
        showCart={showCart}
        handleClose={handleCloseCart}
        handleIncrease={handleIncrease}
        removeFromCart={removeFromCart}
      />
        <div style={{flex:'1', marginTop:'90px'}}>
        <h1 style={{textAlign:'center', padding:'10px'}}> Restaurant Menu</h1>
        <div className="menu">
      {menus.map((menu) => {
      return (
        <div className="menu-cardMain" key={menu.id}>
          <div className="menu-card">
            <div>
              <img className="menu-image" src={menu.imgUrl} alt="pic loading ..." />
            </div>
            <div style={{ textAlign: 'center' }}>
              <h4>{menu.name}</h4>
              <p>₦{menu.price}</p>
              <button className="menu-btn" onClick={() => handleAddToCart(menu)}>Add To Cart</button>
            </div>
          </div>
        </div>
      );
    })}
        </div>
        <div>
          <h2 style={{textAlign:'center', padding:'20px', margin:"10px"}}>Plan your Menu</h2>
          <div className="btn-boxm" style={{gap:'20px'}}>
            <div typeof='button'  onClick={() => handleClick(1)} className="menu-planBtn" >
              <i class="fa-solid fa-bowl-food fa-2x"></i>
              <h4>Custom Order</h4>
              <p>Have you order customized to your preference and get it at the stipulated time</p>
            </div>
            <div typeof="button"  onClick={() => handleClick(2)} className="menu-planBtn">
            <i class="fa-solid fa-user-doctor fa-2x"></i>
              <h4>Chat With a Nutritionist</h4>
              <p>Our experienced Nutritionists are waiting to help you get your meal planned</p>
            </div>
          </div>
            <hr></hr>
            {toggle === 1 && (
              <div className="custom">
              {showAlert && (
                <div className="custom-alert">
                    {alertMessage}
                </div>
            )}
                <h3>Get your Diet order</h3>
                <div style={{display:'flex', justifyContent:'center'}}>
                <form onSubmit={handleSubmit}>
                <div className="form">
                    <h3>Send Us Message ✉</h3>
                    <input className="input-style" type="text" placeholder="State your dietary restriction/Nutritional goal" value={dietaryRestriction} onChange={(e) => setDietaryRestriction(e.target.value)} required />
                    <input className="input-style" type="email" placeholder="Your Email"  value={email} onChange={(e) =>setEmail(e.target.email)} required />
                    <textarea className="input-style" style={{maxHeight:'100px', minHeight:'50px'}} type="text" placeholder="Tell us how you want your food" value={message} onChange={(e) =>setMessage(e.target.message)} required />
                    <button type="submit" className="form-btn">Send</button>
                </div>
                </form>
                </div>
            </div>
            )}
            {toggle === 2 && (
              <div className="custom">
                <h3>Seemless chat with top expert Nutritionist</h3>
                <div style={{display:'flex', justifyContent:'center'}}>
                <form>
                  <div className="form">
                  <input className="input-style" type="text" placeholder="message"/>
                  <button type="submit" className="form-btn">Send</button>
                  </div>
                </form>
                </div>
              </div>
            )}
        </div>
        </div>
        <Footer/>   
      </div>
    );
}

export default MenuPlan;