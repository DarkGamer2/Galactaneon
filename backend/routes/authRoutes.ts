import {register_user, user_login} from '../controllers/authController';
import express from 'express';

const router = express.Router();
const authRoutes = router;

router.post('/register', register_user);
router.post('/login', user_login);

export default authRoutes;