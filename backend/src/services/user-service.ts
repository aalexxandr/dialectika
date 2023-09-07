import UserModel from '../models/user-model';
import bcrypt from 'bcrypt';
import { v4 } from 'uuid';
import MailService from './mail-service';
import { IUser } from './types';
import tokenService from './token-service';
import UserDto from '../dtos/user-dto';

class UserService {
	async signUp(email: string, password: string) {
		const candidate: IUser | null = await UserModel.findOne({ email });
		if (candidate) {
			throw new Error('Email is already in use');
		}

		const hashPassword = await bcrypt.hash(password, 3);

		const activationLink = v4();

		await MailService.sendActivationMail(email, activationLink);

		const user: IUser = await UserModel.create({
			email,
			password: hashPassword,
			activationLink,
		});
		const userDto = new UserDto(user);
		const tokens = await tokenService.generateTokens({ ...userDto });
		await tokenService.saveToken(userDto.id, tokens.refreshToken);

		return {
			...tokens,
			user: userDto,
		};
	}
}

export default new UserService();
