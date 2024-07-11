const express = require('express');
const directorController = require('../controllers/directorController');
const router = express.Router();

router.post('/directors', directorController.createDirector);
router.get('/directors', directorController.getAllDirectors);

module.exports = router;