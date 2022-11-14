const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
      },
      products_count: {
         type: Number,
         required: true,
      },
      photo: {
         type: String,
         reuired: true,
      },
   },
   { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
