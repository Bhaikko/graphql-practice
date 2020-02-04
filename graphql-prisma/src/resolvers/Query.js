const Query = {
    users(parent, args, { db, prisma }, info) {
        // return db.users;   
        prisma.query.users(null, null)
    },
    posts() {
        return db.posts;
    },
    comments() {
        return db.comments;
    }
}

export default Query;