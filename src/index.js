import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import config from "./config";
import routes from "./routes";

let app = express();

mongoose.connect('mongodb://localhost:27017/book');

//Middlewares

//parse application/json
app.use(bodyParser.urlencoded({
    limit : config.bodyLimit
}));

//passeport config

//api routes v1
app.use('/book', routes);

app.listen(config.port);


export default app;