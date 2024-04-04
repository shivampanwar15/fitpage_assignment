
import dotenv from "dotenv"
import cors from 'cors';
import express from 'express';

dotenv.config({
  path: './.env'
})

const app = express()
const port = process.env.PORT;
import connectToMongo from './db.js'
connectToMongo();

app.use(cors());

app.use(express.json())
app.use('/api' , )
app.use('/api' , )
app.use('/api' , )

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 