const animalService = require("../services/animalService");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const lastThreeAnimals = await animalService.getLastThreeAdded();
  res.render("home", { lastThreeAnimals });
});

router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;
