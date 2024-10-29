const express = require("express");
const app = express(); //executed version of express package
const port = 3000; // assigning a value to the port that were allowing users to access

app.get("/", (req, res) => {
	//(request, response)
	res.send("Hello World!");
});

app.listen(port, () => {
	//listened to requests on the specified port
	console.log(`Example app listening on port ${port}`);
});
