const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    return res.send(Object.values(req.context.models.cards));
});

module.exports = router;