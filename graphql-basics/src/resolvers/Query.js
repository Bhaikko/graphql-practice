const Query = {
    users(parent, args, { db }, info) {
        return db.users;   
    },
    posts() {
        return db.posts;
    },
    comments() {
        return db.comments;
    }
}

export default Query;