import { Request, Response } from 'express';
import userService from '../services/user-service';

class UserController {
	async signUp(req: Request, res: Response) {
		try {
			const { email, password } = req.body;

			const userData = await userService.signUp(email, password);
			res.cookie('refreshToken', userData.refreshToken, {
				maxAge: 60 * 24 * 60 * 60 * 1000,
				httpOnly: true,
				secure: true,
			});
			res.json(userData);
		} catch (error) {
			console.log(error);
		}
	}

	async signIn(req: Request, res: Response) {
		try {
		} catch (error) {
			console.log(error);
		}
	}

	async signOut(req: Request, res: Response) {
		try {
		} catch (error) {
			console.log(error);
		}
	}

	async activate(req: Request, res: Response) {
		try {
		} catch (error) {
			console.log(error);
		}
	}

	async refresh(req: Request, res: Response) {
		try {
		} catch (error) {
			console.log(error);
		}
	}

	async getUsers(req: Request, res: Response) {
		try {
		} catch (error) {
			console.log(error);
		}
	}
}

export default new UserController();
