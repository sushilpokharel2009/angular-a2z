const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/newDB').then(
    () => console.log('DB is running')
).catch(
    err => console.log(err)
)
const app = express();


app.use(cors());
app.use(express.json());

app.use("/user", require('./Routes/User'));
app.use("/person", require('./Routes/Person'));
app.use("/nperson", require('./Routes/NewPerson'));



app.listen(9090, () => {
    console.log("listening...")
})