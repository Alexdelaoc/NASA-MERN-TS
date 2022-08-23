import LandingSchema from "./../models/landings";

export const getLandingsByQuery = async (mass: Number) => {
    try {
        const data = await LandingSchema.find({ mass: { $gte: mass } }, "-_id").sort({ mass: 1 });
        return data
    }
    catch (err) {
        console.log(err);
    };
}

export const getLandingsByParams = async (mass: any) => {
    try {
        if (mass) {
            const data = await LandingSchema.find({ mass: mass }, "-_id").exec();
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}