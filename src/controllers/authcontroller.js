// auth.controller.js - Auth logic
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";


// Register new user
export const register = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(404).json({ "message": "please input user info" })
    try {

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = await User.create({ name, email, password: hashedPassword });

        res.status(201).json({ message: "User registered successfully", newUser });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Error registering user", error });
    }
};

// Login user
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res
            .cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production", // only over HTTPS in production
                sameSite: "Strict", // or "Lax", depending on your frontend/backend setup
                maxAge: 60 * 60 * 1000, // 1 hour
            })
            .json({ message: "Login successful" });

    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Error logging in", error });
    }
};
