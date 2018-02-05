var express = require('express');
var router = express.Router();
var Definition = require('../models/Definitions.js');

router.get('/', function(req, res, next) {
  // res.send('Express REST API');
  Definition.find(function(err, definitions){
    if (err){ res.send(err); }
     console.log(definitions)
    res.send(definitions);
  });

});

/* SAVE User */
router.post('/', function(req, res, next) {
  res.send(req.body);
  host=req.get('host');
  var definition = new Definition();

  definition.french=req.body.french;
  definition.japanese= req.body.japanese;
  definition.definition=  req.body.definition;
  definition.isPublished = req.body.isPublished;

  // Save the definition to the database
  // If we don't get any errors respond with a success message
  definition.save(function(err, definitionresponse){
    
          if (err) { res.send(err); 
           }
 
          //  res.json(definitionresponse);
  });
});

/*
// When we make a DELETE request we want to 
// remove the user with the specified id, if 
// there are no errors we'll again respond 
// with a success message
*/
// router.delete('/:user_id',function(req, res){
//   User.remove({_id:req.params.user_id}, function(err, user){
//       if (err){ res.send(err); }

//       res.json({ message: 'Successfully removed!' });
//   });
// })

module.exports = router;