const express = require('express')
const app = express()
const port = 5000
const {user} = require("./models/user");
const bodyparser = require('body-parser');
const config = require('./config/key');

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());



const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser:true,  useUnifiedTopology:true, useCreateIndex:false, useFindAndModify:false
}).then(() => console.log('mongodb is conneted')).catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/register',(req,res)=>{
    const User = new user(req.body)
    User.save((err,doc)=>{
        if(err) return res.json({succces:false,err})
        return res.status(200).json({succces:true})
    })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
