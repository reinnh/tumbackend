import { required } from "joi";
import mongoose from "mongoose";
const studentSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    }
})