import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import ProductDisplay from './components/ProductDisplay';
import UpdateProduct from './components/UpdateProduct';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/add" element={<AddProduct />} />
                        <Route path="/products" element={<ProductDisplay />} />
                        <Route path="/update/:id" element={<UpdateProduct />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;