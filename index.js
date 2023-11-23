import express from "express";
import userRouter from "./routes/user.routers.js";
import postRouter from "./routes/post.routers.js";
// import * from "/.env"

const PORT = process.env.PORT8 || 8080;

const app = express();

console.log(process.env)



app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)


app.listen(PORT, ()=> console.log(`server Started! on port ${PORT}`));









// app.get('/', (req,res) => {
// res.send('HELLO POSTGRE + NODE.JS!!!')
// })
