export default {
    author(parent, args, { db }, info) {
        return users.find(user => user.id === parent.author ? true : false);
    },
    
    comments(parent, args, { db }, info) {
        return db.comments.filter(comment => comment.post === parent.id);
    }
}