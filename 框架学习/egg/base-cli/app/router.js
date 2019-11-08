module.exports = app => {
    const {router, controller} = app;

    router.get('/', controller.home.index);
    router.get('/login', controller.auth.login);
    router.get('/csrf-test', controller.csrfTest.index);
    router.get('/quick-transfer', controller.csrfTest.quickTransfer);
    router.get('/adv', controller.csrfTest.adv);
    router.post('/transfer-accounts', controller.csrfTest.transfer);
}