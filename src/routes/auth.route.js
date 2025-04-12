const express = require('express');
const { login, me } = require('../controllers/auth.controller');
const { auth } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/login', login);
router.get('/me', auth, me);

module.exports = router;
