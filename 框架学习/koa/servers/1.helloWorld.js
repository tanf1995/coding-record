const Koa = require('koa');
const app = new Koa();


// set app
app.context.name = 'tf';


// middleware
// logger
app.use(async (ctx, next) => {
    console.log("step 0")
    await next();
    console.log('step 4');
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
    // throw new Error("a unknow error");
})

// x-response-time
app.use(async (ctx, next) => {
    const start = Date.now();
    console.log('step 1');
    await next();
    console.log('step 3');
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
})


app.use(async ctx => {
    console.log('step 2');
    console.log(ctx.name);
    ctx.body = 'Hello World';
})

// error handler
app.on('error', err => {
    console.error('err: ' + err);
})

app.listen(3000, () => console.log('server is listen on port 3000'));