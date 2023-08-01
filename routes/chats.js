import { Router } from 'express';
import {
    getMyChats
} from '../controllers/chats.js';
import { auth } from '../utils/auth.js';

const route = new Router();

route.get('/my', auth, getMyChats);

export default route;
