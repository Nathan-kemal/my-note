import {NextResponse} from 'next/server';

export const authProtect = (req) => {
    return (req, res) => {
        // return res.status(200).json(req.body);
        NextResponse.next();
    };
};
