import express from 'express';

import { getUsers } from '../controller/users.js';

const router = express.Router();

router.get('/:username', getUsers);

export default router;