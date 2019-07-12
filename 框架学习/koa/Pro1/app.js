const Koa = require('koa');
const app = new Koa();
const routesHandler = require('./routes');


// middleware
// router
routesHandler(app);


//listen
app.listen(3000, () => console.log("server is running in port 3000"));