import dotenv from 'dotenv';

dotenv.config();

// Environment variables
const ENV = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    PORT: process.env.PORT || 5000
};

export default ENV;