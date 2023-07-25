import { Schema, Types, model, Model } from 'mongoose';
import { Artist } from '../interfaces/artist.interface';

const ArtistSchema = new Schema<Artist>(
    {
        id: {
            type: Number,
        },
        name: {
            type: String,
            required: true,
        },
        nationality: {
            type: String,
            required: true,
        },
        year_of_birth: {
            type: Number,
            required: true,
        },
        instrument: {
            type: String,
            enum: ['vocals', 'guitar', 'bass', 'piano', 'drums'],
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ArtistModel = model('artists', ArtistSchema);

export default ArtistModel;