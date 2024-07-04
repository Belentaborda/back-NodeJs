const express = require('express');
const directorController = require('../controllers/directrorController');
const router = express.Router();

router.get('/directors', directorController.getAllDirectors);

module.exports = router;