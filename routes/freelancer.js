const router = require('express').Router();
const Freelancer = require('../models/Freelancer');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const verify = require('./verifyToken');
const {registerValidation, loginValidation} = require('../validators/freelancer');

//Register Route
router.post('/register',async (req,res) => {

    // validation
    const {error} = registerValidation(req.body)
    if(error) console.log(error.details[0].message);
    if(error) return res.status(400).send({success: false, msg: error.details[0].message});

    // check if freelancer exists
    const emailExists = await Freelancer.findOne({email: req.body.email});
    if(emailExists) return res.status(400).send({success: false, msg:"Email already Exists"});

    // hashing password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    // create freelancer object
    const freelancer = new Freelancer({
        name: req.body.name,
        email: req.body.email,
        profession: req.body.profession,
        password: hashedPassword
    })

    // Saving freelancer in DB
    try{
        const savedfreelancer = await freelancer.save();
        const token = jwt.sign(JSON.stringify(freelancer), process.env.TOKEN_SECRET);
        console.log(token)
        res.status(200).send({
          Success: true,
          msg: "freelancer Registeration sucessfull",
          data: {
            token: token,
            freelancer: { 
                id: freelancer._id, 
                name: freelancer.name, 
                email: freelancer.email,
                profession: req.body.profession
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

    // Check if freelancer's email exists
    const freelancer = await Freelancer.findOne({email: req.body.email});
    if(!freelancer) return res.status(400).json({success: false, msg:"No such email found"});

    const validPass = await bcrypt.compare(req.body.password, freelancer.password);
    if(!validPass) return res.status(400).json({success: false, msg: "Incorrect Password"});

    const token = jwt.sign({_id: freelancer._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).json({
        success: true,
        msg: "freelancer Logged In Successfully",
        data:{
            token: token,
            freelancer:{
                id: freelancer._id,
                name: freelancer.name,
                email: freelancer.email
            }
        }
    })
})

router.get('/auth/freelancer', verify, async (req, res) => {
    try {
      const freelancer = await freelancer.findById(req.freelancer._id).select("-password");
      if (!freelancer)
        return res.status(403).json({ Success: false, msg: "No freelancer found" });
      res.json({ Success: true, data: freelancer });
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
})

module.exports = router;
