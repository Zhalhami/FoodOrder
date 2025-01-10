import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import UpdateOfferForm from "./UpdateOfferForm";
import UpdateMenuForm from "./UpdateMenuForm";
axios.defaults.baseURL = 'http://localhost:5000';


function Admin() {
  const [menuItems, setMenuItems] = useState([]);
  const [specialOffers, setSpecialOffers] = useState([]);
  const [specialOfferForm, setSpecialOfferForm] = useState({imgUrl: '',name: '',price: '', pricebefore: '',});
  const [restaurantForm, setrestaurantForm] = useState({imgUrl: '', name: '', price: '' });
  const [editingOffer, setEditingOffer] = useState(null);
  const [editingMenu, setEditingMenu] = useState(null);

  useEffect(() => {
    fetchSpecialOffers();
    fetchRestaurantMenu();
  }, []);

  const fetchSpecialOffers = async () => {
    try {
      const response = await axios.get('/api/special-offers');
      setSpecialOffers(response.data);
    } catch (error) {
      console.error('Error fetching special offers:', error);
    }
  };
  
  const fetchRestaurantMenu = async ()=> {
    try {
      const response = await axios.get("/api/main-menu");
      setMenuItems(response.data);
    }catch(error){
      console.error("Error fetching restaurant menus:", error)
    }
  }
  
  const handleSpecialOffersFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/main-menu", {
        ...specialOfferForm,
        isSpecialOffer: true,
      });
      setSpecialOffers((prevOffers) => [...prevOffers, response.data]); // Add the new offer
      setSpecialOfferForm({ imgUrl: '', name: '', price: '', pricebefore: '' });
      console.log("Special offer added:", response.data);
    } catch (error) {
      console.error("Error adding Special Offer:", error);
    }
  };
  
  const handleRestaurantFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/main-menu", {
        ...restaurantForm,
        isSpecialOffer: false,
      });
      setMenuItems((prevMenuItems) => [...prevMenuItems, response.data]); // Add the new menu item
      setrestaurantForm({ imgUrl: '', name: '', price: '' });
    } catch (error) {
      console.error("Error adding Menu:", error);
    }
  };
  

  const handleDeleteSpecialOffer = async (id) => {
    try {
      await axios.delete(`/api/special-offers/${id}`);
      setSpecialOffers((prevOffers) => prevOffers.filter((offer) => offer._id !== id));
      alert("Special offer deleted successfully");
    } catch (error) {
      console.error('Error deleting special offer:', error);
      alert("Error while deleting special offer, please try again later.");
    }
  };
  

  const handleDeleteRestaurant = async (id) => {
    try {
      await axios.delete(`/api/main-menu/${id}`);
      setMenuItems((prevMenuItems) => prevMenuItems.filter((menu) => menu._id !== id));
      alert("Menu deleted successfully");
    } catch (error) {
      console.error('Error deleting menu:', error);
      alert("Error while deleting, please try again later.");
    }
  };
  
  const handleUpdate = (updatedOffer) => {
    setSpecialOffers(specialOffers.map((offer) => (offer._id === updatedOffer._id ? updatedOffer : offer)));
    setEditingOffer(null); 
  };

  const handleMenuUpdate = (updatedMenu) => {
    setrestaurantForm(menuItems.map((menu) => (menu._id === updatedMenu._id ? updatedMenu : menu)));
    setEditingMenu(null); 
  };

  

  return (
    <div style={{backgroundColor:"#7D6E83"}}>
      <div>
        <h1 style={{textAlign:"center", color:"#fff"}}>You've Got Control</h1>
      </div>

      {/* Special Offers Section */}
      <div className="adminform">
        <h2>Special Offers Section</h2>
        <form onSubmit={handleSpecialOffersFormSubmit}>
        <input
            type="text"
            className="admininput"
            placeholder="Image URL"
            value={specialOfferForm.imgUrl}
            onChange={(e) => setSpecialOfferForm({ ...specialOfferForm, imgUrl: e.target.value })}
            required
          />
          <input
            type="text"
            className="admininput"
            placeholder="Name"
            value={specialOfferForm.name}
            onChange={(e) => setSpecialOfferForm({ ...specialOfferForm, name: e.target.value })}
            required
          />
          <input
            type="number"
            className="admininput"
            placeholder="Amount"
            value={specialOfferForm.price}
            onChange={(e) => setSpecialOfferForm({ ...specialOfferForm, price: e.target.value })}
            required
          />
          <input
            type="number"
            className="admininput"
            placeholder="Amount Before"
            value={specialOfferForm.pricebefore}
            onChange={(e) => setSpecialOfferForm({ ...specialOfferForm, pricebefore: e.target.value })}
            required
          />
          <button  type="submit" className="btn btn-success">+ Add Offer</button>
        </form>

        {/* Render Special Offers */}
        <div style={{marginTop:"30px"}} >
        <div className="card-display">
          {specialOffers.map((offer) => (
            <div className="admincard-main" key={offer._id}>
              <img className="img-shape" src={offer.imgUrl} alt={offer.name} />
              <h2 style={{ marginTop: '10px' }}>{offer.name}</h2>
              <p style={{ opacity: '0.5' }}><s>₦{offer.pricebefore} per plate</s></p>
              <p>₦{offer.price} per Plate</p>
              <div>
                <button onClick={() => setEditingOffer(offer)} className="btn btn-info">Update</button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteSpecialOffer(offer._id)}
                >
                  Remove
                </button>
              </div>
            </div>
            
          ))}
          </div>
        {editingOffer && (
        <UpdateOfferForm
          offer={editingOffer}
          onClose={() => setEditingOffer(null)}
          onUpdate={handleUpdate}
        />
      )}
        </div>
      </div>

      {/* Menu Section */}
      <div className="adminform">
        <h2>Menu Section</h2>
        <form onSubmit={handleRestaurantFormSubmit}>
        <input
            type="text"
            className="admininput"
            placeholder="Image URL"
            value={restaurantForm.imgUrl}
            onChange={(e) => setrestaurantForm({ ...restaurantForm, imgUrl: e.target.value })}
            required
          />
          <input
            type="text"
            className="admininput"
            placeholder="Name"
            value={restaurantForm.name}
            onChange={(e) => setrestaurantForm({ ...restaurantForm, name: e.target.value })}
            required
          />
          <input
            type="number"
            className="admininput"
            placeholder="Price"
            value={restaurantForm.price}
            onChange={(e) => setrestaurantForm({ ...restaurantForm, price: e.target.value })}
            required
          />
          
          <button  type="submit" className="btn btn-success">+ Add Menu</button>
        </form>
        <div style={{marginTop: "20px"}}>
          <div className="card-display">
            {menuItems.map((menu) => (
            <div className="admincard-main" key={menu._id}>
                <img className="img-shape" src={menu.imgUrl} alt="menu-img" />
                  <h4 style={{ marginTop: '10px' }}>{menu.name}</h4>
                  <p>₦{menu.price}</p>
              <button onClick={() => setEditingMenu(menu)} className="btn btn-info">Update</button>
              <button className="btn btn-danger" onClick={() => handleDeleteRestaurant(menu._id)}>Remove</button>
            </div>
          ))}
          </div>
        </div>
        {editingMenu && (
        <UpdateMenuForm
          menu={editingMenu}
          onClose={() => setEditingMenu(null)}
          onUpdate={handleMenuUpdate}
        />
      )}
      </div>
    </div>
  );
}

export default Admin;
