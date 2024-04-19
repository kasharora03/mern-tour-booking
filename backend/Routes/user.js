import express from 'express';
import { updateUser, deleteUser, getSingleUser, getAllUser } from './../controllers/userController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();
// verify admin in all 3
// update user
router.put('/:id', updateUser)

// delete user
router.delete('/:id', deleteUser)

// get single user
router.get('/:id',  getSingleUser)

// get all user
router.get('/', getAllUser)

export default router;