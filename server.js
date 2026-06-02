const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: "http://127.0.0.1:5500"
}));

app.use(express.json());

app.post("/log", (req, res) => {
    console.log("Received:", req.body);
    res.json({
        message: "Log received successfully"
    });
});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});