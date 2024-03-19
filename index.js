function receivesAFunction(callback) {
    callback()
}
function returnsANamedFunction() {
    return function named() {
        console.log("The boy is Ted")
    }
}
function returnsAnAnonymousFunction() {
    return function(){
        console.log("The boy has no name")
    }
}