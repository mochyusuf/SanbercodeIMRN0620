function teriak(){
  return "Halo Sanbers!"
}

console.log(teriak()) // "Halo Sanbers!" 

var num1 = 12
var num2 = 4

function kalikan(num1, num2){
  return num1 * num2;
}

var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48

var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "Gaming"
 
function introduce(name,age,address,hobby){
  return "Nama saya "+name+", umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hobby+"!"
}

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogyakarta, dan saya punya hobby yaitu Gaming!" 