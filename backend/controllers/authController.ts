import express from 'express';
import User from '../models/User';
import passport from 'passport';
import { userinfo } from '../interfaces/UserInterface';

const register_user = async (req: express.Request, res: express.Response) => {
    const user=new User(req.body);
    if(!user.emailAddress){
        return res.status(400).json({error:"Email address is required"});
    }

    try{
        const existingUser= await User.findOne({emailAddress: user.emailAddress});
        if(existingUser){
            return  res.status(400).json({error:"User with this email already exists"});
        }

        await user.save();
        res.status(201).json({message:"User registered successfully"});
    }
    catch(err){
        res.status(500).json({error:"Internal server error"});
    }
    
};

const user_login = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    passport.authenticate('local', (err: Error, user: userinfo, info: any) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (!user) {
            return res.status(401).json({ error: 'Authentication failed' });
        }
        req.login(user, (loginErr) => {
            if (loginErr) {
                return res.status(500).json({ error: 'Login failed' });
            }
            return res.status(200).json({ message: 'Login successful', user });
        });
    })(req, res, next);
};
    

export { register_user, user_login };