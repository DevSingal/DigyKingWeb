const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
    res.status(200).render('./services/products')
})

module.exports = router;