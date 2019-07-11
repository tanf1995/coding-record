const Koa = require('koa');
const app = new Koa();


// set app
app.context.name = 'tf';


// middleware
// logger
app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
    ctx.throw(400, 'name required', {user: 'user'});
})

// x-response-time
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
})


app.use(async ctx => {
    // console.log(ctx.req);
    ctx.body = 'Hello World';
})

// error handler
app.on('error', err => {
    console.error('err: ' + err);
})

app.listen(3000, () => console.log('server is listen on port 3000'));