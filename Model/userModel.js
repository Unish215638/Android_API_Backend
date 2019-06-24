const mongoose = require('mongoose');

const jwt=require("jsonwebtoken");

const userSchema=new mongoose.Schema( {
     name:{
         type:String
     },

        username: {
            type: String
        },
       email:{
        type: String
       },
        password:{
        type:String
        },
        tokens:[{
            token:{
                type:String,
                required:true,
            }
           
        }]

})
// userSchema.statics.myFirst= function(){
//     console.log("This is my First schema")
// }
// userSchema.statics.myFirst= function(user,pass){
    
//     if (user=='admin'&& pass=='1234'){
//         console.log('welcome')
//     }
//     else{
//         console.log('invalid')
//     }
// }



userSchema.methods.generateAuthToken = async function () {   
      const user = this 
      const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse')    
      ///  console.log(token);  
           user.tokens = user.tokens.concat({ token :token }) 
            await user.save() 
 
return token
 }


userSchema.statics.checkCrediantialsDb = async (userName, passWord) =>{

     const user1 = await User.findOne({username : userName, password : passWord})
     return user1;
    }

  

const User = mongoose.model('User', userSchema)

module.exports = User;