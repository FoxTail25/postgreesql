import express from "express";

const PORT = process.env.PORT || 8080;
const app = express();

app.listen(PORT, ()=> console.log(`server Started! on port ${PORT}`));

app.get('/', (req,res) => {
res.send('HELLO POSTGRE + NODE.JS!!!')
})
