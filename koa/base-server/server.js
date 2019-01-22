const Koa = require('koa');
const app = new Koa();



app.use(async (ctx, next) => {
    ctx.throw(400, "not found");
    await next();
    console.log('step 1');
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    console.log('step 2');
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(async ctx => {
    ctx.body = 'Hello world';
    console.log('step 3');
});



app.listen(3000);