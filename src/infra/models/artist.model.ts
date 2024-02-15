import { Schema, model } from 'mongoose';
import { ArtistEntity } from '../../core/modules/artist/domain/artist.entity';

const ArtistSchema = new Schema<ArtistEntity>(
  {
    date_of_birth: {
      type: String,
    },
    id: {
      type: String,
      unique: true,
    },
    instrument: {
      type: String,
      enum: ['vocals', 'guitar', 'bass', 'piano', 'drums'],
    },
    name: {
      type: String,
    },
    nationality: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    _id: false,
  }
);

const ArtistModel = model('artists', ArtistSchema);

export default ArtistModel;
