import express from 'express';
import {createTour, updateTour, deleteTour, getSingleTour, getAllTour, getTourBySearch, getFeaturedTour, getTourCounts} from './../controllers/tourController.js'

import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();

// create new tour
router.post('/',verifyAdmin, createTour)

// update tour
router.put('/:id', verifyAdmin, updateTour)

// delete tour
router.delete('/:id', verifyAdmin, deleteTour)

// get single tour
router.get('/:id', getSingleTour)

// get all tour
router.get('/', getAllTour)

// search
router.get('/search/getTourBySearch',getTourBySearch);

// search featured
router.get('/search/getFeaturedTour',getFeaturedTour);

// count tours
router.get('/search/getTourCounts',getTourCounts);

export default router;