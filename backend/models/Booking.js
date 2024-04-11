import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    userEmail: {
      type: String,
    },
    tourName:{
        type:String,
        required:true,
    },
    fullName: {
      type: String,
      required: true,
    },
    pickUp: {
      type: String,
      required: true,
    },
    time: {
      type:String,
      required: true,
    },
    custom: {
      type:String,
      required: true,
    },
    guestSize:{
        type: Number,
        required:true,
    },
    phone:{
        type: Number,
        required:true,
    },
    bookAt:{
        type: Date,
        // required:true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
