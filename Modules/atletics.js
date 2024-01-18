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

---------------------------------------------------------------------------------------------------------------------------

// Direct Import -> Certainly! In a direct import, you import the entire module or file without specifying individual exports.

        // yourFileName.js
        
        export function relay() {
          console.log(`This is relay function`);
        }
        
        export function longJump() {
          console.log(`This is longJump function`);
        }
        
        export var abc = "pooja";


        // Another file where you want to import
        
        import * as myModule from './yourFileName';
        
        // Using the imported functions and variable
        myModule.relay(); // This is the relay function
        myModule.longJump(); // This is longJump function
        console.log(myModule.abc); // pooja



//    Named Import  - Used to select the specific exports from a module or library instead of importing entire module.
        // Another file where you want to import
        
        import { relay, longJump, abc } from './yourFileName';
        
        // Using the imported functions and variable
        relay(); // This is the relay function
        longJump(); // This is longJump function
        console.log(abc); // pooja
