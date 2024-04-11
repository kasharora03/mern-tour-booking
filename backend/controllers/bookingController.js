import Booking from "../models/Booking.js";

// create new booking
export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body);
    try {
        const savedBooking = await newBooking.save();
        res.status(200).json({ success: true, message: 'Your Tour is Booked', data: savedBooking });

    } catch (error) {
        res.status(500).json({
            success: true, message: 'Server Error! Trip not Booked'
        })
    }
}

// get single booking
export const getBooking = async (req, res) => {
    const id = req.params.id;
    try {
        const book = await Booking.findById(id);
        res.status(200).json({
            success: true,
            message: 'Successful',
            data: book,
        });
    } catch (error) {
        res.status(500).json({
            success: true, message: 'Not Found!'
        })
    }
}

// get all bookedtours
export const getAllBooking = async (req, res) => {
    const id = req.params.id;
    try {
        const books = await Booking.find();
        res.status(200).json({
            success: true,
            message: 'Successful',
            data: books
        });
    } catch (error) {
        res.status(500).json({
            success: true, message: 'Not Found!'
        });
    }
}