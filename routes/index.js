import { Router } from 'express'
import usersRoute from './users.js'
import userRoute from './user.js'
import chatRoute from './chats.js'
import postsRoute from './posts.js'
import messageRoute from './messages.js'

const route = new Router();


route.use('/posts', postsRoute)
route.use('/users', usersRoute)
route.use('/user', userRoute)
route.use('/chats', chatRoute)
route.use('/messages', messageRoute)

export default route;
