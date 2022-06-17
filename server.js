const express = require("express");

const app = express();


//// Need to figure out again how to give the program access to the static files //////
// app.use(express.static(`${__dirname}/css`));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})


app.listen(3000, function() {
    console.log("Port running on port 3000");
})