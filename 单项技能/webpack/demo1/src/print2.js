async function printBye(){
    const _ =await import(/* webpackChunkName: "lodash" */ 'lodash');

    console.log(_.join(["goodbye", "web"], " "));
}

export default printBye;