const express = require("express");
const router = express.Router();
const {createCollege} =require('../controller/collegeController')
const {createIntern, getInternship}=require('../controller/internController')



//this is the project about internship

router.post('/functionup/colleges',createCollege)

router.post('/functionup/interns', createIntern)

router.get('/functionup/collegeDetails', getIntership)

module.exports = router;
