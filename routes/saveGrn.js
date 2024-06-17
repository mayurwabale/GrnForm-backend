var express = require('express');
var router = express.Router();

/* save GRN form details */
router.post('/save-Grn', (req, res) => {
  try {
    const reqBody = req.body;
    if (!reqBody[0].selectedCompany ||
      !reqBody[0].selectedStore || !reqBody[0].datePicker) {
      throw new console.error(`Company, store, and Date is required`);
    }
    console.log(200);
    res.status(200).json('Data saved Successfully');
  } catch (error) {
    throw new Error(`Error received during save-grn API call ${error}`)
  }

});

module.exports = router;
