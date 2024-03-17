import User from '../models/User.js';
// create new User
export const createUser = async (req, res) => {
    const newUser = new User(req.body) //create new instance
    try {
        const savedUser = await newUser.save() //saving to db
        res.status(200).json({ success: true, message: 'Successfully Created', data: savedUser })
    }
    catch (err) {
        res.status(500).json({ success: false, message: 'Failed to create. Try again', data: savedUser })
    }
};
// update
export const updateUser = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true }) // return the new value not the old one

        res.status(200).json({
            success: true,
            message: 'Successfully Updated',
            data: updatedUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update. Try again'
        })
    }
};
// delete
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id);

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
// getSingleUser 
export const getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id); // Change variable name to 'user'

        res.status(200).json({
            success: true,
            message: 'Successful',
            data: user // Use the corrected variable name
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Failed to Fetch. Try again'
        })
    }
};


// getAllUsers
export const getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            message: 'Successful',
            data: users
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Failed to Fetch. Try again'
        })
    }
};