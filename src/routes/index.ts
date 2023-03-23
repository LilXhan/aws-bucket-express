import storageRouter from './storage';
import projectsRouter from './projects';
import authRouter from './auth';
import fs from 'fs';
import { Router } from 'express';

const routes = Router();

interface Route {
  [key: string]: Router
}

const functRouters: Route = {
  storageRouter,
  projectsRouter,
  authRouter
}

const currentPathDir = __dirname;

const removeExt = (file: string) => {
  return file.split('.').shift();
};

fs.readdir(currentPathDir, (error, files) => {
  files.filter(file => {
    const name = removeExt(file);
    if (name !== 'index') {
      routes.use(`/${name}`, functRouters[`${name}Router`])
    };
  });
});

export default routes;