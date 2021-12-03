const Item = require('../../models/item');

module.exports = {
  create,
  index,
  show
};

async function create(req,res) {
  const item = await Item(req.body);
  item.save();
  res.json(item);
}

async function index(req, res) {
  const items = await Item.find({}).sort('name').exec();
  // re-sort based upon the sortOrder of the categories
  // items.sort((a, b) => a.name.sortOrder - b.name.sortOrder);
  res.json(items);
}

async function show(req, res) {
  const item = await Item.findById(req.params.id);
  res.json(item);
}
