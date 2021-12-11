import express from 'express';
import { getAllActions, getMonthlyActionsCount, getMonthlyActionsCumulativeAvg } from '../controllers/action.controller.js';

const router = express.Router();

router.get('/', getAllActions);
router.get('/getMonthlyCount', getMonthlyActionsCount);
router.get('/getMonthlyCumulativeAvg', getMonthlyActionsCumulativeAvg)

export default router;
