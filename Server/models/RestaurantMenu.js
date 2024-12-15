import mongoose from "mongoose";

const restaurantMenuSchema = new mongoose.Schema({
  imgUrl: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  id: { type: String, unique: true, default: () => new mongoose.Types.ObjectId().toString() }, // Unique `id`
});

const RestaurantMenu = mongoose.model("RestaurantMenu ", restaurantMenuSchema);

export default RestaurantMenu;
