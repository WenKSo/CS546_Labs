const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require("uuid/v4");

let exportedMethods = {
  getAllRecipes() {
    return recipes().then(recCollection => {
      const allRec = recCollection.find({},{id: 1, title: 1}).toArray();
      let res = [];
      for(let i = 0; i < allRec.length; i++) res.push({_id: allRec[i]._id, title: allRec[i].title});
      return res;
    });
  },

  getRecipeById(id) {
    if(!id) throw "Invalid ID";
    return recipes().then(recCollection => {
      return recCollection.findOne({ _id: id }).then(recipe => {
        if (!recipe) throw "Recipe not found";
        return recipe;
      });
    });
  },

  addRecipe(title, ingredients, steps) {
    if (typeof title !== "string") throw "title is not a string"
	  if (!Array.isArray(ingredients)) throw "ingredients is not an array"
	  if (!Array.isArray(steps)) throw "steps is not an array"
    return recipes().then(recCollection => {
      let newRecipe = {
        title: title,
        ingredients: ingredients,
        _id: uuid.v4(),
        steps: steps
      };

      return recCollection
        .insertOne(newRecipe)
        .then(newInsertInformation => {
          return newInsertInformation.insertedId;
        })
        .then(newId => {
          return this.getRecipeById(newId);
        });
    });
  },

  removeRecipe(id) {
    if(!id) throw "Invalid ID";
    return recipes().then(recCollection => {
      return recCollection.removeOne({ _id: id }).then(deletionInfo => {
        if (deletionInfo.deletedCount === 0) {
          throw `Could not delete recipe with id of ${id}`;
        }
      });
    });
  },

  updateRecipe(id, updatedRecipe) {
    return this.getRecipeById(id).then(currentRecipe => {
      let recipeUpdateInfo = {
        title: updatedRecipe.title,
        ingredients: updatedRecipe.ingredients,
        steps: updatedRecipe.steps
      };

      let updateCommand = {
        $set: recipeUpdateInfo
      };

      return recipes().then(recCollection => {
        return recCollection.updateOne({ _id: id }, updateCommand).then(() => {
          return this.getRecipeById(id);
        });
      });
    });
  }
};

module.exports = exportedMethods;