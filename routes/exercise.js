const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exerciseController');

/* GET home page. */
router
  .route('/exercises')
  .get(exerciseController.getAllExercises);

router
  .route('/muscle/:muscle')
  .get(exerciseController.getMuscleExercises);

router
  .route('/exercise/:name')
  .get(exerciseController.searchExercise);

router
  .route('/workouts/:muscleList')
  .get(exerciseController.getWorkout);

module.exports = router;
