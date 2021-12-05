import express from 'express';
import { getAllActions } from '../controllers/action.controller.js';

const router = express.Router();

router.get('/', getAllActions);

export default router;
