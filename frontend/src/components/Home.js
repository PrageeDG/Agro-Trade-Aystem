import React from "react";
import "./Home.css";

export default function Home() {
    return (
        <div className="home-container">
            <div className="hero-section">
                <img src="/45.png" alt="Agricultural Trading" className="hero-image" />
                <h1>Welcome to FairTrade</h1>
                <p>
                    This system connects farmers with buyers, allowing you to list, browse,
                    and trade agricultural products efficiently. Manage your farm products,
                    track inventory, and connect with potential buyers all in one place.
                </p>
            </div>
            <div className="features">
                <div className="feature-card">
                    <h3>List Products</h3>
                    <p>Add your farm products with detailed information and pricing.</p>
                </div>
                <div className="feature-card">
                    <h3>Browse Marketplace</h3>
                    <p>Discover fresh agricultural products from local farmers.</p>
                </div>
                <div className="feature-card">
                    <h3>Efficient Trading</h3>
                    <p>Connect directly with farmers or buyers for seamless transactions.</p>
                </div>
            </div>
        </div>
    );
}