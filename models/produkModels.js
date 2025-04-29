const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    brand: String,
    category: String,
    retailPrice: Number,
    lowestAsk: Number,
    highestBid: Number,
    image: String,
    description: String,
    releaseDate: Date,
    colorway: String
});

module.exports = mongoose.model('Product', productSchema);             