import { Schema, model } from 'mongoose';

const TokenSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		unique: true,
		required: true,
	},
	refreshToken: { type: String, required: true },
});

export default TokenSchema;
