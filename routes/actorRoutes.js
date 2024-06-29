const express = require('express');
const actorController = require('../controllers/actorController');
const router = express.Router();

router.post('/actors', actorController.createActor);
router.get('/actors', actorController.getAllActors);
router.get('/actors/:id', actorController.getActorById);
router.put('/actors/:id', actorController.updateActor);
router.delete('/actors/:id', actorController.deleteActor);

module.exports = router;
