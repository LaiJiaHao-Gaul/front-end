// options : {
//     type: 'van' / 'suv' / 'sedan' / 'coupe' / 'wagon',
//         //面包车 / 小型越野车/ 轿车  /  运动车型 / 旅行车
//     passengersNumber:0,
//     time:'now',
// }
function car(options) {
    function call() {
        console.log(options.type+' is called')
    }
    function Van() {
        // console.log('new Van')
    }
    function Suv() {
        // console.log('new Suv')
    }
    function Sedan() {
        // console.log('new Sedan')
    }
    function Coupe() {
        // console.log('new Coupe')
    }
    function Wagon() {
        // console.log('new Wagon')
    }

    if (options.type === 'van') {
        var thisCar = new Van()
        console.log(call())
    }
    if (options.type === 'suv') {
        var thisCar = new Suv()
        console.log(call())
    }
    if (options.type === 'sedan') {
        var thisCar = new Sedan()
        console.log(call())
    }
    if (options.type === 'coupe') {
        var thisCar = new Coupe()
        console.log(call())
    }
    if (options.type === 'wagon') {
        var thisCar = new Wagon()
        console.log(call())
    }

}
car({
    type: 'van',
})