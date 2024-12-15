import express from 'express';
import SpecialOffers from '../models/SpecialOffers.js';
const router = express.Router();


router.get('/special-offers', async (req, res) => {
    try {
      const offers = await SpecialOffers.find();
      res.json(offers);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  });

  router.post('/special-offers', async (req, res) => {
    try {
      const { imgUrl, name, amount, bamount } = req.body;
      if (typeof imgUrl !== 'string' || typeof name !== 'string') {
        return res.status(400).json({ error: "Invalid data: imgUrl and name must be strings" });
      }
      if (isNaN(amount) || isNaN(bamount)) {
        return res.status(400).json({ error: "Invalid data: amount and bamount must be numbers" });
      }
      const newOffer = new SpecialOffers({
        imgUrl,
        name,
        amount: Number(amount), // Convert to number
        bamount: Number(bamount), // Convert to number
      });
      await newOffer.save();
      res.status(201).json(newOffer);
    } catch (error) {
      console.error("Error:", error.message);
      res.status(400).json({ error: error.message });
    }
  });
  

  router.put('/special-offers/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
  
      // Validate input data
      if (typeof updateData.name !== 'string' || typeof updateData.imgUrl !== 'string') {
        return res.status(400).json({ error: "Invalid data: 'name' and 'imgUrl' must be strings" });
      }
  
      if (isNaN(updateData.amount) || isNaN(updateData.bamount)) {
        return res.status(400).json({ error: "Invalid data: 'amount' and 'bamount' must be numbers" });
      }
  
      const updatedOffer = await SpecialOffers.findByIdAndUpdate(id, updateData, { new: true });
      if (!updatedOffer) {
        return res.status(404).json({ error: 'Offer not found' });
      }
      res.json(updatedOffer);
    } catch (error) {
      console.error('Error updating offer:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  
  router.delete('/special-offers/:id', async (req, res) => {
    try {
      const deletedOffer = await SpecialOffers.findByIdAndDelete({ id: req.params.id });
      if (!deletedOffer) {
        return res.status(404).json({ error: 'Offer not found' });
      }
      res.json({ message: 'Offer deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  export default router;