import { ArtistRepository } from '../domain/artist.repository';
import { ArtistOValue } from '../domain/artist.vo';
import { ApiResponse, HttpCodes } from './api.response';
import { IArtistUseCase, CreateArtistPayload, UpdateArtistPayload } from './artist.usecase.interface';

export class ArtistUseCase implements IArtistUseCase {
  constructor(private readonly artistRepository: ArtistRepository) {}

  createArtist = async (payload: CreateArtistPayload) => {
    const artistValue = new ArtistOValue().create(payload);

    if (!payload) throw new ApiResponse(HttpCodes.BAD_REQUEST, payload, 'No se ha podido crear el artista.');

    // await this.productosSinStock(payload.productsOrder, payload.responsible, authorization);

    const response = await this.artistRepository.createArtist(artistValue);

    if (!response)
      throw new ApiResponse(HttpCodes.BAD_REQUEST, response, 'No se ha podido cargar el artista en la base de datos.');

    return {
      status: HttpCodes.OK,
      data: response,
      message: 'Boleta creada con éxito.',
    };
  };

  getArtist = async (id: string) => {
    const response = await this.artistRepository.getArtist(id);

    if (!response)
      throw new ApiResponse(HttpCodes.BAD_REQUEST, response, 'No se ha podido cargar el artista en la base de datos.');

    return {
      status: HttpCodes.OK,
      data: response,
      message: 'Boleta creada con éxito.',
    };
  };

  getArtists = async () => {
    const response = await this.artistRepository.getArtists();

    if (!response)
      throw new ApiResponse(HttpCodes.BAD_REQUEST, response, 'No se ha podido cargar el artista en la base de datos.');

    return {
      status: HttpCodes.OK,
      data: response,
      message: 'Boleta creada con éxito.',
    };
  };

  updateArtist = async (payload: UpdateArtistPayload) => {
    const artistValue = new ArtistOValue().update(payload);

    if (!payload) throw new ApiResponse(HttpCodes.BAD_REQUEST, payload, 'No se ha podido crear el artista.');

    // await this.productosSinStock(payload.productsOrder, payload.responsible, authorization);

    const response = await this.artistRepository.createArtist(artistValue);

    if (!response)
      throw new ApiResponse(HttpCodes.BAD_REQUEST, response, 'No se ha podido cargar el artista en la base de datos.');

    return {
      status: HttpCodes.OK,
      data: response,
      message: 'Boleta creada con éxito.',
    };
  };

  deleteArtist = async (id: string) => {
    const response = await this.artistRepository.deleteArtist(id);

    if (!response)
      throw new ApiResponse(HttpCodes.BAD_REQUEST, response, 'No se ha podido cargar el artista en la base de datos.');

    return {
      status: HttpCodes.OK,
      data: response,
      message: 'Boleta creada con éxito.',
    };
  };
}
