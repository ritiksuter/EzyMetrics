import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    company: {
        type: String,
    },
}, { timestamps: true });

export const Lead = mongoose.model("Lead", leadSchema);