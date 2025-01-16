import express from 'express';
import { saveScore, getHighScores } from '../../controllers/score/scoreController';


const router = express.Router();

router.post('/save', saveScore);
router.get('/high-scores', getHighScores);

export default router;
