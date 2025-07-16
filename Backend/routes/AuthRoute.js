const router = require("express").Router();
const { signup,signin } = require("../controllers/AuthController");
const { validateSignup, validateSignin } = require("../middlewares/validateAuth")

router.post("/signup", validateSignup,signup);

router.post("/signin", validateSignin,signin);

module.exports = router;
