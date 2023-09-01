import express, { Express, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT || 1337;
const DB_URL = process.env.DB_URL!;

const start = async () => {
	try {
		mongoose.connect(DB_URL);
		app.listen(PORT, () => {
			console.log(`Server was started on ${PORT} port`);
		});
	} catch (e) {
		console.log(e);
	}
};

start();
