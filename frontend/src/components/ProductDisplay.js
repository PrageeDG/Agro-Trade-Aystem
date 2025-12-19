import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductDisplay.css";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function ProductDisplay() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        function getProducts() {
            axios
                .get("http://localhost:8081/Products/")
                .then((res) => {
                    setProducts(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getProducts();
    }, []);

    const deleteProduct = (productId) => {
        axios
            .delete(`http://localhost:8081/Products/delete/${productId}`)
            .then(() => {
                setProducts(products.filter((product) => product._id !== productId));
                alert(`Product with ID: ${productId} deleted successfully.`);
            })
            .catch((err) => {
                alert(`Error deleting product: ${err.message}`);
            });
    };

    const downloadPdf = (product) => {
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text(`Product Details: ${product.name}`, 14, 15);
    
        const headers = [["Field", "Value"]];
        const data = [
            ["Name", product.name],
            ["Description", product.description],
            ["Category", product.category],
            ["Price", `$${product.price} per ${product.unit}`],
            ["Quantity", `${product.quantity} ${product.unit}`],
            ["Harvest Date", new Date(product.harvestDate).toLocaleDateString()],
            ["Expiry Date", product.expiryDate ? new Date(product.expiryDate).toLocaleDateString() : "N/A"],
            ["Organic", product.isOrganic ? "Yes" : "No"],
            ["Farmer", product.farmer],
            ["Location", product.location],
            ["Listed On", new Date(product.createdAt).toLocaleString()]
        ];
    
        autoTable(doc, {
            head: headers,
            body: data,
            startY: 25,
            theme: "grid",
            styles: { fontSize: 10 },
            headStyles: { fillColor: [39, 174, 96] },
        });
    
        doc.save(`Product_${product.name}_Details.pdf`);
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.farmer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="product-container">
            <h1>Agricultural Products Marketplace</h1>
            
            <div className="product-count">
                <p>Total Products Available: {filteredProducts.length}</p>
            </div>

            <div className="product-search-bar">
                <input
                    type="text"
                    placeholder="Search products by name, description, or farmer"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                        <div key={index} className="product-card">
                            <h3>{product.name}</h3>
                            <div className="product-field">
                                <label>Description: {product.description}</label>
                            </div>
                            <div className="product-field">
                                <label>Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</label>
                            </div>
                            <div className="product-field">
                                <label>Price: Rs.{product.price} per {product.unit}</label>
                            </div>
                            <div className="product-field">
                                <label>Quantity Available: {product.quantity} {product.unit}</label>
                            </div>
                            <div className="product-field">
                                <label>Harvest Date: {new Date(product.harvestDate).toLocaleDateString()}</label>
                            </div>
                            <div className="product-field">
                                <label>Expiry Date: {product.expiryDate ? new Date(product.expiryDate).toLocaleDateString() : "N/A"}</label>
                            </div>
                            <div className="product-field">
                                <label>Organic: {product.isOrganic ? "Yes" : "No"}</label>
                            </div>
                            <div className="product-field">
                                <label>Farmer: {product.farmer}</label>
                            </div>
                            <div className="product-field">
                                <label>Location: {product.location}</label>
                            </div>

                            <div className="product-actions">
                                <Link to={`/update/${product._id}`}>
                                    <button className="update-btn">Update</button>
                                </Link>
                                <button className="delete-btn" onClick={() => deleteProduct(product._id)}>Delete</button>
                                <button className="download-btn" onClick={() => downloadPdf(product)}>Download Details</button>
                               
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
    );
}