import { Router } from 'express';
import getFiles from '../utils/handleReadBucket'; 

const authRouter = Router();

authRouter.get('/', async (req, res) => {
  const results = await getFiles();
  res.send(results);
});

export default authRouter;