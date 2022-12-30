import mongoose from 'mongoose';
import dotenv from "dotenv";


dotenv.config();

const options = {
    useNewUrlParser: true,
};

mongoose.set("strictQuery", false);

mongoose.connect(process.env.URI_MONGODB, options).then(
    () => {
        console.log("Database connection established!");
    },
    err => {
        console.log("Error connecting Database instance due to: ", err);
    }
);