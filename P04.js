var person={
    firstName: "Murat",
    lastName: "Yiğit",
    age:20,
    isHeStudent:true,

}

console.log("=========================================")
console.log(person)
console.log("=========================================")
console.log("İsin: " +person.firstName)
console.log("Soyisim: " +person.lastName)
console.log("Yaş: " +person.age)
console.log(`Öğrenci mi: " ${person.isHeStudent}`)

var myİnfo={}

console.log(myİnfo)
myİnfo.firstName="Furkan"
myİnfo.lastName="Hatapoğlu"
myİnfo.age=18.5
console.log(myİnfo)

delete myİnfo.age
console.log(myİnfo)

var okul={
    isim:"Mest okulları",
    siniflar:{
        lise:{sinifad:"9A",sinifad2:"9B"}
    }
}

console.log(okul.isim)
console.log(okul.siniflar.sinifad2)
delete okul.siniflar.sinifad2
