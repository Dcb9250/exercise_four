const express = require("express");
const router = express.Router();

router.use("/about", (req, res) => {
	res.send("me me me");
});

router.use("/me", (req, res) => {
	res.send("about me");
});

module.exports = router;
