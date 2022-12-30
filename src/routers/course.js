const express = require('express');
const router = express.Router();

const courseControllers = require('..\\app\\controllers\\CourseController');

// newsControllers.index

router.get('/:slug',courseControllers.show);




module.exports = router;