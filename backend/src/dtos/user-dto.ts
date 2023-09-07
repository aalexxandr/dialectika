import { IUser } from '../services/types';

export default class UserDto {
	email: string;
	id: number;
	isActivated: boolean;

	constructor(model: IUser) {
		this.email = model.email;
		this.id = model._id;
		this.isActivated = model.isActivated;
	}
}
