import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';
import transporter from '../config/nodemailer.js';
import { response } from 'express';
import { EMAIL_VERIFY_TEMPLATE, PASSWORD_RESET_TEMPLATE } from '../config/emailTemplates.js';

export const register = async (req, res) => {
    const {name,email,password} = req.body;
    
    if(!name || !email || !password)
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });

    try {
        const existingUser = await userModel.findOne({email});
        
        if(existingUser)
            return res.status(400).json({
                success: false,
                message: "User already exists"
        });

        const hashedPassword = await bycrypt.hash(password, 10);
        const user = new userModel({name, email, password: hashedPassword});
        await user.save(); // New User created and saved to the database

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // This is set to true in production
            sameSite: process.env.NODE_ENV === 'production' ? 'none': 'strict', // This is set to 'none' for cross-site cookies
            maxAge: 7*24*60*60*1000 // Sets the cookie to expire in 7 days
        });
        
        //Sending Welcome email to the user
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'Welcome to Gighub',
            text: `Hello ${name}, Welcome to Gighub. We are glad you are here. Your account has been successfully created with email id: ${email}`
        }

        await transporter.sendMail(mailOptions);

        return res.json({success: true});

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


export const login = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password)
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });

    try {
        const user = await userModel.findOne({email});
        
        if(!user)
            return res.status(400).json({
                success: false,
                message: "User not found"
            });

        const isMatch = await bycrypt.compare(password, user.password);

        if(!isMatch)
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'}); //Generates token and expires in 7 days

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // This is set to true in production
            sameSite: process.env.NODE_ENV === 'production' ? 'none': 'strict', // This is set to 'none' for cross-site cookies
            maxAge: 7*24*60*60*1000 // Sets the cookie to expire in 7 days
        });

        return res.json({success: true});

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const logout = async (req, res) => {
    try{
        res.clearCookie('token',{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',

        })
        return res.json({success: true,message: "Logged out successfully"});
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const sendVerifyOtp = async (req, res) => {
    try {
        const {userId} = req.body;
        const user = await userModel.findById(userId);
        if(user.isAccountVerified){
            return res.status(400).json({
                success: false,
                message: "Account already verified"
            });
        }

        const otp = String(Math.floor(100000 + Math.random() * 900000));
        user.verifyOtp = otp;
        user.verifyOtpExpireAt = Date.now() + 24*60*60*1000; // Otp expires in 24hrs
        await user.save();
        const mailOption = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Account Verification OTP',
            // text: `Hello ${user.name}, Your account verification OTP is ${otp}`,
            html: EMAIL_VERIFY_TEMPLATE.replace("{{otp}}",otp).replace("{{email}}",user.email)
        }
        await transporter.sendMail(mailOption);
        res.json({success: true, message: "Otp sent successfully"});
        } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const verifyEmail = async (req, res) => {
    const {userId, otp} = req.body;
    if(!userId || !otp){
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        }); 
    }

    try{
        const user = await userModel.findById(userId);
        if (!user){
            return res.status(400).json({
                success: false,
                message: "User not found"
            });
        }
        if (user.verifyOtp !== otp || user.verifyOtp === ''){
            return res.status(400).json({
                success: false,
                message: "Invalid OTP"
            });
        }
        if (user.verifyOtpExpireAt < Date.now()){
            return res.status(400).json({
                success: false,
                message: "OTP expired"
            });
        }
        user.isAccountVerified = true;
        user.verifyOtp = '';
        user.verifyOtpExpireAt = 0;
        await user.save();
        return res.json({
            success: true,
            message: "Account verified successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Check if the user is authenticated
export const isAuthenticated = async (req, res) => {
    try {
        return res.json({
            success: true
        });
    } catch (error) {
       res.status(500).json({
           success: false,
           message: error.message
       }); 
    }
};

//Send password reset OTP
export const sendResetOtp = async (req, res) => {
    const {email} = req.body;

    if(!email){
        return res.json({
            success:false,
            message: "Email is required",
        })
    }
    try {
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({
                success: false,
                message: "User not found"
            });
        }

        const otp = String(Math.floor(100000 + Math.random() * 900000));

        user.resetOtp = otp;
        user.resetOtpExpireAt = Date.now() + 15*60*1000; // Otp expires in 15 minutes
        await user.save();

        const mailOption = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Password Reset OTP',
            // text: `Your password reset OTP is ${otp}`,
            html: PASSWORD_RESET_TEMPLATE.replace("{{otp}}",otp).replace("{{email}}",user.email)
        };

        await transporter.sendMail(mailOption);

        return res.json({
            success: true,
            message: "Otp sent successfully"
        });


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//Reset user password
export const resetPassword = async (req, res) => {
    const {email, otp, newPassword} = req.body;

    if(!email || !otp || !newPassword){
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }
    try{

        const user = await userModel.findOne({email});

        if(user.resetOtp !== otp || user.resetOtp === ''){
            return res.status(400).json({
                success: false,
                message: "Invalid OTP"
            });
        }

        if(user.resetOtpExpireAt < Date.now()){
            return res.status(400).json({
                success: false,
                message: "OTP expired"
            });
        }

        const hashedPassword = await bycrypt.hash(newPassword, 10);
        user.password = hashedPassword; // Update the user password

        user.resetOtp = '';
        user.resetOtpExpireAt = 0;

        await user.save();

        return res.json({
            success: true,
            message: "Password reset successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};