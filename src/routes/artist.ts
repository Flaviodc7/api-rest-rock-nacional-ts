import { Router, Response, Request } from "express";
import { getArtist, getArtists, updateArtist, postArtist, deleteArtist } from "../controllers/artist";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get('/', getArtist);
router.get('/:id', logMiddleware, getArtists);
router.put('/', updateArtist);
router.post('/:id', postArtist);
router.delete('/:id', deleteArtist);

export { router };