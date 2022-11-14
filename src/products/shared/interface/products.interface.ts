import { Document } from "mongoose";

export interface Products extends Document {
    readonly name: string;
    readonly description: string;
    readonly img: string;
    readonly price: number;
    readonly createAt: Date;
}
