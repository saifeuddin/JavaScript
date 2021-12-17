export let message = "ES6 Modules";



export function user() {
    console.log("Hello EveryOne");
}



export class test {
    constructor(){
        console.log("CONSTRUCTOR : Test");
    }
}



export default function(){
    console.log("hello");
}









        // Export with shortcut
// exports { message, user, test } ;