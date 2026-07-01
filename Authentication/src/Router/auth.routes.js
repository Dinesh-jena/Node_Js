const express = require('express');
const router = express.Router();
const authController= require('../controller/auth.conteroller');
const auth = require('../middleware/auth.middleware');

router.post('/register',authController.userRegister);
router.post('/login',auth,authController.userLogin);    
router.get("/:id/orders", (req, res) => {

    res.send(`Orders of User ${req.params.id}`);

});


module.exports=router;