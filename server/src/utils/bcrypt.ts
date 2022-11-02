const bcrypt = require('bcrypt');

export const createHash = async (password: String) => {
    try {
        const hash = await bcrypt.hash(password, 10);
    } catch (error) {
        throw new Error('Unable to hash password.')
    }
};

export const checkPassword = async (password: String, hashedPassword: String) => {
    try {
        const result = await bcrypt.compare(password, hashedPassword);
        return result
    } catch (error) {
        console.log(error);
        
    }
}