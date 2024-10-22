import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
    try {
        const res = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("Connected to the database successfully", res.connection.host);
    }
    catch (error) {
        console.log("Some error ocurred while connecting to the Database", error);
        process.exit(1);
    }
}