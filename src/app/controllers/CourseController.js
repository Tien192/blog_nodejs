const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class CourseController{
    //[GET] /course/:slug
    show(req, res){
        res.send('Courese Detail');
    }

}

module.exports = new CourseController;

