import mongoose from 'mongoose';
import env from 'dotenv';

env.config();

const userName = process.env.USER_NAME_MONGO;
const password = process.env.PASSWORD_MONGO;

const connectDB = mongoose.connect(
    `mongodb+srv://${userName}:${password}@cluster0.9d5m0.mongodb.net/temp`
);

export default connectDB;
