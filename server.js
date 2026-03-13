import express from "express";
import path from "path";

const PORT = 8080;

const app = express();

const __dirname = path.resolve();

app.get("/ping", (req, res) => {
    res.send("Hello from my backend app");
});

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname + "/homepage.html"));
});

app.post("/home", (req, res) => {
    res.send("This is a response from post request at /home route");
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});


// SSR -> (server side rendered page) everything rendered beforehand preloaded
// CSR -> (client side rendered page) content of the page is loaded after page has rendered on the browser

// react.js -> single page application
// html/css/js -> multi page application

// frontend/backend -> web development
// cloud computing - how to use the cloud services