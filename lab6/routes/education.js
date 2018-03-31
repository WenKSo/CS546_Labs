// Name: Wenkang Su
// I pledge my honor that I have abided by the Stevens Honor System.

const express = require("express");
const router = express.Router();

const my_education = [{
    "schoolName": "HAHA Junior High School",
    "degree": "Junior High School",
    "favoriteClass": "Math",
    "favoriteMemory": "I get an A!"
},
{
    "schoolName": "HAHA High School",
    "degree": "High School",
    "favoriteClass": "Math",
    "favoriteMemory": "I get an A!"
},
{
    "schoolName": "Stevens Institute of Technology",
    "degree": "B.S.",
    "favoriteClass": "Math",
    "favoriteMemory": "I get an A!"
}];

router.get("/", (req,res) => {
    try {
        return res.json(my_education);
    } catch (e) {
        return res.status(500).send();
    }
});
module.exports = router;