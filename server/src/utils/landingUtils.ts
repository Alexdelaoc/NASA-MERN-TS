import LandingSchema from "./../models/landings";

export const getLandingsByQuery = async (mass: Number) => {
    try {
        const data = await LandingSchema.find({ mass: { $gte: mass } }, "-_id").sort({ mass: 1 });
        return data
    }
    catch (err) {
        console.log(err);
    }
};

export const getLandingsInRange = async (years: any) => {
    try {
        console.log(years);
        const data = await LandingSchema.find({year: {$gte: years.from, $lt: years.to}}).sort({year: 1});
        return data
    } catch (error) {
        console.log(error);
    }
};

export const getLandingsFromYear = async (years: any) => {
    try {
        const data = await LandingSchema.find({year: {$gte: years.from}}).sort({year: 1});
        return data
    } catch (error) {
        console.log(error);
    }
};

export const getLandingsToYear = async (years: any) => {
    try {
        const data = await LandingSchema.find({year: {$lte: years.to}}).sort({year: 1});
        return data
    } catch (error) {
        console.log(error);
    }
};

export const getLandingsByParams = async (mass: any) => {
    try {
        if (mass) {
            const data = await LandingSchema.find({ mass: mass }, "-_id").sort({ mass: 1 });
            return data;
        }
    } catch (error) {
        console.log(error);
    }
};