const express = require("express")
const app = express()

const port = 3000

app.get("/", (req, res) => {
    res.send("Homepage ....");
});

app.get("/login",(req,res) => {
    res.send("Your are Visiting a Login Route ");
})

app.get("/signup", (req, res) => {
    res.send("Signing you UP ..... ");
});

app.listen(port,(req,res) => {
    console.log(`Server is Running on port no. ${port}`)
})