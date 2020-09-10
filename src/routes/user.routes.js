const { Router } = require('express');
const router = Router();

const { signupForm, signinForm, signin, signup, logout } = require('../controllers/userController')

router.get('/signup', signupForm)
router.post('/signup', signup)


router.get('/signin', signinForm)
router.post('/signin', signin)


router.get('/logout', logout)




module.exports = router;