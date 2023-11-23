import express from "express";
import userRouter from "./routes/user.routers.js";
import postRouter from "./routes/post.routers.js";


const PORT = process.env.PORT || 8080;

const app = express();





app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)


app.listen(PORT, ()=> console.log(`server Started! on port ${PORT}`));









// app.get('/', (req,res) => {
// res.send('HELLO POSTGRE + NODE.JS!!!')
// })
