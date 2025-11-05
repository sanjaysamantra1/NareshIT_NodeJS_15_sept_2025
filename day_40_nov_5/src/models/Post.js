import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, unique: true, required: true },
    uerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
})
const Post = mongoose.model('Post', postSchema);
export default Post;