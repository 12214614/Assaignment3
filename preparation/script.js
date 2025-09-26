let count = 5
console.log(count)
// we can write code in single line but we have to use semi-ContentVisibilityAutoStateChangeEvent;
// it is not mandatory to use semicoluns;
// var , let = muttable
// const = imutable

// DATA TYPES:
let abc = 52
console.log(abc)
console.log(typeof(abc))
// IF i want to rabc turn into STRING
abc = String(abc)
console.log(typeof(abc))
// OPERATORS:
let a = 1
let b = 4
let c =(a+=b) 
console.log(c)
console.log(a==b)
console.log(a!=b)
// logical operators::
let d = true;
let e = true
console.log(d && e )
console.log(!a)
// post increment::
let f = 1

console.log(f++)
console.log(f)
let g =1
console.log(++g)
//  If elif else conitions:

// if(f == g){
//     console.log("f == g")
// }
// else{
//     console.log("f ! = g")
// }

if(f != g){
    console.log("f == g")
}
else if(f > g) {
    console.log("f!= g")
}
else if(f&&g || g&&f){
console.log("logical operator")
}
else{
    console.log("thaNK YOU")
}
// Trinary operator::
(f==g)? console.log("True") : console.log("False")
// Switch case::
const tej = 90;
switch(tej){
    case 50 :
        console.log("50")
        break
    case 60:
        console.log("60")
        break
    case 70:
        console.log("70")
        break
    case 90:
        console.log("80")
        break
    default:
        console.log("JUST IT S A NUMBER")

}
// Loops::
let i;
for(i = 1;i<=10;i++){
    console.log("Teja",i)
}
// While Loop::
let j = 0;
while(j<=10){
    console.log("Ram",j);
    j++;
}
// do-while loop
let k = 0;
do{
    console.log("rajani",k);
    k++;
}while(k<=5);
// skiping::
// continue and break 
//  continue : skip one item
// break : skip entire after that
// let z = Document.getElementById("guests1")
// let count1  = 0;
// function increment5(){
// console.log(count1+=1)
// let y = (z.innerText = count1)
// }
// increment5()
// Array
let arr  = ['teja' , 1 , function dia(){ console.log('this duplicate')}, {name : 'hi', class : 'k22ur'}]
console.log(arr.length)
console.log(arr[3])
let studentarr = arr
console.log(studentarr)
studentarr[0] = 'bye'
console.log(studentarr)
// console.log(arr) here nothing change when we did copy also
console.log(arr.indexOf('bye'))
console.log(arr.includes(1))
arr.push("laptop")
console.log(arr)
arr.unshift('lpu')
console.log(
    arr
)
arr.pop(1)
console.log()
// prep 
let resut = 1 ;

for(let i = 1; i<=5; i++ ){
resut = resut * i
console.log(resut)
}
//recu
// function factorial(n){
//     return (n * factorial(n-1))
// }
// console.log(factorial(5))
// functions::
let bk;
function grab(r){
     bk = r + 1
    console.log(bk)

}
grab(2)
console.log(bk)
//  fun using return

// function lpu(uk , vj){
//     let gh = uk + vj
//     return gh


// }
// anynomous function:

console.log(anynomus(11 , 7))

function anynomus(kkr , csk){
    const rcb = kkr + csk
    return rcb
}
console.log(anynomus(1 , 7))

// here were we want we can using function name. but in anynomous it can't
let lpu1 = function (kkr , csk){
    const rcb = kkr + csk
    return rcb
}
console.log(lpu1(1 , 7))
console.log(lpu1(11 , 7))
// // Arrow function here no need to write function names also 
let greet = (omi)=>{
    return ("og" + omi)
}
console.log(greet(2))
let rec = 0;

let sup = function(){
    
    rec = rec + 1
    return rec
}
console.log(rec , sup() ,rec)
// here u have to observe rec showing how many different cases.


// // time period implementing a that particular time
setTimeout(function(){
    console.log( ("excute after 3sec"))
},3000)
