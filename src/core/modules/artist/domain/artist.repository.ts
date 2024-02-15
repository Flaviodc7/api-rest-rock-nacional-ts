import { ArtistEntity } from './artist.entity';

export interface ArtistRepository {
  createArtist: (payload: ArtistEntity) => Promise<ArtistEntity>;
  getArtist: (id: string) => Promise<ArtistEntity | null>;
  getArtists: () => Promise<ArtistEntity[]>;
  updateArtist: (id: string, data: ArtistEntity) => Promise<ArtistEntity | null>;
  deleteArtist: (id: string) => Promise<ArtistEntity | null>;
}
