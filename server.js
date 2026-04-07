const express = require("express");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));

// Home route (HTML file show)
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Form submit handle
app.post("/submit", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    res.send(`
        <h2>Data Received ✅</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
    `);
});

// Server start
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});