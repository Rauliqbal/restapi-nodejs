const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
   {
      username: {
         type: String,
         required: true,
      },
      name: {
         type: String,
         required: true,
      },
      full_name: {
         type: String,
         required: true,
      },
      photo: {
         type: String,
      },
      price: {
         type: String,
         required: true,
      },
      desc: {
         type: String,
         required: true,
      },
      spec: {
         type: Array,
      },
      categories: {
         type: Array,
         required: true,
      },
      variant: {
         type: Array,
      },
   },
   { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
