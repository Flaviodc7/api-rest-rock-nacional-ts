import { Schema, Types, model, Model } from 'mongoose';
import { User } from '../interfaces/user.interface';

const userSchema = new Schema<User>(
    {
        name: {
            required: true,
            type: String
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            default: 'No description'
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const UserModel = model('users', userSchema);

export default UserModel;