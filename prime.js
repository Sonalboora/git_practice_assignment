let n=13;
let p=0
for(let i=1;i<n.length;i--){
if(n%i==0){
p++;
}
}
if(p==2){
console.log("prime")
}
else{
console.log("not a prime")
}