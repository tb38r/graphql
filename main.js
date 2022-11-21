const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = 8080




app.use(express.json())  

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "index.html");
});




server.listen(port, () => {
    console.log(`listening on port ${port}`);
});