import ArtistModel from '../models/artist.model';
import { ArtistRepository } from '@modules/artist/domain/artist.repository';
import { ArtistEntity } from '@modules/artist/domain/artist.entity';

export class ArtistMongoRepository implements ArtistRepository {
  createArtist = async (artist: ArtistEntity) => {
    const response = await ArtistModel.create(artist);
    return response;
  };

  getArtist = async (id: string) => {
    const response = await ArtistModel.findOne({ _id: id });
    return response;
  };

  getArtists = async () => {
    const response = await ArtistModel.find({});
    return response;
  };

  updateArtist = async (id: string, data: ArtistEntity) => {
    const response = await ArtistModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    return response;
  };

  deleteArtist = async (id: string) => {
    const response = await ArtistModel.findOneAndDelete({ _id: id });
    return response;
  };
}
