const newRouter = require('./news');
const courseRouter = require('./course');
const siteRouter = require('./site');

function route(app){
    app.use('/news', newRouter);
    app.use('/course', courseRouter);
    app.use('/', siteRouter);

}

module.exports = route;