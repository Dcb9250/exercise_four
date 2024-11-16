const express = require("express");
const app = express(); //executed version of express package
const port = 3000; // assigning a value to the port that were allowing users to access

const index = require("/routes/index.js");
const about = require("/routes/about.js");

app.use("/", index);
app.use("/", about);

app.use(express.static("public"));

app.listen(port, () => {
	//listened to requests on the specified port
	console.log(`Example app listening on port ${port}`);
});
