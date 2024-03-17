import express from 'express';
import dotenv  from 'dotenv';
import mongoose from 'mongoose';
// import bodyParser from 'body-parser'
import cors from "cors";
import cookieParser from 'cookie-parser';
import tourRoute  from './Routes/tours.js';
import userRoute  from './Routes/user.js';
import authRoute  from './Routes/auth.js';
// import Tour from './models/Tour.js';

dotenv.config();
const app = express();
const port = process.env.PORT ||8000;

// database connect
mongoose.set('strictQuery',false);
const connect= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        // await mongoose.connect(process.env.MONGO_URI,{
        //     useNewUrlParser:true,
        //     useUnifiedTopology: true
        // });
        console.log("Mongodb connectedd successfully");
    }catch(err){
        console.error("not connected to mongo",err);
    }

}
// middleware
app.use(express.json()); // parse request of content type - application/json
app.use(cors()) // enable CORS
app.use(cookieParser());
app.get('/',(req,res)=>{
    res.send('hello')
})
// old approach
// app.post('/tours',async(req,res)=>{
//     const newTour = new Tour(req.body);
//     const savedTour = await newTour.save()
//     res.send(savedTour);
// })
// new approach
app.use('/tours',tourRoute);
app.use('/users',userRoute);
app.use('/auth',authRoute);

// listening
app.listen(port,()=>{
    connect();
    console.log('listening to ',port);
})