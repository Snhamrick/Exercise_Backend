const mongoose = require('mongoose');
const Exercise = mongoose.model('exercises');
const _ = require('underscore')

const getAllExercises = async (req, res) => {
    console.log("get all called");
    try {
        const exerciseList = await Exercise.find();
        if (!exerciseList) {
            return res.status(401).json({"message": "No exercises available"});
        } else {
            return res.status(200).json(exerciseList);
        }
    } catch (err) {
        return res.status(500).json(err.message);
    }
}

const getMuscleExercises = async (req, res) => {
        console.log("get muscle called");
        console.log(req.params.muscle);
        try {
            const exerciseList = await Exercise.find({tgtMuscle: req.params.muscle});
            if (exerciseList.length === 0) {
                return res.status(401).json({"message": "No exercises found for that muscle"});
            } else {
                return res.status(200).json(exerciseList);
            }
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

const searchExercise = async (req, res) => {
    try {
        const exercise = await Exercise.find({name: req.params.name});
        if (!exercise) {
            return res.status(401).json({"message": "No exercises of that name were found"});
        } else {
            return res.status(200).json(exercise);
        }
    } catch (err) {
        return res.status(500).json(err.message);
    }
}

const getWorkout = async (req, res) => {
    try {
        const muscleList = req.params.muscleList.split(',')
        console.log(muscleList.length);
        let workoutList = [];
        for (let i=0; i < muscleList.length; i++) {
             let exercise = await Exercise.find({tgtMuscle: muscleList[i]});
             let exerciseList = _.sample(exercise, 2);
             for (let j=0; j < exerciseList.length; j++) {
                workoutList.push(exerciseList[j]);
             }
        }
        return res.status(200).json(workoutList);
    } catch (err) {
        return res.status(500).json(err.message);
    }
}





module.exports = {
    getAllExercises,
    getMuscleExercises,
    searchExercise,
    getWorkout
}