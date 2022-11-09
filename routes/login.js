var express = require('express');
var UserDetails = require('../modules/userDataSchema');
var router = express.Router();

router.post('/login', async (req, res, next) => {
  try {
    var loginCd = await UserDetails.findOne({ Email: req.body.Email, Password:req.body.Password })
    console.log(loginCd);
    if (loginCd) {
      if ( loginCd.Email == req.body.Email) {
        res.json({
          data:loginCd
        })
      } else {
        res.json({
          data: 301
        })
      }
    } else {
      res.json({
        data:101
      })
    }
  } catch (err) { console.log(err); }
});

module.exports = router;