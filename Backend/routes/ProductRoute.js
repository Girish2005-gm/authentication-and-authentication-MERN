const router = require("express").Router();

const ensureAuthanticated = require("../middlewares/EnsureAuthenticated")
router.get("/", ensureAuthanticated, (req, res) => {
    res.status(200).json([
        {
            name: "mobile",
            price: 50000
        },
        {
            name: "tv",
            price: 20000
        }
    ])
});



module.exports = router;
