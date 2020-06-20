/*
  A. Balik String (10 poin)
    Diketahui sebuah function balikString yang menerima satu buah parameter berupa tipe data string. Function balikString akan mengembalikan sebuah string baru yang merupakan string kebalikan dari parameter yang diberikan. contoh: balikString("Javascript") akan me-return string "tpircsavaJ", balikString("satu") akan me-return string "utas", dst.

    NB: TIDAK DIPERBOLEHKAN menggunakan built-in function Javascript seperti .split(), .join(), .reverse() . 
    Hanya boleh gunakan looping. 

  B. Palindrome (10 poin)
    Buatlah sebuah function dengan nama palindrome() yang menerima sebuah parameter berupa String. 
    Function tersebut mengecek apakah string tersebut merupakan sebuah palindrome atau bukan. 
    Palindrome yaitu sebuah kata atau kalimat yang jika dibalik akan memberikan kata atau kalimat yang sama. 
    Function akan me-return tipe data boolean:  true jika string merupakan palindrome, dan false jika string bukan palindrome. 

  
    NB: TIDAK DIPERBOLEHKAN menggunakan built-in function Javascript seperti .split(), .join(), .reverse() . 
    Hanya boleh gunakan looping. 
  
  C. Bandingkan Angka (10 poin)
    Buatlah sebuah function dengan nama bandingkan() yang menerima sebuah parameter berupa number 
    dan bilangan asli (positif). Jika salah satu atau kedua paramater merupakan bilangan negatif 
    maka function akan mereturn -1. Function tersebut membandingkan kedua parameter 
    dan mereturn angka yang lebih besar di antara keduanya. Jika kedua parameter sama besar 
    maka function akan mereturn nilai -1. 
    
*/

function balikString(str) {
  // Silakan tulis code kamu di sini
  var reverse = '';
  for(let i = 1;i <= str.length; i++){
    reverse = reverse + str.charAt(str.length - i);
  }
  return reverse;
}

function palindrome(str) {
  // Silakan tulis code kamu di sini
  var reverse = '';
  for(let i = 1;i <= str.length; i++){
    reverse = reverse + str.charAt(str.length - i);
  }
  if (str == reverse) {
    return true;
  }else{
    return false;
  }
}

function bandingkan(num1, num2) {
  // code di sini
  if(num1 < 0 || num2 < 0){
    return -1;
  }else if(num1 == num2){
    return -1;
  }else if(num1 > num2){
    return num1;
  }else if(num1 < num2){
    return num2;
  }else{
    return -1;
  }
}

// TEST CASES BalikString

console.log(balikString("abcde")) // edcba
console.log(balikString("rusak")) // kasur
console.log(balikString("racecar")) // racecar
console.log(balikString("haji")) // ijah

// TEST CASES Palindrome
console.log(palindrome("kasur rusak")) // true
console.log(palindrome("haji ijah")) // true
console.log(palindrome("nabasan")) // false
console.log(palindrome("nababan")) // true
console.log(palindrome("jakarta")) // false

// TEST CASES Bandingkan Angka
console.log(bandingkan(10, 15)); // 15
console.log(bandingkan(12, 12)); // -1
console.log(bandingkan(-1, 10)); // -1 
console.log(bandingkan(112, 121));// 121
console.log(bandingkan(1)); // 1
console.log(bandingkan()); // -1
console.log(bandingkan("15", "18")) // 18
