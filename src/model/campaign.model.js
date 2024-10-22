import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    body: {
        type: String,
    },
}, {timestamps: true});

export const Campaign = mongoose.model("Campaign", campaignSchema);