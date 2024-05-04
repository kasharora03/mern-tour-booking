import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
// import bodyParser from 'body-parser'
import cors from "cors";
import cookieParser from 'cookie-parser';
import tourRoute from './Routes/tours.js';
import userRoute from './Routes/user.js';
import authRoute from './Routes/auth.js';
import reviewRoute from './Routes/review.js';
import bookingRoute from './Routes/booking.js';
// import Tour from './models/Tour.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: ['http://localhost:3000', 'http://192.168.1.17:3000'],
    credentials:true
}

// database connect
mongoose.set('strictQuery', false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        // await mongoose.connect(process.env.MONGO_URI,{
        //     useNewUrlParser:true,
        //     useUnifiedTopology: true
        // });
        console.log("Mongodb connectedd successfully");
    } catch (err) {
        console.error("not connected to mongo", err);
    }

}
// middleware
app.use(express.json());
app.use(cors(corsOptions))
app.use(cookieParser());
app.get('/', (req, res) => {
    res.send('hello')
})
// old approach
// app.post('/tours',async(req,res)=>{
//     const newTour = new Tour(req.body);
//     const savedTour = await newTour.save()
//     res.send(savedTour);
// })

// new approach
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/booking', bookingRoute);

// listening
app.listen(port,'0.0.0.0', () => {
    connect();
    console.log('listening to ', port);
})