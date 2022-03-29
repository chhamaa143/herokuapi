const express =require('express');
const app = express();
const cors = require('cors');
const bodyParser =  require('body-parser');
const mongoose = require('mongoose');
const db ="mongodb+srv://Mohit_MongoDB:Mongo%40143214@cluster0.1m47d.mongodb.net/book-my-meal?retryWrites=true&w=majority"
mongoose.connect(db,{ useNewUrlParser: true}).then(()=>{
    console.log("coneected");
})
.catch(err=>{
    console.log(err);
});

const adminRoute =  require('./routes/adminRoute');
const userRoute = require('./routes/userRoute');
const categoryRoute = require('./routes/categoryRoute');
const packageRoute = require('./routes/packageRoute');
const itemRoute = require('./routes/itemRoute');
const cartRoute = require("./routes/cartRoutes");
const orderRoute = require("./routes/orderRoute");

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("./public"))


app.use('/admin',adminRoute);
app.use('/user',userRoute);
app.use('/category',categoryRoute);
app.use('/package',packageRoute);
app.use('/item',itemRoute);
app.use("/cart",cartRoute);
app.use("/order",orderRoute);

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log("server runing");
})