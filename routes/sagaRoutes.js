const express = require('express');
const sagaController = require('../controllers/sagaController');
const router = express.Router();

router.post('/sagas', sagaController.createSaga);
router.get('/sagas', sagaController.getAllSagas);
router.get('/sagas/:id', sagaController.getSagaById);
router.put('/sagas/:id', sagaController.updateSaga);
router.delete('/sagas/:id', sagaController.deleteSaga);

module.exports = router;

