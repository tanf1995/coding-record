const fs = require('fs');

module.exports = async function(ctx){
    console.log(ctx.query);
    console.log(ctx.querystring);
    console.log(ctx.params);
    ctx.body = "home page!";
}