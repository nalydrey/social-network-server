import {Router} from 'express'
import {
    createPost,
    getMyPosts,
    deletePost,
    setLike,
    getPosts
} from '../controllers/posts.js'
import {auth} from '../utils/auth.js'

const route = new Router()

route.post('/', createPost)
route.get('/my', auth, getMyPosts)
route.get('/', getPosts)
route.delete('/:postId',auth, deletePost)
route.put('/like/:postId',auth, setLike)

export default route