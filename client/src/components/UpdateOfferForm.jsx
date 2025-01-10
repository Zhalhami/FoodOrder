import React, { useState } from 'react';
import axios from 'axios';

const UpdateOfferForm = ({ offer, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: offer.name,
    price: offer.price,
    pricebefore: offer.pricebefore,
    imgUrl: offer.imgUrl,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/api/special-offers/${offer._id}`, formData);
      onUpdate(response.data); // Notify parent component about the update
      onClose(); // Close the form/modal
    } catch (error) {
      console.error("Error updating special offer:", error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Amount"
      />
      <input
        type="number"
        name="pricebefore"
        value={formData.pricebefore}
        onChange={handleChange}
        placeholder="Amount Before"
      />
      <input
        type="text"
        name="imgUrl"
        value={formData.imgUrl}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <button type="submit">Update Offer</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default UpdateOfferForm;
