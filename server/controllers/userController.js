// sign up new user
import { generateToken } from '../lib/utils.js';
import User from '../models/User.js'
import bcrypt from 'bcryptjs';
import cloudinary from '../lib/cloudinary.js';
import { protectRoute } from '../middleware/auth.js';

export const signUp = async(req,res)=>{
    const {fullName,email,password,bio} = req.body;
    try{
        if(!fullName||!email || !password){
            return res.status(400).json({success: false,msg: "All fields are required"});
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({success: false, msg: "User already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        
        const newUser = new User({
            fullName,
            email,  
            password: hashedPassword,
            bio
        });
        await newUser.save();
        const token = generateToken(newUser._id);

        res.json({success:true, userData: newUser,message:"Account created successfully",token});
        
    }
    catch(error){
        console.log(error);
        return res.status(500).json({success: false, msg: "Internal server error"});
    }
}

// contoller to login existing user
export const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const userData = await User.findOne({email});
        if (!userData) {
            return res.status(400).json({success: false, msg: "Invalid credentials"});
        }

        const isPasswordCorrect = await bcrypt.compare(password,userData.password);
        if( !isPasswordCorrect){
            return res.status(400).json({success: false, msg: "Invalid credentials"});
        }
        const token = generateToken(userData._id);
        res.json({success:true, userData, message:"Login successful", token});
    }catch(error){
        console.log(error);
        return res.status(500).json({success: false, msg: error.message});
    }
}
// controller to check if user is authenticated
export const checkAuth = async(req,res)=>{
    res.json({success: true, user: req.user});
}

// controller to update profile details
export const updateProfile = async (req, res)=>{
try {
const { profilePic, bio, fullName } = req.body;

const userId = req.user._id;
let updatedUser;

if(!profilePic){
updatedUser = await User.findByIdAndUpdate(userId, { bio, fullName }, { new: true });
}else{
    const upload =  await cloudinary.uploader.upload(profilePic);
    updatedUser = await User.findByIdAndUpdate(userId, { bio, fullName, profilePic: upload.secure_url }, { new: true });
}
 res.json({ success: true, user: updatedUser, msg: "Profile updated successfully" });
} catch (error) {
    res.json({ success: false, msg: error.message });
}

}