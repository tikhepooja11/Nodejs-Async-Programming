function relay(){
    console.log(`This is relay function`);
}

// const relayConstant = function relay(){
//     console.log(`This is relay function`);
// }
function longJump(){
    console.log(`This is longJump function`);
}

var abc = "pooja"; 
// module.exports.relay = relay;
// module.exports.longJump = longJump;
// module.exports.abc = abc or we can give any other name like - module.exports.variable_Name = abc;
//but every time for exporting each and every module is not feasible instead we can do this
module.exports = {
    relay: function(){
        console.log(`This is the relay function`);
    },
    longJump: function(){
        console.log(`This is longJump function`);
    }, abc
}
// module.exports.relayConstant = relayConstant;