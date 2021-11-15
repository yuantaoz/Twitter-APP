import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import usersRoutes from './routes/users.js';

const app = express();

dotenv.config();

app.use(cors());
// app.use(express.static("../client/build"));

app.use('/users', usersRoutes);

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));