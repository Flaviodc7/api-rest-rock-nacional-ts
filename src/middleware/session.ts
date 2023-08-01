import { Request, Response, NextFunction } from "express"
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtUser = req.headers.authorization || '';
        const jwt = jwtUser.split(" ")[1];
        const isCorrect = verifyToken(`${jwt}`) as {id: string};
        if (!isCorrect){
            res.status(401);
            res.send('NOT A VALID SESSION');
        } else {
            req.user = isCorrect;
            next();
        }
    } catch {
        res.status(400);
        res.send('INVALID SESSION');
    }
}

export { checkJwt }