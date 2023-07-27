import { Request, Response } from "express"
import { handleHttp } from '../utils/error.handle'
import { 
    insertArtist, getArtists as getArtistsService,
    getArtist as getArtistService, 
    updateArtist as updateArtistService, 
    deleteArtist as deleteArtistService 
} from "../services/artist.service";

const getArtist = async ({params}: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getArtistService(id);
        const data = response ? response : "ARTIST_NOT_FOUND";
        res.send(data);
    } catch (e) {
        handleHttp(res, "ERROR_COULDN'T_GET_ARTIST");
    }
}

const getArtists = async (req: Request, res: Response) => {
    try {
        const response = await getArtistsService();
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_COULDN'T_GET_ARTISTS");
    }
}

const updateArtist = async ({params, body}: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await updateArtistService(id, body);
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_COULDN'T_UPDATE_ARTIST");
    }
}

const postArtist = async ({ body }: Request, res: Response) => {
    try {
        const responseArtist = await insertArtist(body);
        res.send(responseArtist);
    } catch (e) {
        handleHttp(res, "ERROR_COULDN'T_POST_ARTIST", e);
    }
}

const deleteArtist = async ({params}: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteArtistService(id);
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_COULDN'T_DELETE_ARTIST");
    }
}

export { getArtist, getArtists, updateArtist, postArtist, deleteArtist }