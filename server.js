const app = require('./app');
const mongoose=require("mongoose");

const DATABASE = "mongodb+srv://devansh12_02:<PASSWORD>@cluster0.ylso8me.mongodb.net/<NAME>?retryWrites=true&w=majority&appName=Cluster0"

const DATABASE_NAME = "Test1"
const DATABASE_PASSWORD = "chichore123"

const DB_URL=DATABASE.replace("<PASSWORD>",DATABASE_PASSWORD)
.replace("<NAME>",DATABASE_NAME);
console.log(DB_URL);
mongoose.connect(DB_URL).then((con)=>{
    console.log("---------DATABASE CONNECTED---------");
})
.catch((err)=>{
    console.log('Error!!!!!!!!!\n\n',err);
})  //db,connect is also apromise

const PORT = 1400

app.listen(PORT, ()=>{
    console.log("******App listening at 1400*******")
})