import { Request, Response } from "express"
import { handleHttp } from '../utils/error.handle'
import dbConnect from "../config/mongo";
import { registerUpload } from "../services/storage.service";
import { RequestExt } from "../interfaces/req-ext";
import { Storage } from "../interfaces/storage";


const getFile = async (req: RequestExt, res: Response) => {
    try {
        const { user, file } = req;
        const dataToRegister: Storage = {
            fileName: `${file?.filename}`,
            path: `${file?.path}`,
            idUser: `${user?.id}`
        }
        const response = await registerUpload(dataToRegister)
        res.send(response)
    } catch (e) {
        handleHttp(res, "ERROR_COULDN'T_GET_ARTISTS");
    }
}

export { getFile }