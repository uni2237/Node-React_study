const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true, //공백 없애줌
        unique:1
    },
    password:{
        type:String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },

    role:{
        type:Number,
        default:0
    },
    image: String,
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    }
})

const User=mongoose.model('User',userSchema)
module.exports={User} //User를 다른 코드에서도 쓸 수 있도록 module을 export함