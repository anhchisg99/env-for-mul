// import 'dotenv/config'
import dotenv from "dotenv"
import path from "path"
const __dirname = path.resolve()

dotenv.config({ path: path.join(__dirname, `./.env.${process.env.NODE_ENV}`) })
// dotenv.config({ path: path.join(__dirname, `./.env`) })
import express from 'express'
const PORT = 3003
const app = express()


app.get('/',(req,res)=>{
    let test = process.env.TEST
    res.send(test)
})
app.listen(PORT,()=>{
    console.log(`listen in ${PORT}`)
})