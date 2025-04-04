// course.controller.js - Course logic
import Course from "../models/Course.js";

// Create a new course
export const createCourse = async (req, res) => {
    try {
        const { title, description, instructor } = req.body;

        // Create a new course
        const newCourse = await Course.create({ title, description, instructor });

        res.status(201).json({ message: "Course created successfully", newCourse });
    } catch (error) {
        console.error("Error creating course:", error);
        res.status(500).json({ message: "Error creating course", error });
    }
};

// Get all courses
export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();

        if (!courses.length) {
            return res.status(404).json({ message: "No courses found" });
        }

        res.status(200).json({ courses });
    } catch (error) {
        console.error("Error fetching courses:", error);
        res.status(500).json({ message: "Error fetching courses", error });
    }
};

// Get a specific course by ID
export const getCourseById = async (req, res) => {
    try {
        const { id } = req.params;

        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        res.status(200).json({ course });
    } catch (error) {
        console.error("Error fetching course:", error);
        res.status(500).json({ message: "Error fetching course", error });
    }
};

// Update a course by ID
export const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, instructor } = req.body;

        const updatedCourse = await Course.findByIdAndUpdate(
            id,
            { title, description, instructor },
            { new: true }
        );

        if (!updatedCourse) {
            return res.status(404).json({ message: "Course not found" });
        }

        res.status(200).json({ message: "Course updated successfully", updatedCourse });
    } catch (error) {
        console.error("Error updating course:", error);
        res.status(500).json({ message: "Error updating course", error });
    }
};

// Delete a course by ID
export const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedCourse = await Course.findByIdAndDelete(id);
        if (!deletedCourse) {
            return res.status(404).json({ message: "Course not found" });
        }

        res.status(200).json({ message: "Course deleted successfully" });
    } catch (error) {
        console.error("Error deleting course:", error);
        res.status(500).json({ message: "Error deleting course", error });
    }
};
