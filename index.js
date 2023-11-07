import express from "express";
import axios from "axios";
import {API_KEY} from "./secret.js";

const app = express();
const port = 3000;

const LINK = "https://newsapi.org/v2/";

const HEADER = {
    headers :
    {
        "x-api-key": API_KEY,
    }
}

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get("/", async (req, res) => {

    const response = await axios.get(`${LINK}/top-headlines?country=us`, HEADER);
    res.render("index.ejs");
})

app.listen(port,() => {
    console.log(`Server started on port ${port}`);
});