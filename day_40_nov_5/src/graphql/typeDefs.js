export const typeDefs = `
    type User{
        id:ID!
        name:String!
        email:String!
        age:Int
        posts:[Post]
    }
    type Post{
        id:ID!
        title:String!
        content:String!
        user:User
    }
    type Query{
        users:[User]
        user(id:ID!):User
        posts:[Post]
        post(id:ID!):Post
        PostByUser(userId:ID!):[Post]
    }
`