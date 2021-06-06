const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/path", (request, response) => {
  response.send("Hello world");
});

app.listen(8000, () => console.log(`App available, port 8000`));
