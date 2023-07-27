import { Request, Response, NextFunction } from "express"
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwtUser = req.headers.authorization || '';
        const jwt = jwtUser.split(" ")[1];
        const isCorrect = verifyToken(`${jwt}`);
        if (!isCorrect){
            res.status(401);
            res.send('NOT A VALID SESSION');
        } else {
            next();
        }
    } catch {
        res.status(400);
        res.send('INVALID SESSION');
    }
}

export { checkJwt }