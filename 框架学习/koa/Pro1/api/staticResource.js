const fs = require('fs');
const path = require("path");
const getMime = require('../util/mime');


const staticResource = router => {
    router.get("/static/*", async ctx => {
        const resource = await fs.readFileSync(path.join(process.cwd(), "html", ctx.path));
        let suffix = ctx.path.split(".").slice(-1)[0];
        ctx.set("Content-Type", getMime(suffix));
        ctx.body = resource;
    })
}

module.exports = staticResource;