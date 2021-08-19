const express = require('express');
const router = express.Router();

router.get('/instagram-marketing', (req, res) => {
    res.status(200).render('./blogs/insta')
})

router.get('/facebook-marketing', (req, res) => {
    res.status(200).render('./blogs/facebook')
})

router.get('/youtube-marketing', (req, res) => {
    res.status(200).render('./blogs/youtube')
})

router.get('/email-marketing', (req, res) => {
    res.status(200).render('./blogs/email')
})

module.exports = router;