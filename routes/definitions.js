var express = require('express');
var router = express.Router();
var Definition = require('../models/Definitions.js');

router.get('/', function (req, res, next) {
  // res.send('Express REST API');
  Definition.find(function (err, definitions) {
    if (err) { res.send(err); }
    res.send(definitions);
  });

});

router.get('/:id', function (req, res, next) {
  Definition.findOne({ _id: req.params.id }, function (err, result) {
    if (err) throw err;
    res.json(result)
  });
})
/* SAVE User */
router.post('/', function (req, res, next) {

  var definition = new Definition();

  definition.french = req.body.french;
  definition.japanese = req.body.japanese;
  definition.definition = req.body.definition;
  definition.isPublished = req.body.isPublished;

  // Save the definition to the database
  // If we don't get any errors respond with a success message
  definition.save(function (err, definitionresponse) {

    if (err) {
      res.send(err);
    }

    res.json(definitionresponse);
  });
});


router.post('/update', function (req, res) {
  console.log(req.body)
  Definition.findOneAndUpdate({ _id: req.body._id },
    {
      $set: {
        french: req.body.french,
        japanese: req.body.japanese,
        definition: req.body.definition,
        isPublished: req.body.isPublished
      }
    },
    function (err, result) {
      if (err) throw err;
      res.json(result)
    }
  )
})
/*
// When we make a DELETE request we want to 
// remove the user with the specified id, if 
// there are no errors we'll again respond 
// with a success message
*/
router.delete('/:_id', function (req, res) {
  Definition.remove({ _id: req.params._id }, function (err, user) {
    if (err) { res.send(err); }

    res.json({ message: 'Successfully removed!' });
  });
})

module.exports = router;