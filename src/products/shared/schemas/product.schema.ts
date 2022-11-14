import { Schema } from "mongoose";

export const ProductSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    img: {type: String, required: true},
    price: {type: Number, required: true},
    createAt: {type: Date, default: Date.now}
})


