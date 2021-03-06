import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
const router = new Router();

// Get all Posts
router.route('/posts').get(PostController.getPosts);

// Get one post by cuid
router.route('/posts/:cuid').get(PostController.getPost);

// Add a new Post
router.route('/posts').post(PostController.addPost);

// Update a post bu cuid
router.route('/posts/:cuid').put(PostController.editPost);

// Update a vote bu cuid
router.route('/posts/:cuid').put(PostController.editVote);

// Delete a post by cuid
router.route('/posts/:cuid').delete(PostController.deletePost);

export default router;
