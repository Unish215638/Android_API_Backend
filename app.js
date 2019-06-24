require('./Connection/Connection');
const userModel=require('./Model/userModel')
const middleware=require('./middleware/middleware');
const jwt=require("jsonwebtoken");
const auth=require('./middleware/auth');

const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
// const path = require('path');  
// const multer = require('multer') 

const app=express();
app.use(cors());
app.use(express.json());

app.use(bodyparser.urlencoded({ extended: false }))



app.post("/adduser",function(req,res){
    // console.log("this is post request");
    console.log(req.body);
    var userData = new userModel(req.body); 
    userData.save().then(function(){
        res.json('User has been Added');         
    }).catch(function(e){res.send(e) });
})


//  login
app.post('/login', async function(req, res){

    const user=req.body.username;// user
    const password=req.body.password; // pw
    // console.log(user);
    // console.log(password);
     const user1 = await userModel.checkCrediantialsDb(user,password);
     const token = await  user1.generateAuthToken();
     res.json({token});
         
           console.log("en");
           console.log(token);
        //res.send(user)
    
    })

// app.post('/login',function(req,res){
//     console.log(req.body);

//     var uname=req.body.username;
//     var pass=req.body.password;
    
//     userModel.find({'username':uname, 'password':pass}).count(function(err,number){
//         if(number!=0){
//             res.statusCode=200;
//             res.setHeader('Content-Type','application/json');
//             res.json('Login successfull');
        
//         }
//         else{
//             res.send('username and password mismatch');
//             console.log('Username and password mismatch');
//         } 
//     })
// })

// var storage = multer.diskStorage(  
//      {destination: "images", filename: (req, file, callback) =>  
//       {      let ext = path.extname(file.originalname);            
//          callback(null, file.fieldname + "-" + Date.now() + ext);       
//             }});                     
//              var imageFileFilter = (req, file, cb) => {if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/))             
//                  {return cb(newError("You can upload only image files!"), false);  }           
//                       cb(null, true);};                                
//                       var upload = multer({ storage: storage,             
//                                fileFilter: imageFileFilter,                
//                                  limits: { fileSize: 1000000            
//                                       }}); 
                                      
                                      
//                                       app.post('/upload', upload.single('ImageUpload'), (req, res) => {  
                                          
//                                           res.json(req.file.filename) }) 


//         app.post("/additem",function(req,res){
//     // console.log("this is post request");
//     console.log(req.body);
//     var itemData = new itemModel(req.body); 
//     itemData.save().then(function(){
//         res.json('Item has been Added');         
//     }).catch(function(e){res.send(e) });
// })
// app.use("/images",express.static("images"));

// app.get("/showitems",function(req,res){
//     itemModel.find().then(function(itemModel){
//         res.json(itemModel);
//     }).catch(function(e){
//         res.send(e);
//     })
//  })

     app.listen(8090);