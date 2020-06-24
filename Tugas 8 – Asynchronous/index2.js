var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
function readBook() {
  readBooksPromise(5000,books[0])
      .then(function (fulfilled) {
        console.log("Saya telah membaca buku");
      })
      .catch(function (error) {
          console.log(error.message);
      });
}

readBook() 