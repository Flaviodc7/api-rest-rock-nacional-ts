import { CreateArtistPayload, UpdateArtistPayload } from '../application/artist.usecase.interface';
import { ArtistEntity } from './artist.entity';
import { v4 as uuid } from 'uuid';

export class ArtistOValue {
  create = (payload: CreateArtistPayload): ArtistEntity => {
    return {
      ...payload,
      id: uuid(),
    };
  };

  update = (payload: UpdateArtistPayload): ArtistEntity => {
    return {
      ...payload,
    };
  };
}
