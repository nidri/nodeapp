const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("<h1>Simple Node App</h1>");
});

app.listen(9080, () => {});
