/*
5 data Type vardır. 
Srting-Numbers - TRUE/FALSE  - Null -- undefined
*/

var firstName="Tarık"
let lastName="Yiğit"
var age=21
var isHeStudent=false
let studentNumber=null
var stSaveYear=undefined


console.log(firstName,lastName,age,isHeStudent,studentNumber,stSaveYear)

// Concatination: String Birleştirme

var message='Yeni Kullanici Bilgileri \nİsim: ' +firstName+"\nSoyisim:  " +lastName+"\nYas:  " +age
console.log(message)
console.log (" ===========================================")

//Interpolation: deyim içi eklemek
var message2= `Yeni Kullanıcı Bilgileri \nİsim: ${firstName} \nSoyisim: ${lastName} \nYas: ${age}`
console.log(message2)




