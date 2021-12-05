const Item = require('../../models/item');

module.exports = {
  create,
  deletePost,
  getAll,
  show
};

async function create(req,res) {
  const item = await Item(req.body);
  item.save();
  res.json(item);
}

async function deletePost(req,res) {
   await Item.findByIdAndDelete(req.params.id);
  //  await Item.deleteOne(req.body._id);
  // res.json(item);
  // console.log(Item.find({}));
  res.json({message: "Post successfully deleted"});
}


async function getAll(req, res) {
  const items = await Item.find({});
  // re-sort based upon the sortOrder of the categories
  console.log(items);
  res.json(items);

}

async function show(req, res) {
  const item = await Item.findById(req.params.id);
  res.json(item);
}
