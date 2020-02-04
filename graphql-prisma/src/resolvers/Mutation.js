import uuidv4 from 'uuid/v4';

export default {
    createUser(parent, args, { db }, info) {
        const emailTaken = db.users.some(user => {
            return user.email === args.data.email;
        });
        if (emailTaken) {
            throw new Error("Email Already Exist.");
        }

        const newUser = {
            id: uuidv4(),
            ...args.data
        };
        
        db.users.push(newUser);
        return newUser;
    },

    deleteUser(parent, args, { db }, info) {
        const userIndex = db.users.findIndex(user => user.id === args.userId);
        if (userIndex === -1) {
            throw new Error("No user exist");
        }
        const deleteUsers = db.users.splice(userIndex, 1);

        posts = posts.filter(post => {
            const match = post.author === args.id;
            if (match) {
                db.comments = db.comments.filter(comment => {
                    return comment.author !== post.id;
                });
            }
            return !match;
        });

        db.comments = db.comments.filter(comment => {
            return db.comment.author !== args.id;
        });

        return deleteUsers[0];
    },

    createPost(parent, args, { db }, info) {
        const userExist = users.some(user => user.id === args.data.author);
        
        if (!userExist) {
            throw new Error("User does not exist");
        }
        
        const newPost = {
            id: uuidv4(),
            ...args.data
        }
        
        db.posts.push(newPost);
        return newPost;
    },
    
    createComment(parent, args, { db }, info) {
        const userExist = db.users.some(user => user.id === args.data.author);
        if (!userExist) {
            throw new Error("User does not exist");
        }

        const postExist = db.posts.some(post => post.id === args.data.post);
        if (!postExist) {
            throw new Error("Post does not exist");
        }

        const newComment = {
            id: uuidv4(),
            ...args.data
        };

        db.comments.push(newComment);
        return db.newComment;
    }
}