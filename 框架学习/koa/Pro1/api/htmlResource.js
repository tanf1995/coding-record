const fs = require('fs');
const path = require("path");


const htmlResource = router => {
    router.get("*", async ctx => {
        try{
            const html = await fs.readFileSync(path.resolve(process.cwd(), "html/index.html"));
            ctx.set("Content-Type", "text/html");
            ctx.body = html;
        }catch(err){
            ctx.response.status = 500;
            ctx.body = "unKnow Error!"
        }
    })
}

module.exports = htmlResource;