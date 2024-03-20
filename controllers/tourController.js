
const Tour=require("../models/tourModel");

module.exports.getTours =async (req, res)=> {
   
  const {_id,...body}=req.body;
  try{
    const newTour=await Tour.find();
    res.status(200);
    res.send({
      status: 'success',
      results:newTour.length,
      body:{
        tours:newTour
      }
    })
  }
  catch(err){
    res.status(500);
    res.send({
      status: 'fail',
      message:err.message
    })
  }
}

module.exports.getTour= async (req,res)=>{
    const paramId = req.params.id;
    
    try{
      const newTour=await Tour.findOne({
        "_id":paramId
      })
      if(!newTour) throw new Error("There is no tour with the provided id.")
      res.status(200);
      res.send({
        status: 'success',
        body:{
          tours:newTour
        }
      })
    }
    catch(err){
      res.status(404);
      res.send({
        status: 'fail',
        message:err.message
      })
    }
      
    
}
   
module.exports.createTour =async (req, res)=> {
  const {_id,...body}=req.body;
  try{
    const newTour=await Tour.create(
      body
    )
    res.status(201);
    res.send({
      status: 'success',
      body:{
        tours:newTour
      }
    })
  }
  catch(err){
    res.status(404);
    res.send({
      status: 'fail',
      message:err.message
    })
  }
    
}

module.exports.updateTour =async (req,res)=>{
  const {_id,...body}=req.body;
  const paramId=req.params.id;
  try{
    const newTour=await Tour.findOneAndUpdate({
      "_id":paramId
    },body,{new:true})
    if(!newTour) throw new Error("Invalid Id")
    res.status(201);
    res.send({
      status: 'success',
      body:{
        tours:newTour
      }
    })
  }
  catch(err){
    res.status(404);
    res.send({
      status: 'fail',
      message:err.message
    })
  }
    
      
}
  

module.exports.replaceTour =async (req,res)=>{
  const {_id,...body}=req.body;
  const paramId=req.params.id;
  try{
    const newTour=await Tour.findOneAndReplace({
      "_id":paramId
    },body,{new:true})
    if(!newTour) throw new Error("Invalid Id")
    res.status(201);
    res.send({
      status: 'success',
      body:{
        tours:newTour
      }
    })
  }
  catch(err){
    res.status(404);
    res.send({
      status: 'fail',
      message:err.message
    })
  }
      
  }
    

module.exports.deleteTour=async (req,res)=>{
 
  const {_id,...body}=req.body;
  const paramId=req.params.id;
  try{
    const newTour=await Tour.findOneAndDelete({
      "_id":paramId
    })
    if(!newTour) throw new Error("Invalid Id")
    res.status(204);
    res.send({
      status: 'success',
      body:{
        tours:newTour
      }
    })
  }
  catch(err){
    res.status(404);
    res.send({
      status: 'fail',
      message:err.message
    })
  }
    
}





