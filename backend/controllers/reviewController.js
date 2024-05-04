import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
    const tourID = req.params.tourID; // Ensure it's 'tourID' here
    const newReview = new Review({...req.body})
    try {
        const savedReview = await newReview.save()

        await Tour.findByIdAndUpdate(tourID, {
            $push: { reviews: savedReview._id }
        });

        res.status(200).json({
            success: true,
            message: "Review added successfully",
            data: savedReview
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to submit review"
        });
    }
}

