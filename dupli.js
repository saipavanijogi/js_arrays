
const a=[1,2,5,2,1,8];
let b=[];
var len=a.length;
a.sort();
let t;
for(let i=0; i<len; i++){
    if(a[i]!==t){
        b.push(a[i]);
        t=a[i];
    }
}
console.log(b); 

