const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { 
        type: String, 
        enum: ['vegetables', 'fruits', 'grains', 'dairy', 'meat', 'other'], 
        required: true 
    },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    unit: { 
        type: String, 
        enum: ['kg', 'g', 'lb', 'piece', 'liter', 'pack'], 
        required: true 
    },
    harvestDate: { type: Date, required: true },
    expiryDate: { type: Date, required: false },
    isOrganic: { type: Boolean, default: false },
    farmer: { type: String, required: true },
    location: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema, 'products');
module.exports = Product;