import express from 'express';
import cors from 'cors';

import Funcionario from './routes/Funcionario';

const routes = [Funcionario];

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    routes.map((route) => this.server.use(route));
  }
}

export default new App().server;
