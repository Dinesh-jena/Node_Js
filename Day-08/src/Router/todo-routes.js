const express = require('express');
const router = express.Router();
const todoCreate = require('../controller/todo-controller');

router.post('/',todoCreate.start)
router.post('/create',todoCreate.todoCreate);
router.get('/find',todoCreate.todoFind);
router.get('/findById/:id',todoCreate.todoFindById);
router.get('/DeleteById/:id',todoCreate.todoDeleteById);
router.put('/PutById/:id',todoCreate.todoPutById);
router.patch('/PatchById/:id',todoCreate.todoPatchById);


module.exports = router;

