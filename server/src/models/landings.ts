import { Schema, model } from "mongoose"

const landingSchema = new Schema({
    name: {
        type: String,
        required: false,
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
        type: String,
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
        required: true,
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

export default model('Landing', landingSchema);