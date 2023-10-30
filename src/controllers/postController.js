const router = require("express").Router();
const animalService = require("../services/animalService");
const { isAuth } = require("./../middlewares/authMiddleware");
const { extractErrorMsgs } = require("./../utils/errorHandler");

router.get("/all", async (req, res) => {
  const animals = await animalService.getAll().lean();
  console.log({ animals });
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
    // owner: req.user,
  };
  try {
    await animalService.create(payload);
    res.redirect("/posts/all");
  } catch (error) {
    const errorMessages = extractErrorMsgs(error);
    res.status(404).render("posts/create", { errorMessages });
  }
});

// router.get("/:creatureId/details", async (req, res) => {
//   const { creatureId } = req.params;

//   const creature = await creatureService.singleCreature(creatureId).lean();
//   const { user } = req;
//   const { owner } = creature;
//   const isOwner = user?._id === owner.toString();
//   const hasVoted = creature.votes?.some((v) => v?._id.toString() === user?._id);
//   const joinedEmailsOfOwners = creature.votes.map((v) => v.email).join(", ");

//   res.render("posts/details", { creature, isOwner, hasVoted, joinedEmailsOfOwners });
// });

// router.get("/:creatureId/edit", async (req, res) => {
//   const { creatureId } = req.params;

//   const creature = await creatureService.singleCreature(creatureId).lean();
//   res.render("post/edit", { creature });
// });

// router.post("/:creatureId/edit", async (req, res) => {
//   const { creatureId } = req.params;
//   const { name, specie, skinColor, eyeColor, imageUrl, description } = req.body;
//   const payload = {
//     name,
//     specie,
//     skinColor,
//     eyeColor,
//     imageUrl,
//     description,
//     owner: req.user,
//   };

//   await creatureService.update(creatureId, payload);
//   res.redirect(`/posts/${creatureId}/details`);
// });

router.get("/:creatureId/delete", async (req, res) => {
  const { creatureId } = req.params;

  await creatureService.delete(creatureId);
  res.redirect("/posts/all");
});

// router.get("/:creatureId/vote", async (req, res) => {
//   const { creatureId } = req.params;
//   const { _id } = req.user;
//   console.log({ _id });

//   await creatureService.addVotesToCreature(creatureId, _id);

//   res.redirect(`/posts/${creatureId}/details`);
// });

module.exports = router;
