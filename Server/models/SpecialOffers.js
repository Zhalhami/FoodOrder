import mongoose from "mongoose";

const specialOffersSchema = new mongoose.Schema({
  imgUrl: { type: String, required: true },
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  bamount: { type: Number, required: true },
  id: { type: String, unique: true, default: () => new mongoose.Types.ObjectId().toString() }, // Unique `id`
});

const SpecialOffers = mongoose.model("SpecialOffers", specialOffersSchema);

export default SpecialOffers;
