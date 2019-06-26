const Koa = require('koa');


const app = new Koa();


let router = require('./routers/routers.js');
app.use(router.routes()).use(router.allowedMethods());


app.listen(3000, () => {
    console.log('server is starting at port 3000');
});