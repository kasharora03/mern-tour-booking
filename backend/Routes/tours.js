import express from 'express';
import {createTour, updateTour, deleteTour, getSingleTour, getAllTour, getTourBySearch, getFeaturedTour, getTourCounts} from './../controllers/tourController.js'
const router = express.Router();

// create new tour
router.post('/', createTour)

// update tour
router.put('/:id', updateTour)

// delete tour
router.delete('/:id', deleteTour)

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