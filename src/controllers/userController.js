const router = require("express").Router();
const userService = require("../services/userService");

router.get("/register", (req, res) => {
  res.render("users/register");
});

router.post("/register", async (req, res) => {
  const { email, password, rePassword } = req.body;
  await userService.register({
    email,
    password,
    rePassword,
  });

  res.cookie("token", token, { httpOnly: true });
  res.redirect("/");
});

router.get("/login", (req, res) => {
  res.render("users/login");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const token = await userService.login(email, password);
  res.cookie("token", token, { httpOnly: true });
  res.redirect("/");
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

module.exports = router;
