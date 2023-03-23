import express, { Application } from 'express';
import cors from 'cors';
import { config }  from 'dotenv';
import routes from './routes';
import path from 'path';

const app: Application = express();

config();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, './images')))
app.use('/api/v1', routes);

const PORT = process.env.PORT!;

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
