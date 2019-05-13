const express = require ('express')
require('dotenv').config()
const routes =require('./routes')
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const app = express()

const PORT =process.env.PORT || 8888


const morganLog =
  process.env.NODE_ENV === 'production' ? morgan('common') : morgan('dev');

app.use(express.json())
app.use(helmet());
app.use(morganLog);
app.use(cors());
app.use('/v1',routes)

app.listen(PORT,()=>{
    console.log(`server listening to port ${PORT}`)
})