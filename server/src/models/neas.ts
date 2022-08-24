import { Schema, Document, model, Date } from "mongoose";

export interface INea extends Document {
    designation: string,
    discovery_date: string,
    h_mag: string,
    moid_au: string,
    q_au_1: string,
    q_au_2: string,
    period_yr: string,
    i_deg: string,
    pha: string,
    orbit_class: string
}

const NeaSchema = new Schema ({
    designation: {
        type: String,
        required: true,
        trim: true
    },
    discovery_date: {
        type: String,
        required: true,
        trim: true
    },
    h_mag: {
        type: String,
        required: true,
        trim: true
    },
    moid_au: {
        type: String,
        required: true,
        trim: true
    },
    q_au_1: {
        type: String,
        required: true,
        trim: true
    },
    q_au_2:{
        type: String,
        required: true,
        trim: true
    },
    period_yr: {
        type: String,
        required: true,
        trim: true
    },
    i_deg: {
        type: String,
        required: true,
        trim: true
    },
    pha: {
        type: String,
        required: true,
        trim: true
    },
    orbit_class:{
        type: String,
        required: true,
        trim: true
    },
});

export default model<INea>('Nea', NeaSchema);