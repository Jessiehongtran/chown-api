const route = require('express').Router();
const postModel = require('./post.model');

//GET posts
route.get('/', async (req, res) => {
    try {
        const posts = await postModel.getPosts()
        res.status(200).json(posts)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//ADD post
route.post('/', async (req, res) => {
    const newPost = req.body;
    try {
        const idResponse = await postModel.addPost(newPost)
        res.status(200).json(idResponse)
    } catch (err){
        res.status(500).json(err.message)
    }
})

module.exports = route;