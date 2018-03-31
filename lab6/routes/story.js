// Name: Wenkang Su
// I pledge my honor that I have abided by the Stevens Honor System.

const express = require("express");
const router = express.Router();

const my_story = {
    "storyTitle": "My stupid Story",
    "story": "The first time I came to USA I forget to pay tips and got chased by the waitress. This makes me feel embarrassed."
};

router.get("/", (req,res) => {
    try {
        return res.json(my_story);
    } catch (e) {
        return res.status(500).send();
    }
});
module.exports = router;