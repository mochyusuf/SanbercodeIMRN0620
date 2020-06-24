// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Tulis code untuk memanggil function readBooks di sini
readBooks(10000, books[0], function(check) {
  if(check) {
    console.log("Saya telah membaca buku")
  } else {
    console.log("Saya sedang membaca buku")
  }
})