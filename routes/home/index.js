const express = require('express');
const router = express.Router();
const fs = require('fs');
const Upload = require('../../models/Upload');
const{ isEmpty, uploadDir } = require('../../helpers/upload-helper');

router.get('/', (req, res)=>{
    Upload.find({})
      .then(uploads=>{
        res.send(uploads);
      });
  });

router.post("/create", (req, res) => {
  let filename = "";
  if (!isEmpty(req.files)) {
    let file = req.files.file;
    filename = Date.now() + "-" + file.name;
    file.mv(`${__dirname}/../../public/uploads/${filename}`, err => {
      if (err) throw err;
    });
  } else {
    console.log("empty upload space");
  }
  console.log(req.files);
  const newUpload = new Upload({
    date: {
        type: Date,
        default: Date.now()
    },
    description: req.body.description,
    title: req.body.title,
    file: filename
  });
  newUpload
    .save()
    .then(savedUpload => {
      console.log(savedUpload);
    })
    .catch(error => {
      console.log(error, "could not save the upload");
    });
});

router.get('/edit/:id', (req, res)=>{
    Upload.findOne({_id: req.params.id})
      .then(upload=>{
        res.send(uploads);
      });
  });



module.exports = router;
