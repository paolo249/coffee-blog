const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

router.get('/', itemsCtrl.getAll);
router.post('/items', itemsCtrl.create);
router.delete('/:id', itemsCtrl.deletePost);
router.put('/:id', itemsCtrl.updatePost);

// router.get('/:id', itemsCtrl.show);



module.exports = router;
