import Tour from '../models/Tour.js';
// create new tour
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body)
    try {
        const savedTour = await newTour.save()
        res.status(200).json({ success: true, message: 'Successfully Created', data: savedTour })
    }
    catch (err) {
        res.status(500).json({ success: false, message: 'Failed to create. Try again', data: savedTour })
    }
};
// update
export const updateTour = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true }) // return the new value not the old one

        res.status(200).json({
            success: true,
            message: 'Successfully Updated',
            data: updatedTour
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update. Try again'
        })
    }
};
// delete
export const deleteTour = async (req, res) => {
    const id = req.params.id;
    try {
        await Tour.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: 'Successfully Deleted',
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to Delete. Try again'
        })
    }
};
// getSingleTour 
export const getSingleTour = async (req, res) => {
    const id = req.params.id;
    try {
        const tour = await Tour.findById(id);

        res.status(200).json({
            success: true,
            message: 'Successfully Deleted',
            data: tour
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Failed to Fetch. Try again'
        })
    }
};
// getAllTours
export const getAllTour = async (req, res) => {
    
};