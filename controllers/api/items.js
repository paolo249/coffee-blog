const Item = require('../../models/item');

module.exports = {
  create,
  deletePost,
  updatePost,
  getAll,
  show
};

async function create(req,res) {
  const item = await Item(req.body);
  item.save();
  res.json(item);
}

async function deletePost(req,res) {
   const deletedItem = await Item.findByIdAndDelete(req.params.id);
  res.json(deletedItem);
}


async function updatePost(req,res) {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body);
  // console.log("updatedItembyController", updatedItem);
  res.json(updatedItem);
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
