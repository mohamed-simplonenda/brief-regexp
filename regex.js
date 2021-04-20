// // ex1
function myFun(){
    let str= "bonjour toutlemonde!"
    let patt= /[ ,]/g;
  
        console.log(patt.test(str))
}
myFun()
// ex 2
function voy(){
    let countVowels= "Celebration"
    let patt1=/[aeioyu]/g;
    let res =countVowels.match(patt1)
    let long =res.length
    console.log(long)
   
}
voy()
// // ex 3
function voy1(){
    let countVowels1= "Celebration"
    let patt2=/[aeioyu]/g;
    let res1 =countVowels1.match(patt2)
    console.log(countVowels1.replace(patt2,'#'))
}
voy1()
// ex4
function op(){
    let count= "15/4"
    let test=/^[0-99][+,-,/,*][0-99]$/
    let res1 =test.test(count)
    console.log(res1)
    
}
op()


// ex 5

function comp(){
    let count1= "account"
    let test=/^[a]{1,15}[a-zA-Z]{0,15}[c]{1,15}[a-zA-Z]{0,15}$/
    let res2 =test.test(count1)
    console.log(res2)
    
}
comp()


// ex 6
function digit(){
    let count2= "123456"
    let test=/^[0-9]{5}$/
    let res3 =test.test(count2)
    console.log(res3)
    
}
digit()



