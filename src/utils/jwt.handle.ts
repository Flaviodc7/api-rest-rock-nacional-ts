import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'JORGE';

const generateToken = async (id: string) => {
    const jwt = sign({id}, JWT_SECRET,{
        expiresIn: "2h",
    });
    return jwt;
}

const verifyToken = (jwt: string) => {
    const isCorrect = verify(jwt, JWT_SECRET)
    return isCorrect;
}

export { generateToken, verifyToken }