"use strict";
const express = require('express'),
      router = express.Router(),
      multer = require('multer'),
      upload = multer({ dest: 'uploads/' });

router.use(express.static('./public'));

router.post('/get-file-size', upload.single('file'), function(req, res) {
  res.json({ size: req.file.size });
});

module.exports = router;
