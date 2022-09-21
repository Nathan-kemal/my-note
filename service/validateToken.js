import jwt from 'jsonwebtoken';

export async function validate_token(token) {
    try {
        await jwt.verify(token, process.env.JWT_KEY, (error, doc) => {
            if (!error) return true;
            else return false;
        });
    } catch (e) {
        console.log(e);
    }
}

export const nigger = (token) => {
    console.log(token);
};
