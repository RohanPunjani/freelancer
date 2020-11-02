const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const verify = require('./verifyToken');
const {registerValidation, loginValidation} = require('../validation');

//Register Route
router.post('/register',async (req,res) => {

    console.log(req);

    // validation
    const {error} = registerValidation(req.body)
    if(error) console.log(error.details[0].message);
    if(error) return res.status(400).send({success: false, msg: error.details[0].message});

    // check if user exists
    const emailExists = await User.findOne({email: req.body.email});
    if(emailExists) return res.status(400).send({success: false, msg:"Email already Exists"});

    // hashing password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    // create user object
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })

    // Saving user in DB
    try{
        // const savedUser = await user.save();
        const token = jwt.sign(JSON.stringify(user), process.env.TOKEN_SECRET);
        console.log(token)
        res.status(200).send({
          Success: true,
          msg: "User Registeration sucessfull",
          data: {
            token: token,
            user: { 
                id: user._id, 
                name: user.name, 
                email: user.email
            }
          }
        })
    }catch (err){
        console.log(err);
        res.status(400).send({
            success: false,
            msg: "from catch : "+err
        })
    }
})

// Login Route
router.post('/login',async (req,res) => {
    
    // Validation
    const {error} = loginValidation(req.body)
    if(error) return res.status(400).json({success: false, msg: error.details[0].message});

    // Check if user's email exists
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).json({success: false, msg:"No such email found"});

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).json({success: false, msg: "Incorrect Password"});

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).json({
        success: true,
        msg: "User Logged In Successfully",
        data:{
            token: token,
            user:{
                id: user._id,
                name: user.name,
                email: user.email
            }
        }
    })
})

router.get('/auth/user', verify, async (req, res) => {
    try {
      const user = await User.findById(req.user._id).select("-password");
      if (!user)
        return res.status(403).json({ Success: false, msg: "No user found" });
      res.json({ Success: true, data: user });
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
})

module.exports = router;
