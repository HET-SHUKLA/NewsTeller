import express from "express";
import axios from "axios";
import {API_KEY} from "./secret.js";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
    console.log(API_KEY);
})

app.listen(port,() => {
    console.log(`Server started on port ${port}`);
});