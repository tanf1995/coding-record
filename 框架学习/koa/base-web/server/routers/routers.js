const Router = require('koa-router');


// home
let home = new Router();

home.get('/', require('../middlewares/home.js'));


// 404
let not_found = new Router();

not_found.get('/', require('../middlewares/notFound.js'));


let router = new Router();

router.use('/', home.routes(), home.allowedMethods());
router.use('/404', not_found.routes(), not_found.allowedMethods());

module.exports = router;