import { Router } from 'express';

const projectsRouter = Router();

projectsRouter.post('/', (req, res) => {
  res.send('projects')
}); 

export default projectsRouter;