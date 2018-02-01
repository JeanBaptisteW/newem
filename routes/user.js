var express = require('express');
var router = express.Router();
var cors = require('cors');

var config = require('../config');
var app = express();
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

router.use(cors());
var rand, host, mailOptions;
app.set('superSecret', config.secret); // secret variable


router.post('/authenticate', function (req, res) {
    console.log(req.body)
    if (req.body.username == 'admin' && req.body.password == 'admin') {
        const payload = {
            _id: req.body.username
        };
        var token = jwt.sign(payload, app.get('superSecret'), {
            expiresIn: 1440 // expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
            success: true,
            token: token
        });
    } else {
        res.json({
            success: false
        });
    }
});
// route middleware to verify a token
router.use(function (req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
});

// router.get('/', function (req, res, next) {
//     // res.send('Express REST API');
//     User.find(function (err, users) {
//         if (err) { res.send(err); }

//         res.json(users);
//     });

// });

module.exports = router;