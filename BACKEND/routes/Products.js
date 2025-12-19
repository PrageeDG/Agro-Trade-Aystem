const router = require("express").Router();
let Product = require("../models/Product");

// Add a new product
router.route("/add").post((req, res) => {
    const {
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
    } = req.body;

    const newProduct = new Product({
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
    });

    newProduct.save()
        .then(() => res.json("Product added successfully!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Get all products
router.route("/").get((req, res) => {
    Product.find()
        .then((products) => res.json(products))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Update a product by ID
router.route("/update/:id").put(async (req, res) => {
    const productId = req.params.id;
    const updateData = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, updateData, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ status: "Product not found" });
        }
        res.status(200).json({ status: "Product updated", product: updatedProduct });
    } catch (err) {
        res.status(500).json({ status: "Error updating product", error: err.message });
    }
});

// Delete a product by ID
router.route("/delete/:id").delete(async (req, res) => {
    const productId = req.params.id;

    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ status: "Product not found" });
        }
        res.status(200).json({ status: "Product deleted" });
    } catch (err) {
        res.status(500).json({ status: "Error deleting product", error: err.message });
    }
});

// Get a product by ID
router.route("/get/:id").get(async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ status: "Product not found" });
        }
        res.status(200).json({ status: "Product fetched", product });
    } catch (err) {
        res.status(500).json({ status: "Error fetching product", error: err.message });
    }
});

module.exports = router;