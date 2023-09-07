import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './router';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

const PORT = process.env.PORT || 1337;
const DB_URL = process.env.DB_URL!;

const start = async () => {
	try {
		await mongoose.connect(DB_URL);
		app.listen(PORT, () => {
			console.log(`Server was started on ${PORT} port`);
		});
	} catch (e) {
		console.log(e);
	}
};

start();
