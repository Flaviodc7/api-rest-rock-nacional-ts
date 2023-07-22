export interface Artist {
    id: number,
    name: string,
    nationality: string,
    year_of_birth: number,
    instrument: 'vocals'|'guitar'|'bass'|'piano'|'drums'
}