var express = require('express');
const UserData = require('../modules/userDataSchema');
var router = express.Router();
require('../modules/userDataSchema')

router.post('/post', async (req, res, next) => {
  try{
    const userdata = new UserData(req.body)
    await userdata.save()
    console.log(userdata);
    res.json({
      success:true,
      userId:userdata._id
    })
  }catch(e){return e;}
});

module.exports = router;
