/* let bf = new Buffer(3);
console.log(bf); */

let bf = new Buffer('gao', 'utf-8');
console.log(bf); 

setTimeout(function (){
  console.log(2)
},1);

console.log(1)

setTimeout(function (){
  console.log(3)
},0);