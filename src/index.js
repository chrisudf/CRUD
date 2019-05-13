const express = require ('express')
const routes =require('./routes')
const app = express()

app.use(express.json())
app.use('/v1',routes)

app.listen(8888,()=>{
    console.log('server listening to port 8888')
})