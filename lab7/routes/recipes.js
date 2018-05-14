const express = require("express");
const router = express.Router();
const data = require("../data");
const recData = data.recipes;

//Responds with the full content of the specified recipe
router.get("/:id", async (req, res) => {
    try {
      const recipe = await recData.getRecipeById(req.params.id);
      res.json(recipe);
    } catch (e) {
      res.status(404).json({ error: "Recipe not found" });
    }
});

//Responds with an array of all recipes
router.get("/", async (req, res) => {
    try {
      const recipeList = await recData.getAllRecipes();
      res.json(recipeList);
    } catch (e) {
      res.status(500).json({ error: e });
    }
});

//Updates the specified recipe with by replacing the recipe with the new recipe content
router.put("/:id", async (req, res) => {
    const updatedData = req.body;
    try {
      await recData.getRecipeById(req.params.id);
    } catch (e) {
      res.status(404).json({ error: "Recipe not found" });
    }
  
    try {
      const updatedRecipe = await recData.updateRecipe(req.params.id, updatedData);
      res.json(updatedRecipe);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  });

//Updates the specified recipe with only the supplied changes
router.patch("/:id", async (req, res) => {
  const updatedData = req.body;
  try {
    await recData.getRecipeById(req.params.id);
  } catch (e) {
    res.status(404).json({ error: "Recipe not found" });
  }

  try {
    const updatedRecipe = await recData.updateRecipe(req.params.id, updatedData);
    res.json(updatedRecipe);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

//Creates a recipe with the supplied data in the request body
router.post("/", async (req, res) => {
    const newData = req.body;
    try {
      const { title, ingredients, steps} = newData;
      const newRecipe = await recData.addRecipe(title, ingredients, steps);
  
      res.json(newRecipe);
    } catch (e) {
      res.status(500).json({ error: e });
    }
});

//Deletes the recipe and returns nothing.
router.delete("/:id", async (req, res) => {
    try {
      await recData.getRecipeById(req.params.id);
    } catch (e) {
      res.status(404).json({ error: "Recipe not found" });
    }
    try {
      await recData.removeRecipe(req.params.id);
    } catch (e) {
      res.status(500).json({ error: e });
    }
});

module.exports = router;