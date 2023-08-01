import { Request, Response } from "express"
import { handleHttp } from '../utils/error.handle'
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";

const getItems = async (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: 'THIS CAN BE VIEWED BY A SESSION USER',
            user: req.user
        });
    } catch (e) {
        handleHttp(res, "ERROR_COULDN'T_GET_ARTISTS");
    }
}

export { getItems }