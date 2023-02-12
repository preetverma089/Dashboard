const http= require('http');
const express=require('express');
const app = express();
const mongoose= require('mongoose');
const port = 3000;
const db = "mongodb://localhost:27017"
const router = require('./routes/routes')
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

app.use(router);

app.listen(port,()=>{
    console.log(`Server is starting at port ${port}`)
})