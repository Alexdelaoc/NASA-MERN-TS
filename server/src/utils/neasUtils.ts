import NeaSchema from '../models/neas';

export const getNeasByOrbitClass = async (orbitClass: any) => {
    try {
        const data = await NeaSchema.find({orbit_class: orbitClass}).sort({class: 1});
        return data
    } catch (error) {
        console.log(error)
    }
};

export const getNeasInRange = async (years: any) => {
    try {
        const data = await NeaSchema.find({year: {$gte: years.from, $lt: years.to}}).sort({year: 1});
        return data
    } catch (error) {
        console.log(error);
    }
};

export const getNeasFromYear = async (years: any) => {
    try {
        const data = await NeaSchema.find({year: {$gte: years.from}}).sort({year: 1});
        return data
    } catch (error) {
        console.log(error);
    }
};

export const getNeasToYear = async (years: any) => {
    try {
        const data = await NeaSchema.find({year: {$lte: years.to}}).sort({year: 1});
        return data
    } catch (error) {
        console.log(error);
    }
};