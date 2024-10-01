import express from 'express';
import { test } from '../controllers/user.controller.js';


const router = express.Router();

//getting_information
router.get('/test', test);


export default router;