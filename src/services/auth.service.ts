import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface"
import UserModel from "../models/user"
import { generateToken } from "../utils/jwt.handle";
import { encrypt, verified } from "../utils/password.handle";

const registerNewUser = async ({email, password, name}: User) => {
    const userExists = await UserModel.findOne({email: email})
    if (userExists) return 'USER_FOUND';
    const passHash = await encrypt(password);
    const registerNewUser = await UserModel.create({email, password: passHash, name});

    return registerNewUser;
}

const loginUser = async ({email, password}: Auth) => {
    const userExists = await UserModel.findOne({email})
    if (!userExists) return 'USER_NOT_FOUND';

    const passwordHash = userExists.password;
    const isCorrect = await verified(password, passwordHash);

    if (!isCorrect) return "INCORRECT_PASSWORD"

    const token = generateToken(userExists.email);
    const data = {
        token,
        user: userExists
    }

    return data;
}

export { registerNewUser, loginUser }