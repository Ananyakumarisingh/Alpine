const mongoose = require("mongoose");
const productSchema = mongoose.Schema({});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
