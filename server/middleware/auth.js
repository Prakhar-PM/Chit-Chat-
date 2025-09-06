// middleware to protect 
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
export const protectRoute=async (req,res,next)=>{
    try{
        const token = req.headers.token;
        const decoded = jwt.verify(token,process.env.SECRET_KEY);
        const user =  await User.findById(decoded.userId).select('-password');

        if(!user){
            return res.json({success: false, msg: "User not found"});
        }

        req.user = user;
        next();
    }catch(error){
        console.log(error.message);
        return res.json({success: false, msg: error.message});
    }
}

