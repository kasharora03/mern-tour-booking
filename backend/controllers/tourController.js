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
        const tour = await Tour.findById(id).populate('reviews');

        res.status(200).json({
            success: true,
            message: 'Successful',
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
    // for pagination
    const page = parseInt(req.query.page);
    // console.log(page);
    try {
        const tours = await Tour.find()
        .populate('reviews')
        .skip(page * 8)
        .limit(8);
        
        res.status(200).json({
            success: true,
            count: tours.length,
            message: 'Successful',
            data: tours
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Failed to Fetch. Try again'
        })
    }
};

// get tour by search

export const getTourBySearch = async (req, res) => {
    const city = new RegExp(req.query.city, 'i') //i means case sensitive
    // const distance = parseInt(req.query.distance);
    // const maxGroupSize = parseInt(req.query.maxGroupSize);
    try {
        // const tours = await Tour.find({ city, distance: { $gte: distance }, maxGroupSize: { $gte: maxGroupSize } }).populate('reviews');
        // res.status(200).json({
        //     success: true,
        //     message: 'Successful',
        //     data: tours
        // })
        const tours = await Tour.find({ city }).populate('reviews');
        res.status(200).json({
            success: true,
            message: 'Successful',
            data: tours
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'Failed to Fetch. Try again'
        })
    }
}

// getFeaturedTours
export const getFeaturedTour = async (req, res) => {
    try {
        const tours = await Tour.find({featured: true}).populate('reviews').limit(8);
        res.status(200).json({
            success: true,
            count: tours.length,
            message: 'Successful',
            data: tours
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Failed to Fetch. Try again'
        })
    }
};

// get tour counts
export const getTourCounts = async (req,res)=>{
    try {
        const tourCount =  await Tour.estimatedDocumentCount();
        res.status(200).json({
            success: true,
            data: tourCount
        });
        
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Failed to Fetch. Try again'
        })
    }
}