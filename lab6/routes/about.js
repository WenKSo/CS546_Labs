// Name: Wenkang Su
// I pledge my honor that I have abided by the Stevens Honor System.

const express = require("express");
const router = express.Router();

const my_about = {
    "name": "Wenkang Su",
    "cwid": "10409507",
    "biography": "I'm a junior Com-Sci student. But I am not good at Computer Science. I wish I could be good at Computer Science. Happy new year!",
    "favoriteShows": ["show A", "show B", "show C"],
	"hobbies": ["hobby A", "hobby B", "hobby C"]};

router.get("/", (req,res) => {
    try {
        return res.json(my_about);
    } catch (e) {
        return res.status(500).send();
    }
});
module.exports = router;