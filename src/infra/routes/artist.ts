import { Router } from 'express';
import { ArtistMongoRepository } from '@repositories/artist.mongo.repository';
import { ArtistUseCase } from '@modules/artist/application/artist.usecase';
import { Create_Artist_Dto, Update_Artist_Dto } from '@dto/artist.dto';
import { ArtistController } from '@controllers/artist.controller';
import { extractEmailFromToken } from '@services/auth0/tokenMiddleware';

const router = Router();

const artistRepository = new ArtistMongoRepository();
const artistUseCase = new ArtistUseCase(artistRepository);
const artistController = new ArtistController(artistUseCase);

router.post('/artist/create-artist', extractEmailFromToken, Create_Artist_Dto, artistController.createArtist);
router.get('/artist/get-artist/:id', extractEmailFromToken, artistController.getArtist);
router.get('/artist/get-artists', extractEmailFromToken, artistController.getArtists);
router.post('/artist/update-artist', extractEmailFromToken, Update_Artist_Dto, artistController.updateArtist);
router.delete('/artist/delete-artist/:id', extractEmailFromToken, artistController.deleteArtist);

export { router };
