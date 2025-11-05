import User from '../models/User.js';
import Post from '../models/Post.js';

export const resolvers = {
    Query: {
        users: async () => await User.find(),
        user: async (_, { id }) => await User.findById(id),
        posts: async () => await Post.find(),
        post: async (_, { id }) => await Post.findById(id),
        postByUser: async (_, { userId }) => await Post.findById({ userId }),
    },
    Mutation: {
        createUser: async (_, { name, email, age }) => {
            const user = new User({ name, email, age });
            return await user.save();
        },
        createPost: async (_, { title, content, userId }) => {
            const post = new Post({ title, content, userId });
            return await post.save();
        },
        deleteUser:async (_, { id }) => {
            await User.findByIdAndDelete(id);
            return `User ${id} Deleted Successfully!!`
        },
        deletePost:async (_, { id }) => {
            await Post.findByIdAndDelete(id);
            return `Post ${id} Deleted Successfully!!`
        },
    }
}