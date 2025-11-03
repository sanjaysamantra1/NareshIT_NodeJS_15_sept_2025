const postModel = require('../models/post_model')

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.find().populate('author');
        console.log(posts)
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Fetching Posts');
    }
}