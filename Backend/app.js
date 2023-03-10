const http= require('http');
const express=require('express');
const app = express();
const cors = require('cors')
const mongoose= require('mongoose');
const port = 8080;
const db = "mongodb://localhost:27017/dashboard"
const register = require('./routes/register')
// const router = require('./routes/routes')
const userRoutes = require('./routes/usersRoutes')
mongoose.connect(db,
    {
        useNewUrlParser: true,
    }
)
const database = mongoose.connection;

database.on("open", function () {
    console.log("Connected successfully");
  });
app.use(express.json());
app.use(cors());
// app.use(router);
app.use(userRoutes)
app.use(register)

app.listen(port,()=>{
    console.log(`Server is starting at port ${port}`)
})