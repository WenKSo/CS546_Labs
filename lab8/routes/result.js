const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    var data = {
        title: "400",
        err: "Missing Input!"
    };
	res.status(400).render("error", data);
});

router.post("/", (req, res) => {
    let input = req.body.texttotest;
    if (!input) {
        var data = {
        title: "400",
        err: "Missing Input!"
    }
    res.status(400).render("error", data);
    return;
  }
    let result = pChecker(input);
    let sorf = result ? "success" : "failure"; 
    data = {
      class: sorf,
      texttotest: input,
      result: result
    }; 
    res.render("result", data);
});

function pChecker(text) {
    let symbol = /~`!@#$%^&*()_+-=[]{}\|;:'"<>,.?/g;
    if (text.length <= 0) {
      return false;
    }
    let rs_text = text.replace(symbol, '').replace(/[^A-Za-z0-9]/ig, "").replace(/(\s){2,}/g, '$1').replace(/\s/g, '').toLowerCase(); //remove all the symbols
    let reverse_text = rs_text.split("").reverse().join("");
    return (rs_text === reverse_text);
}

module.exports = router;
