var nama = "John"
var peran = ""

if ( nama == '' && peran == '' ) {
  console.log("Nama harus diisi!")
}else if( nama == 'John' && peran == '' ){
  console.log("Halo John, Pilih peranmu untuk memulai game!")
}else if( nama == 'Jane' && peran == 'Penyihir' ){
  console.log("Selamat datang di Dunia Werewolf, Jane \n Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!")
}else if( nama == 'Jenita' && peran == 'Guard' ){
  console.log("Selamat datang di Dunia Werewolf, Jenita \n Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf.")
}else if( nama == 'Junaedi' && peran == 'Werewolf' ){
  console.log("Selamat datang di Dunia Werewolf, Junaedi \n Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!")
}

var hari = 21; 
var bulan = 1; 
var tahun = 1945;
//  Maka hasil yang akan tampil di console adalah: '21 Januari 1945'; 

var tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

if (tanggal < 1 || tanggal > 31) {
  console.log('Tanggal Salah');
  tanggal = 0;
}else if (bulan < 1 || bulan > 12) {
  console.log('Bulan Salah');
  bulan = 0;
}else if(tahun < 1900 || tahun > 2200){
  console.log('Tahun Salah');
  tahun = 0;
}else{
  tanggal = hari;
  switch (bulan) {
    case 1:
      bulan = 'Januari'
      break;
    case 2:
      bulan = 'Februari'
      break;
    case 3:
      bulan = 'Maret'
      break;
    case 4:
      bulan = 'April'
      break;
    case 5:
      bulan = 'Mei'
      break;
    case 6:
      bulan = 'Juni'
      break;
    case 7:
      bulan = 'Juli'
      break;
    case 8:
      bulan = 'Agustus'
      break;
    case 9:
      bulan = 'September'
      break;
    case 10:
      bulan = 'Oktober'
      break;
    case 11:
      bulan = 'November'
      break;
    case 12:
      bulan = 'Desember'
      break;
    default:
      break;
  }
  console.log(tanggal + " " + bulan + " " + tahun);
}

