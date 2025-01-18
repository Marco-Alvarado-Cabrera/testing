import express from 'express';
import { getAllUsers } from '../handlers/User.handlers';

const router = express.Router();

router.get('/all', getAllUsers);

export default router;
