const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://david:rhrbgud1@boiler.kldve.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser:true,  useUnifiedTopology:true, useCreateIndex:false, useFindAndModify:false
}).then(() => console.log('mongodb is conneted')).catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
