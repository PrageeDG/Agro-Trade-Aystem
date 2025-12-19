# MongoDB Setup Guide

## Option 1: MongoDB Atlas (Recommended - Free & Easy)

MongoDB Atlas is a cloud database service. No local installation required!

### Steps:

1. **Create a free account** at [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)

2. **Create a new cluster** (choose the FREE tier)

3. **Create a database user**:
   - Go to "Database Access" → "Add New Database User"
   - Choose "Password" authentication
   - Create username and password (save these!)

4. **Whitelist your IP**:
   - Go to "Network Access" → "Add IP Address"
   - Click "Add Current IP Address" or use "Allow Access from Anywhere" (0.0.0.0/0) for development

5. **Get your connection string**:
   - Go to "Database" → Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string (looks like: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/`)
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with your database name (e.g., `Agriculture`)

6. **Update your .env file**:
   ```
   MONGODB_URL=mongodb+srv://yourusername:yourpassword@cluster0.xxxxx.mongodb.net/Agriculture?retryWrites=true&w=majority
   ```

## Option 2: Install MongoDB Locally (Windows)

1. **Download MongoDB Community Server** from [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

2. **Install MongoDB**:
   - Run the installer
   - Choose "Complete" installation
   - Install as a Windows Service (recommended)

3. **Start MongoDB**:
   - MongoDB should start automatically as a service
   - Or run: `net start MongoDB` in PowerShell (as Administrator)

4. **Verify installation**:
   ```powershell
   mongod --version
   ```

5. **Your .env file should have**:
   ```
   MONGODB_URL=mongodb://127.0.0.1:27017/Agriculture
   ```

## Testing the Connection

After setting up either option, run:
```powershell
npm start
```

You should see: `[✅] MongoDB connected successfully`

