import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("vegetables");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [unit, setUnit] = useState("kg");
    const [harvestDate, setHarvestDate] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [isOrganic, setIsOrganic] = useState(false);
    const [farmer, setFarmer] = useState("");
    const [location, setLocation] = useState("");
    const navigate = useNavigate();

    const sendData = (e) => {
        e.preventDefault();

        const newProduct = {
            name,
            description,
            category,
            price,
            quantity,
            unit,
            harvestDate,
            expiryDate,
            isOrganic,
            farmer,
            location
        };

        axios.post("http://localhost:8081/Products/add", newProduct)
            .then(() => {
                alert("Product added successfully!");
                navigate("/");
            })
            .catch((err) => {
                console.error("Error adding product:", err);
                alert("Failed to add product");
            });
    };

    return (
        <div className="container">
            <form onSubmit={sendData}>
                <div className="form-group">
                    <label htmlFor="name">Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter product name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter product description"
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select
                        className="form-control"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="vegetables">Vegetables</option>
                        <option value="fruits">Fruits</option>
                        <option value="grains">Grains</option>
                        <option value="dairy">Dairy</option>
                        <option value="meat">Meat</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter price per unit"
                        required
                        min="0"
                        step="0.01"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="Enter quantity available"
                        required
                        min="0"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="unit">Unit</label>
                    <select
                        className="form-control"
                        id="unit"
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                        required
                    >
                        <option value="kg">Kilogram (kg)</option>
                        <option value="g">Gram (g)</option>
                        <option value="lb">Pound (lb)</option>
                        <option value="piece">Piece</option>
                        <option value="liter">Liter</option>
                        <option value="pack">Pack</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="harvestDate">Harvest Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="harvestDate"
                        value={harvestDate}
                        onChange={(e) => setHarvestDate(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date (Optional)</label>
                    <input
                        type="date"
                        className="form-control"
                        id="expiryDate"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="isOrganic">Organic Certification</label>
                    <select
                        className="form-control"
                        id="isOrganic"
                        value={isOrganic}
                        onChange={(e) => setIsOrganic(e.target.value === "true")}
                        required
                    >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="farmer">Farmer Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="farmer"
                        value={farmer}
                        onChange={(e) => setFarmer(e.target.value)}
                        placeholder="Enter farmer's name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        className="form-control"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter farm location"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}