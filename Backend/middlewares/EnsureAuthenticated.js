const jwt = require("jsonwebtoken")
const ensureAuthanticated = (req, res, next) => {
    const auth = req.headers['authorization']
    if (!auth) {
        return res.status(403)
            .json({ message: "unautherized jwt token is required" })
    }
    try {
        const decoded = jwt.verify(auth, process.env.JWTSEC)
        req.user = decoded
        next()
    }
    catch (err) {
        return res.status(403)
            .json({ message: "unautherized jwt token is required" })
    }
}

module.exports=ensureAuthanticated