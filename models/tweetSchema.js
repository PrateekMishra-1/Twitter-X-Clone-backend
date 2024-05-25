import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    like: {
        type: Array,
        default: []
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"  //  used to establish a relationship between the Tweet schema and User schema
    },
    userDetails : {
        type : Array,
        default : []
    }
}, { timestamps: true })

export const Tweet = mongoose.model("Tweet", tweetSchema);