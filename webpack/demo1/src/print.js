async function printMe(){
    const _ =await import(/* webpackChunkName: "lodash" */ 'lodash');

    console.log(_.join(["hello", "web"], " "));
}

export default printMe;