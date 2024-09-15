import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
  },
  content:{
    type:String,
    required:true,
  },
  likes:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
  }],
  comments:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Comment',
  }]
})

const Blog = mongoose.models.blog || mongoose.model('blog',blogSchema);

export default Blog;