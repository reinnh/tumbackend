import dotenv from 'dotenv';
import app from './src/app.js'; // Import the app.js file

// Load environment variables
dotenv.config();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


