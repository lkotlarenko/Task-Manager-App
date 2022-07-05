import express from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import router from './router';
import cors from 'cors';

const app = express();

const corsOptions ={
   origin:'*',
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(router);
app.use(errorMiddleware);

export default app;
