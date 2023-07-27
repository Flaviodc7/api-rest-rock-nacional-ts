import { Artist } from "../interfaces/artist.interface"
import ArtistModel from "../models/artists"

const getOrders = async () => {
    const responseArtists = await ArtistModel.find({});
    return responseArtists
}

export { getOrders }