const Animal = require("../models/Animal");

exports.create = (animalData) => Animal.create(animalData);

exports.getAll = () => Animal.find();

exports.singleAnimal = (animalId) => Animal.findById(animalId);

exports.getMyAnimals = (ownerId) => Animal.find({ owner: ownerId }).populate("owner");

exports.update = (animalId, animalData) => Animal.findByIdAndUpdate(animalId, animalData);

exports.delete = (animalId) => Animal.findByIdAndDelete(animalId);

exports.getLastThreeAdded = () => Animal.find().sort({ createdAt: -1 }).limit(3).lean();
