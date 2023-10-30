const Animal = require("../models/Animal");

exports.create = (animalData) => Animal.create(animalData);

exports.getAll = () => Animal.find();

exports.singleAnimal = (animalId) => Animal.findById(animalId);

exports.getMyAnimals = (ownerId) => Animal.find({ owner: ownerId }).populate("owner");

exports.delete = (animalId) => Animal.findByIdAndDelete(animalId);
