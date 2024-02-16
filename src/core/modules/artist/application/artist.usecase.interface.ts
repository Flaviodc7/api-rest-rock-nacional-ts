import { Respuesta } from './api.response';
import { ArtistEntity } from '../domain/artist.entity';

export interface IArtistUseCase {
  createArtist: (payload: CreateArtistPayload) => Promise<Respuesta<ArtistEntity>>;
  getArtist: (id: string) => Promise<Respuesta<ArtistEntity | null>>;
  getArtists: () => Promise<Respuesta<ArtistEntity[]>>;
  updateArtist: (payload: UpdateArtistPayload) => Promise<Respuesta<ArtistEntity>>;
  deleteArtist: (id: string) => Promise<Respuesta<ArtistEntity | null>>;
}

export interface CreateArtistPayload {
  date_of_birth: string;
  name: string;
  nationality: string;
  year_of_birth: number;
  instrument: 'vocals' | 'guitar' | 'bass' | 'piano' | 'drums';
}

export interface UpdateArtistPayload {
  id: string;
  date_of_birth: string;
  name: string;
  nationality: string;
  year_of_birth: number;
  instrument: 'vocals' | 'guitar' | 'bass' | 'piano' | 'drums';
}
