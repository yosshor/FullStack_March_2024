import express from 'express';
import { saveScore } from '../../controllers/score/saveScore';
import { getHighScores } from '../../controllers/score/usersHighScore';
import { getUserMaxScores } from '../../controllers/score/userMaxScore';


const router = express.Router();

router.post('/save', saveScore);
router.get('/high-scores', getHighScores);
router.get('/get-user-high-scores', getUserMaxScores);

export default router;
