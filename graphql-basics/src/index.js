import { GraphQLServer, PubSub } from 'graphql-yoga';

import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import User from './resolvers/User';
import Post from './resolvers/Post';
import Comment from './resolvers/Comment';
import Subscription from './resolvers/Subscription';

import db from './db';

// Scalar Types, Stores only one value
// String, Boolean, Int, Float, ID 

// Type definitions (schema)
// Defining indiviual query
// const typeDefs = `
//     type Query {
//         hello: String!
//         name: String!
//         love: String!
//         doYouMissHer: String!
//     }
// `;


// For custom type, Query is replaced by that type
// const typeDefs = `
//     type Query {
//         greeting(name: String): String!
//         me: User!
//         post: Post!
//         add(numbers: [Int!]!): Int!
//         grades: [Int!]!
//         users(query: String): [User!]!
//     }

//     type User {
//         id: ID!
//         name: String!
//         age: Int
//     }

//     type Post {
//         id: ID!
//         title: String!
//         body: String!
//         published: Boolean!
//     }
// `;

// Moved To Seperate File
// Relation Data
// const typeDefs = `
//     type Query {
//         posts: [Post!]!
//         users(query: String): [User!]!
//         comments: [Comment!]!
//     }

//     type Mutation {
//         createUser(data: CreateUserInput): User!
//         deleteUser(userId: ID!): User!
//         createPost(data: CreatePostInput): Post!
//         createComment(data: CreateCommentInput): Comment!
//     }

//     input CreateUserInput {
//         name: String!
//         email: String!
//         age: Int
//     }

//     input CreatePostInput {
//         title: String!
//         body: String!
//         published: Boolean!
//         author: ID!
//     }

//     input CreateCommentInput {
//         text: String!
//         author: ID!
//         post: ID!
//     }

//     type User {
//         id: ID!
//         name: String!
//         age: Int
//         email: String!
//         posts: [Post!]!
//         comments: [Comment!]!
//     }

//     type Post {
//         id: ID!
//         title: String!
//         body: String!
//         published: Boolean!
//         author: User!
//         comments: [Comment!]
//     }

//     type Comment {
//         id: ID!
//         text: String!
//         author: User!
//         post: Post!
//     }
// `;

// Resolvers
// defing function when certain query is called
// const resolvers = {
//     Query: {
//         hello() {
//             return "Hello World";
//         },
//         name() {me
//             return "Siddharth Pawar"
//         },
//         love() {
//             return "Ishika Singh"
//         },
//         doYouMissHer() {
//             return "Ofcourse I do"
//         }
//     }
// };

// query resolvers are added based on query{} not custom types
// const resolvers = {
//     Query: {
//         greeting(parent, args, ctx, info) {

//             // parent contains the parent query object, example, the post parent will be user in relational data
//             // args contains the arguements passed through query from frontend
//             // ctx
//             // info

//             return args.name ? `Hello ${args.name}!` : "Hello!";
//             // return `Hello!`;
//         },
//         me() {
//             return {
//                 id: "2",
//                 name: "Siddharth",
//                 age: null
//             }
//         },
//         post() {
//             return {
//                 id: "3",
//                 title: "A New Post",
//                 body: "Body Text",
//                 published: false
//             }
//         },
//         add(parent, args, ctx, info) {
//             let sum = 0;
//             args.numbers.map(number => sum += parseInt(number));
//             // return args.x + args.y;
//             return parseInt(sum);
//         },
//         grades(parent, args, ctx, info) {
//             return [
//                 1, 2, 3, 4
//             ]
//         },
//         users(parent, args, ctx, info) {
//             if (!args.query) {
//                 return users;
//             } else {
//                 return users.filter(user => user.name.startsWith(args.query));
//             }
//         }
//     }
// };


// Relational data resolvers
// If the data type is not scalar then we have to tell explicitly how to handle the query
// const resolvers = {
    
// };

const pubsub = new PubSub();    // required for socket functions

// setting up server
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',   // path to file containing schema File
    resolvers: {
        Query,
        Mutation,
        User,
        Post,
        Comment,
        Subscription
    },
    context: {
        // allows to pass data to all resolvers
        db,
        pubsub
    },
});

server.start(() => {
    // console.log("Graphql server up and running on localhost:4000");
    
});