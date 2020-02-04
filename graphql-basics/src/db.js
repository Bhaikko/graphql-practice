const users = [
    {
        id: "1",
        name: "Siddharth",
        age: 18,
        email: "siddharthLovesIshika@gmail.com"
    },
    {
        id: "2",
        name: "Ishika",
        age: null,
        email: "iWishILovedSiddharth@gmail.com"
    }
];

const posts = [
    {
      id: "1",
      title: "GraphQL 101",
      body: "This is how to use GraphQL...",
      published: true,
      author: '1'
      
    },
    {
      id: "2",
      title: "GraphQL 201",
      body: "This is an advanced GraphQL post...",
      published: false,
      author: '2'
    },
    {
      id: "3",
      title: "Programming Music",
      body: "David Cutter Music is my favorite artist to listen to while programming.",
      published: false,
      author: '1'
    }
];

const comments = [
    {
        id: "1",
        text: "A Comment By Honnu",
        author: '1',
        post: '1'
    },
    {
        id: "2",
        text: "A Comment By Honnu",
        author: '1',
        post: '2'
    },
    {
        id: "3",
        text: "A Comment By Lily",
        author: '2',
        post: '3'
    },
    {
        id: "4",
        text: "A Comment By Lily",
        author: '2',
        post: '1'
    },
];

const db = {
    users,
    posts,
    comments
}

export default db;
