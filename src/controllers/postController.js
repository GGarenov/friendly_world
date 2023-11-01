const router = require("express").Router();
const animalService = require("../services/animalService");
const { isAuth } = require("./../middlewares/authMiddleware");
const { extractErrorMsgs } = require("./../utils/errorHandler");

router.get("/all", async (req, res) => {
  const animals = await animalService.getAll().lean();

  res.render("posts/dashboard", { animals });
});

router.get("/create", isAuth, (req, res) => {
  res.render("posts/create");
});

router.post("/create", async (req, res) => {
  const { name, years, kind, imageUrl, needs, location, description } = req.body;
  const payload = {
    name,
    years,
    kind,
    imageUrl,
    needs,
    location,
    description,
    owner: req.user,
  };
  try {
    await animalService.create(payload);
    res.redirect("/posts/all");
  } catch (error) {
    const errorMessages = extractErrorMsgs(error);
    res.status(404).render("posts/create", { errorMessages });
  }
});

router.get("/:animalId/details", async (req, res) => {
  const { animalId } = req.params;

  const animal = await animalService.singleAnimal(animalId).lean();
  const { user } = req;
  const { owner } = animal;
  const isOwner = user?._id === owner.toString();
  //   const hasVoted = creature.votes?.some((v) => v?._id.toString() === user?._id);
  //   const joinedEmailsOfOwners = creature.votes.map((v) => v.email).join(", ");

  res.render("posts/details", { animal, isOwner });
});

router.get("/:animalId/edit", async (req, res) => {
  const { animalId } = req.params;

  const animal = await animalService.singleAnimal(animalId).lean();
  res.render("posts/edit", { animal });
});

router.post("/:animalId/edit", async (req, res) => {
  const { animalId } = req.params;
  const { name, years, kind, imageUrl, needs, location, description } = req.body;
  const payload = {
    name,
    years,
    kind,
    imageUrl,
    needs,
    location,
    description,
    owner: req.user,
  };

  await animalService.update(animalId, payload);
  res.redirect(`/posts/${animalId}/details`);
});

router.get("/:animalId/delete", async (req, res) => {
  const { animalId } = req.params;

  await animalService.delete(animalId);
  res.redirect("/posts/all");
});

router.get("/", async (req, res) => {
  try {
    const lastThreeAnimals = await animalService.getLastThreeAdded();
    res.render("posts/home", { lastThreeAnimals });
  } catch (error) {
    console.error(error);
    // Handle the error accordingly
    res.status(500).send("Internal Server Error");
  }
});

router.get("/search", async (req, res) => {
  const { search, name, location, needs } = req.query;

  let animals = await animalService.getAll().lean();
  let filteredAnimals = [];

  if (search || name || location || needs) {
    filteredAnimals = animalService.searchAnimal(animals, search, name, location, needs);
  } else {
    // If no search parameters are provided, display all animals
    filteredAnimals = animals;
  }

  res.render("posts/search", { animals: filteredAnimals, search, name, location, needs });
});

// router.get("/:creatureId/vote", async (req, res) => {
//   const { creatureId } = req.params;
//   const { _id } = req.user;
//   console.log({ _id });

//   await creatureService.addVotesToCreature(creatureId, _id);

//   res.redirect(`/posts/${creatureId}/details`);
// });

module.exports = router;
