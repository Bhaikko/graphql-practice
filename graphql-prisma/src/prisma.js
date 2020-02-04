import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',   //  fetching api queries
    endpoint: 'http://localhost:4466'  // database endpoint
});

export default prisma;
// prisma.query
// prisma.mutation
// prisma.subscription
// prisma.exists

// this returns a promise
// prisma.query.users(null, `{
//     id
//     name
//     email
//     posts {
//         id
//         title
//     }
// }`)
//     .then(data => {
//         console.log(JSON.stringify(data, undefined, 2));
//     });

// prisma.query.comments(null, `{
//     id
//     text
//     author {
//         id
//         name
//     }
// }`)
//     .then(data => {
//         console.log(data);
//     });

// prisma.mutation.createPost({
//     data: {
//         title: "New Graphql Post",
//         body: "New Course",
//         published: true,
//         author: {
//             connect: {
//                 id: "ck50ce9cz001z0798w3jj5j5t"
//             }
//         }
//     }
// }, `
// {
//     id
//     title
//     body
//     published
// }`)
//     .then(data => {
//         console.log(data);
//         return prisma.query.users(null, `{
//             id
//             name
//             email
//             posts {
//                 id
//                 title
//             }
//         }`)
//     })
//     .then(data => {
//         console.log(JSON.stringify(data, undefined, 2));
//     });

// const createPost = async (authorId, data) => {
//     const post = await prisma.mutation.createPost({
//         data: {
//             ...data,
//             author: {
//                 connect: {
//                     id: authorId
//                 }
//             }
//         }
//     }, `{
//         id
//     }`);

//     const user = await prisma.query.user({
//         where: {
//             id: authorId
//         }
//     }, `{
//         id
//         name
//         email
//         posts {
//             id
//             title
//             published
//         }
//     }`);

//     return user;
// }

// createPost('ck50ce9cz001z0798w3jj5j5t', {
//     title: "Async await post",
//     body: "Created using async await",
//     published: true
// })
//     .then(user => {
//         console.log(JSON.stringify(user, undefined, 2));
//     });

// prisma.exists.Post({
//     id: "ck50dcw1000ox0798ct629gj1"
// })
//     .then(exist => console.log(exist));