import { Artist } from "../interfaces/artist.interface"
import ArtistModel from "../models/artists"

const insertArtist = async(artist: Artist) => {
    const responseInsert = await ArtistModel.create(artist);
    return responseInsert;
}

const getArtist = async (id: String) => {
    const responseArtist = await ArtistModel.findOne({_id : id});
    return responseArtist
}

const getArtists = async () => {
    const responseArtists = await ArtistModel.find({});
    return responseArtists
}

const updateArtist = async (id: string, data: Artist) => {
    const responseArtists = await ArtistModel.findOneAndUpdate({_id: id}, data, {
        new: true,
    });
    return responseArtists;
}

const deleteArtist = async (id: string) => {
    const responseArtists = await ArtistModel.findOneAndDelete({_id: id});
    return responseArtists;
}

export { insertArtist, getArtists, getArtist, updateArtist, deleteArtist }