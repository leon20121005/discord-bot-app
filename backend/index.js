import actionRouter from './routers/action.router.js';
import cors from 'cors';
import express from 'express';
import sequelize from './configs/database.js';

const app = express();

try {
    await sequelize.authenticate();
    console.log('Database connection success');
} catch (error) {
    console.error('Database connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/actions', actionRouter);

app.listen(8080, () => {
});
