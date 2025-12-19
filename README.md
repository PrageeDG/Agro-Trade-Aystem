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


### Backend Development

```bash
cd BACKEND
npm run dev  
## Author

**Prageeth Gunarathne**
