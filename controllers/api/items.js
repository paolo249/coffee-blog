const Item = require('../../models/item');

module.exports = {
  create,
  getAll,
  show
};

async function create(req,res) {
  const item = await Item(req.body);
  item.save();
  res.json(item);
}

async function getAll(req, res) {
  const items = await Item.find({}).exec();
  // re-sort based upon the sortOrder of the categories
  console.log(items);
  res.json(items);

}

async function show(req, res) {
  const item = await Item.findById(req.params.id);
  res.json(item);
}
