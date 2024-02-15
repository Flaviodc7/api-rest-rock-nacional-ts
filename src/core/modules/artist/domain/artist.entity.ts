export interface ArtistEntity {
  date_of_birth: string;
  id: string;
  instrument: Instrument;
  name: string;
  nationality: string;
}

export type Instrument = 'vocals' | 'guitar' | 'bass' | 'piano' | 'drums';
