const Animal = require("../models/Animal");

exports.create = (animalData) => Animal.create(animalData);

exports.getAll = () => Animal.find();

exports.singleAnimal = (animalId) => Animal.findById(animalId);

exports.getMyAnimals = (ownerId) => Animal.find({ owner: ownerId }).populate("owner");

exports.update = (animalId, animalData) => Animal.findByIdAndUpdate(animalId, animalData);

exports.delete = (animalId) => Animal.findByIdAndDelete(animalId);

exports.getLastThreeAdded = () => Animal.find().sort({ createdAt: -1 }).limit(3).lean();

exports.searchAnimal = (animals, search, name, location, needs) => {
  let filteredAnimals = [...animals];

  if (search) {
    filteredAnimals = filteredAnimals.filter((animal) => {
      const searchRegex = new RegExp(search, "i");
      return (
        (animal.name && animal.name.match(searchRegex)) ||
        (animal.location && animal.location.match(searchRegex)) ||
        (animal.needs && animal.needs.match(searchRegex))
      );
    });
  } else {
    if (name) {
      filteredAnimals = filteredAnimals.filter((animal) => {
        const nameRegex = new RegExp(name, "i");
        return animal.name && animal.name.match(nameRegex);
      });
    }

    if (location) {
      filteredAnimals = filteredAnimals.filter((animal) => {
        const locationRegex = new RegExp(location, "i");
        return animal.location && animal.location.match(locationRegex);
      });
    }

    if (needs) {
      filteredAnimals = filteredAnimals.filter((animal) => {
        const needsRegex = new RegExp(needs, "i");
        return animal.needs && animal.needs.match(needsRegex);
      });
    }
  }

  return filteredAnimals;
};
