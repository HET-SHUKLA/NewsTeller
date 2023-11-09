import express, { response } from "express";
import axios from "axios";
//import {API_KEY} from "./secret.js";
import {COUNTRY} from "./countries.js";
import {FLAGS} from "./countries.js";
import bodyParser from "body-parser";
const API_KEY = process.env.API_KEY;
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
app.use(bodyParser.urlencoded({ extended: true }));

var con = "us";
var cat = "General";

app.get("/", async (req, res) => {
    try{
        const response = await axios.get(`${LINK}/top-headlines?country=${con}&category=${cat}`, HEADER);
        res.render("index.ejs", {country: COUNTRY, flags: FLAGS, con: con, cat: cat, response: response.data});

    }catch(e)
    {
        console.log(e);
    }
});

app.get("/search", async (req, res) => {
    const query = req.query.keyword;

    if(query !== "")
    {
        try{
            const response = await axios.get(`${LINK}/everything?q=${query}`, HEADER);
            res.render("search.ejs", {query: query, response: response.data});

        }catch(e)
        {
            console.log(e);
        }
    }
    else{
        res.redirect("/");
    }
});

app.get("/category", (req, res) => {
    cat = req.query.category;
    res.redirect("/");
})

app.get("/country", (req, res) => {
    con = req.query.countries;
    res.redirect("/");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.listen(port,() => {
    console.log(`Server started on port ${port}`);
});
