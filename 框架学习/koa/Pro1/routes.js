const Router = require('koa-router');
const router = new Router();
const htmlResource = require('./api/htmlResource');
const staticResource = require('./api/staticResource');
const user = require('./api/user');

// routes
user(router);
staticResource(router);
htmlResource(router);

const routesHandler = app => {
    app
        .use(router.routes())
        .use(router.allowedMethods())
}

module.exports = routesHandler;