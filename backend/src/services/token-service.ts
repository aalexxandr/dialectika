import jwt from 'jsonwebtoken';
import tokenModel from '../models/token-model';

class TokenService {
	async generateTokens(payload: object) {
		const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET!, {
			expiresIn: '30m',
		});
		const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
			expiresIn: '60d',
		});

		return {
			accessToken,
			refreshToken,
		};
	}

	async saveToken(userId: number, refreshToken: string) {
		const tokenData = await tokenModel.findOne({ user: userId });

		if (tokenData) {
			tokenData.refreshToken = refreshToken;
			return tokenData.save();
		}

		return await tokenModel.create({ user: userId, refreshToken });
	}
}

export default new TokenService();