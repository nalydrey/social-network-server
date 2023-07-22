import { Router } from 'express';
import { getUsers } from '../controllers/users.js';

const route = new Router();

route.get('/', getUsers);

export default route;
