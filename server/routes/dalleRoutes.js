import express, { Router } from 'express';

import * as dotenv from 'dotenv'
import OpenAI from 'openai';
dotenv.config();
const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

router.get('/',(req,res)=>{
    res.send( "Hello from open ai")
})
router.route('/').post(async(req,res)=>{
try {
    const {prompt} = req.body;
    console.log("prompt:" ,prompt)
    const aiResponse = await openai.images.generate({
        prompt,
        n:1,
        size:'1024x1024',
        response_format:'url'
    })
    // console.log(aiResponse)
    const image = aiResponse.data[0].url;
console.log(image)
    res.status(200).json({photo:image});

} catch (error) {
    console.log(error);
    res.status(500).send(error?.response.data.error.message);
}
})

export default router;