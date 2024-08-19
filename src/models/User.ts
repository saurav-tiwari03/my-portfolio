import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  username:{
    type:String,
    required:true,
    unique:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  },
  role:{
    type:String,
    enum:['admin', 'user'],
    default:'user',
  },
  otp:{
    type:Number,
    default:null,
  }
})

const User = mongoose.models.user || mongoose.model('User',userSchema);

export default User;