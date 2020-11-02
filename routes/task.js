const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/',verify ,(req,res) => {
    res.json({
        posts: {
            title: "My first JSON",
            description: "Cant access this without logging in"
        }
    })
})

module.exports = router;