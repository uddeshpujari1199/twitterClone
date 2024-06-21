import express from 'express'
import { Logout, Register,Login } from '../controllers/userController.js'

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
export default router;