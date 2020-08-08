// Dependencies
const router = require('express').Router();

// Crud book
router.get('/articles', require('@handler/article/get'));
router.get('/articles/:id', require('@handler/article/get-one'));
router.post('/articles', require('@handler/article/create'));
router.put('/articles/:id', require('@handler/article/update'));
router.delete('/articles/:id', require('@handler/article/destroy'));


module.exports = router;