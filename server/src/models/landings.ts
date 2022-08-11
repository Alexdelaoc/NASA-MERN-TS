import { Schema, Document, model } from "mongoose"

export interface iLanding extends Document {
    name: string,
    id: string,
    nametype: string,
    recclass: string,
    mass: number,
    fall: string,
    reclat: string,
    reclong: string,
}

const landingSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    id: {
        type: String,
        required: true,
        trim: true
    },
    nametype: {
        type: String,
        required: true,
        trim: true
    },
    recclass: {
        type: String,
        required: true,
        trim: true
    },
    mass: {
        type: Number,
        required: true,
        trim: true
    },
    fall: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: Date,
        required: false,
        trim: true
    },
    reclat: {
        type: String,
        required: true,
        trim: true
    },
    reclong: {
        type: String,
        required: true,
        trim: true
    },
    geolocation: {
        type: Object,
        required: false,
        trim: true
    }
});

export default model<iLanding>('Landing', landingSchema);