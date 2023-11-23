import db from '../db.js'


class PostController {
    async createPost(req, res) {
        const {title, content, userId} = req.body
        const newPost = await db.query('INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *', [title, content, userId])
        res.json(newPost.rows[0])
        // res.json(req.body)
    }
    // async getPosts(req, res) {
    //     const posts = await db.query('SELECT * FROM post')
    //     res.json(posts.rows)

    // }
    async getPostByUser(req, res) {
        const id = req.query.id
        const post = await db.query('SELECT * FROM post where user_id = $1', [id])
        res.json(post.rows)
        // res.json(id)
    }
    // async updatePost(req, res) {
    //     const {id, title, surname} = req.body
    //     const post = await db.query('UPDATE post set title = $1, content = $2 where id = $3 RETURNING *', [title, content, id])
    //     res.json(post.rows)

    // }
    // async deletePost(req, res) {
    //     const id = req.params.id
    //     const post = await db.query('DELETE FROM post where id = $1', [id])
    //     res.json(post.rows[0])
    // }
}

export default new PostController()