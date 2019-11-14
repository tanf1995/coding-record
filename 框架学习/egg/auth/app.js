class AppBootHook{
  constructor(app){
    this.app = app;
  }

  async didReady(){
    // console.log("config will load!");
    // this.app.once('server', server => {
    //   console.clear();
    // })
  }
}

module.exports = AppBootHook;