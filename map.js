// create a new array from calling a function for 
// every array element

// const a=[{"name":"pavani","catagoy":"it","start":1990,"end":2002} ,   
//         {"name":"lakitha","catagoy":"software","start":1990,"end":2003}]
//     var p=a.map(function(names));

let a=[1,2,3,4,5,6]
var b=a.map(function(elements){
    return elements*2;

});
console.log(b)