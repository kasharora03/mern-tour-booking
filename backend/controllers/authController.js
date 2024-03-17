import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
// user register
export const register = async(req,res)=>{
    // hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password,salt);
    try {
        const newUser = new User({
            username: req.body.username, 
            email:req.body.email,
            password:hash, //changed to hashes one instead of req.bpdy.password
            photo:req.body.photo,
        })
        await newUser.save();
        res.status(200).json({
            success:true,
            message: "Account has been created",
            data:newUser
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "Failed to create. Try Again",
        })
    }
};
// user login
export const login = async(req,res)=>{
    const email = req.body.email;
    try {
        const user = await User.findOne({email})
        // if user doesnt exist
        if(!user){
            return res.status(404).json({
                success:false,
                message:"user doesn't exist"
            })
        }
        // if user exist then check for correct password
        const checkCorrectPassword=bcrypt.compare(req.body.password, user.password);

        // if password is incorrect
        if(!checkCorrectPassword){
            return res.status(401).json({
                success:false,
                message:"Incorrect email or password."
            })
        }
        // get data from mongo
        const {password, role, ...rest} = user._doc;

        // crezte jwt token
        const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET_KEY, {expiresIn:'1d'});

        // set token in the browser cookies and send the response to the client
        res.cookie('accessToken', token, {
            httpOnly:true,
            expires: token.expiresIn
        }).status(200).json({
            success: true,
            message: 'User Logged In Successfully!',
            data:{...rest},
            // token:token,
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "Failed to Login. Try Again",
        })
    }
}