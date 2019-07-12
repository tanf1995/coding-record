const user = router => {
    router.get('/user', async ctx => {
        ctx.body = "user"
    })
}

module.exports = user;