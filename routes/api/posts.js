const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

router.get('/', postsCtrl.getAll);
router.post('/', postsCtrl.create);
router.delete('/:id', postsCtrl.deletePost);
router.put('/:id', postsCtrl.updatePost);




module.exports = router;
