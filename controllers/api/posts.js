const Post = require('../../models/post');

module.exports = {
  create,
  deletePost,
  updatePost,
  getAll,
  show
};

async function create(req,res) {
  const post = await Post(req.body).populate("user");
  post.save();
  res.json(post);
}

async function deletePost(req,res) {
   const deletedPost = await Post.findByIdAndDelete(req.params.id).populate("user");
  res.json(deletedPost);
}


async function updatePost(req,res) {
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new:true}).populate("user");
  res.json(updatedPost);
}





async function getAll(req, res) {
  const posts = await Post.find({}).populate("user").sort("-updatedAt").exec();
  console.log("posts", posts);
  res.json(posts);

}

async function show(req, res) {
  const post = await Post.findById(req.params.id).populate("user");
  res.json(post);
}
