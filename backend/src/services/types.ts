import { Document } from 'mongoose';

interface IUser extends Document {
	email: string;
	password: string;
	isActivated: boolean;
	activationLink?: string;
}

export { IUser };
