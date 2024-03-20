const express=require("express")
const morgan=require("morgan")
const tourRouter=require("./routes/tourRoute.js")

const app = express();

//middleware 
app.use(express.json());  
app.use(morgan('dev'));
app.use((req,res,next)=>{
    res.append("Server-time",new Date().toISOString());
    next();
})

app.use("/api/v1/tours",tourRouter);

module.exports=app;

