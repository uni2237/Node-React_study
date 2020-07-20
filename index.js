const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
//아이디,비밀번호라고 적혀있는곳에 넣으면 됨 (보안상 가림)
mongoose.connect('mongodb+srv://아이디:비밀번호@boilerplate.6dflk.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=> console.log('MongoDB Connected =...'))
  .catch(err=>console.log(err))



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
