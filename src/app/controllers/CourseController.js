const Course = require('../models/Course');
const {mongooseToObject} = require('../../util/mongoose');
class CourseController{
    //[GET] /course/:slug
    show(req, res,next){
        Course.findOne({slug:req.params.slug})
            .then(course =>{
                res.render('courses/show',{
                    course: mongooseToObject(course)
                })
            })
            .catch(next)

    }
    //[GET] /course/create

    create(req, res,next){
        // Course.findOne({slug:req.params.slug})
        //     .then(course =>{
        //         res.render('courses/show',{
        //             course: mongooseToObject(course)
        //         })
        //     })
        //     .catch(next)
        res.render('courses/create');
    }
    //[POST] /course/store
    store(req, res,next){
        res.json(req.body);
    }


}

module.exports = new CourseController();

