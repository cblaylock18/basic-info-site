const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/contact-me", (req, res) => {
    res.sendFile(__dirname + "/contact-me.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/about.html");
});

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/404.html", (err) => {
        if (err) {
            res.status(404).send("404 Not Found");
        }
    });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`My first Express app - listening on port ${PORT}!`);
});
