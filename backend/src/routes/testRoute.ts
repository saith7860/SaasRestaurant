import express, { Request, Response } from 'express';
import { sendEmail } from '../utils/sendEmail.js';
const testEmailRouter=express.Router();
testEmailRouter.post('/send-email',async(req:Request,res:Response)=>{
    try {
        
        const {to,subject,html}=req.body;
        await sendEmail({to,subject,html});
        res.status(200).json({message:'Email sent successfully'})
    } catch (error) {
        console.log("Email sending failed:",error);
        res.status(500).json({message:'Email sending failed'})
    }
})
export default testEmailRouter
