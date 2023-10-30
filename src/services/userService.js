const User = require("../models/User");
const bcrypt = require("bcrypt");

async function validatePassword(password, userPassword) {
  //validate password
  const isValid = await bcrypt.compare(password, userPassword);

  if (!isValid) {
    throw new Error("Invalid email or password");
  }
}

exports.register = async (userData) => {
  const user = await User.create(userData);
  await validatePassword(password, user.password);

  const token = await getToken(user);
  return token;
};

exports.login = async (email, password) => {
  const user = await User.findOne({ email });

  //validate user
  if (!user) {
    throw new Error("Invalid email or password");
  }

  await validatePassword(password, user.password);

  const token = await getToken(user);
  return token;
};
