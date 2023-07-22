import { Router } from "express"
import { getUser, createUser, editUser, deleteUser, changeAvatar, changePicture, loginUser } from '../controllers/user.js'
import {auth} from '../utils/auth.js'

const route = new Router()

route.post('/', createUser);
route.get('/', auth, getUser);
route.put('/', auth, editUser);
route.delete('/', auth, deleteUser);
route.post('/login', loginUser);
route.put('/img/', auth, changeAvatar);
route.put('/picture/', auth, changePicture);

export default route;
