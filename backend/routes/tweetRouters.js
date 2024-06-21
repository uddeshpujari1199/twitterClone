import express from 'express'
import { Logout, Register,Login } from '../controllers/userController.js'
import { createTweet, deleteTweet } from '../controllers/twitteController.js';
import isAuthentication from '../config/auth.js';

const router = express.Router();
router.route("/create").post(isAuthentication, createTweet)
router.route("/create").post(isAuthentication, createTweet)
router.route("/delete/:id").delete(deleteTweet);
export default router;