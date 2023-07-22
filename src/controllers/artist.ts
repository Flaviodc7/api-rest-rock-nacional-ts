import { Request, Response } from "express"
import { handleHttp } from '../utils/error.handle'

const getArtist = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, "ERROR_COULDN'T_GET_ARTIST");
    }
}

const getArtists = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, "ERROR_COULDN'T_GET_ARTISTS");
    }
}

const updateArtist = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, "ERROR_COULDN'T_UPDATE_ARTIST");
    }
}

const postArtist = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, "ERROR_COULDN'T_POST_ARTIST");
    }
}

const deleteArtist = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, "ERROR_COULDN'T_DELETE_ARTIST");
    }
}

export { getArtist, getArtists, updateArtist, postArtist, deleteArtist }