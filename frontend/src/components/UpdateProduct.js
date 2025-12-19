import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./UpdateProduct.css";

const UpdateProduct = () => {
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
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8081/Products/get/${id}`)
            .then((res) => {
                const productData = res.data.product;
                setName(productData.name);
                setDescription(productData.description);
                setCategory(productData.category);
                setPrice(productData.price);
                setQuantity(productData.quantity);
                setUnit(productData.unit);
                setHarvestDate(new Date(productData.harvestDate).toISOString().split('T')[0]);
                setExpiryDate(productData.expiryDate ? new Date(productData.expiryDate).toISOString().split('T')[0] : "");
                setIsOrganic(productData.isOrganic);
                setFarmer(productData.farmer);
                setLocation(productData.location);
            })
            .catch((err) => {
                console.error("Error fetching product data:", err);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = {
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

        axios.put(`http://localhost:8081/Products/update/${id}`, updatedProduct)
            .then(() => {
                alert("Product updated successfully!");
                navigate("/products");
            })
            .catch((err) => {
                console.error("Error updating product:", err);
                alert("Failed to update product");
            });
    };

    return (
        <div className="update-container">
            <h1>Update Product</h1>
            <form onSubmit={handleSubmit}>
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

                <button type="submit" className="btn btn-primary">Update Product</button>
            </form>
        </div>
    );
};

export default UpdateProduct;