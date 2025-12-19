# Agricultural Trading System (FairTrade)

A full-stack web application that connects farmers with buyers, enabling efficient trading of agricultural products. Built with React for the frontend and Node.js/Express with MongoDB for the backend.

![Agricultural Trading System](1.png)

## Features

- 🌾 **Product Management**: Add, view, update, and delete agricultural products
- 📊 **Product Categories**: Organize products by vegetables, fruits, grains, dairy, meat, and more
- 🔍 **Browse Marketplace**: Discover fresh agricultural products from local farmers
- 📝 **Detailed Information**: Track product details including price, quantity, harvest date, expiry date, and location
- 🌱 **Organic Products**: Mark products as organic
- 👨‍🌾 **Farmer Information**: Display farmer and location details for each product

## Tech Stack

### Frontend
- **React** 19.0.0 - UI library
- **React Router DOM** 7.4.0 - Routing
- **Axios** 1.8.4 - HTTP client
- **Bootstrap** 5.3.3 - Styling framework
- **React Bootstrap** 2.10.9 - Bootstrap components for React

### Backend
- **Node.js** - Runtime environment
- **Express** 4.21.2 - Web framework
- **MongoDB** - Database
- **Mongoose** 8.12.1 - MongoDB object modeling
- **CORS** 2.8.5 - Cross-origin resource sharing
- **dotenv** 16.4.7 - Environment variable management

## Project Structure

```
AGRICULTURAL_TRADING_SYSTEM/
├── BACKEND/
│   ├── models/
│   │   └── Product.js          # Product data model
│   ├── routes/
│   │   └── Products.js         # API routes for products
│   ├── server.js               # Express server setup
│   ├── package.json
│   └── .env                     # Environment variables
├── frontend/
│   ├── public/
│   │   ├── 1.png               # Hero image
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js       # Navigation header
│   │   │   ├── Home.js         # Home page
│   │   │   ├── AddProduct.js   # Add product form
│   │   │   ├── ProductDisplay.js # Product listing
│   │   │   └── UpdateProduct.js  # Update product form
│   │   ├── App.js              # Main app component
│   │   └── index.js            # Entry point
│   └── package.json
└── README.md
```

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **MongoDB** (local installation or MongoDB Atlas account)
- **MongoDB Compass** (optional, for database management)

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd AGRICULTURAL_TRADING_SYSTEM
```

### 2. Backend Setup

```bash
cd BACKEND
npm install
```

### 3. Configure Environment Variables

Copy the example environment file and update it with your configuration:

```bash
cd BACKEND
cp .env.example .env
```

Then edit the `.env` file with your MongoDB connection string:

**For Local MongoDB:**
```env
PORT=8081
MONGODB_URL=mongodb://127.0.0.1:27017/Agriculture
```

**For MongoDB Atlas (Cloud):**
```env
PORT=8081
MONGODB_URL=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/Agriculture?retryWrites=true&w=majority
```

> **Note**: Get your MongoDB connection string from MongoDB Compass or MongoDB Atlas dashboard. Never commit the `.env` file to version control.

### 4. Frontend Setup

```bash
cd ../frontend
npm install
```

## Running the Application

### Start the Backend Server

```bash
cd BACKEND
npm start
```

The server will run on `http://localhost:8081`

### Start the Frontend Development Server

Open a new terminal:

```bash
cd frontend
npm start
```

The frontend will run on `http://localhost:3000`

## API Endpoints

### Products

- `GET /products` - Get all products
- `GET /products/get/:id` - Get a specific product by ID
- `POST /products/add` - Add a new product
- `PUT /products/update/:id` - Update a product by ID
- `DELETE /products/delete/:id` - Delete a product by ID

### Product Schema

```javascript
{
  name: String (required),
  description: String (required),
  category: String (required) - enum: ['vegetables', 'fruits', 'grains', 'dairy', 'meat', 'other'],
  price: Number (required),
  quantity: Number (required),
  unit: String (required) - enum: ['kg', 'g', 'lb', 'piece', 'liter', 'pack'],
  harvestDate: Date (required),
  expiryDate: Date (optional),
  isOrganic: Boolean (default: false),
  farmer: String (required),
  location: String (required),
  createdAt: Date (auto-generated)
}
```

## MongoDB Setup

### Option 1: MongoDB Atlas (Recommended)

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a new cluster (free tier available)
3. Create a database user
4. Whitelist your IP address
5. Get your connection string and update `.env` file

See `BACKEND/MONGODB_SETUP.md` for detailed instructions.

### Option 2: Local MongoDB

1. Download and install [MongoDB Community Server](https://www.mongodb.com/try/download/community)
2. Start MongoDB service
3. Use connection string: `mongodb://127.0.0.1:27017/Agriculture`

## Usage

1. **View Products**: Navigate to the Products page to see all available agricultural products
2. **Add Product**: Click "Add Product" to list a new agricultural product
3. **Update Product**: Click "Update" on any product to modify its details
4. **Delete Product**: Click "Delete" to remove a product from the marketplace

## Features in Detail

### Product Categories
- Vegetables
- Fruits
- Grains
- Dairy
- Meat
- Other

### Product Units
- kg (kilograms)
- g (grams)
- lb (pounds)
- piece
- liter
- pack

## Development

### Backend Development

```bash
cd BACKEND
npm run dev  # Uses nodemon for auto-restart
```

### Frontend Development

The React app runs in development mode with hot-reload enabled.

## Troubleshooting

### MongoDB Connection Issues

1. **Check MongoDB is running**: Ensure MongoDB service is started
2. **Verify connection string**: Check your `.env` file has the correct `MONGODB_URL`
3. **Check MongoDB Compass**: Verify you can connect using MongoDB Compass
4. **Firewall**: Ensure port 27017 (local) or your Atlas connection is not blocked

### Port Already in Use

If port 8081 is already in use, change it in `BACKEND/.env`:
```env
PORT=8082
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Author

**Nimash Kithmal**

## Acknowledgments

- Built with React and Express.js
- MongoDB for data persistence
- Bootstrap for styling

---

For more information about MongoDB setup, see `BACKEND/MONGODB_SETUP.md`
