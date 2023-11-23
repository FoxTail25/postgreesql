import Router from 'express';
const router = new Router()

import postController from '../controller/post.controller.js';


router.post('/post', postController.createPost)
// router.get('/post', postController.getPosts)
router.get('/post/:id', postController.getPostByUser)
// router.put('/post', postController.updatePost)
// router.delete('/post/:id', postController.deletePost)





export default router