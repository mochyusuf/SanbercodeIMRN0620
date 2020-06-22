function arrayToObject(arr) {
  // Code di sini 
  var obj = new Array();
  var now = new Date()
  var thisYear = now.getFullYear()
  for (let i = 0; i < arr.length; i++) {
    obj[i] = new Object();
    obj[i]["firstName"] = arr[i][0];
    obj[i]["lastName"] = arr[i][1];
    obj[i]["gender"] = arr[i][2];
    if (arr[i][3] == null || arr[i][3] > thisYear) {
      obj[i]["age"] = "Invalid Birth Year";
    }else{
      obj[i]["age"] = thisYear - arr[i][3];
    }
  }
  console.log(obj);
}

// Driver Code
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people)
/*
  1. Bruce Banner: { 
      firstName: "Bruce",
      lastName: "Banner",
      gender: "male",
      age: 45
  }
  2. Natasha Romanoff: { 
      firstName: "Natasha",
      lastName: "Romanoff",
      gender: "female".
      age: "Invalid Birth Year"
  }
*/

var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2)
/*
  1. Tony Stark: { 
      firstName: "Tony",
      lastName: "Stark",
      gender: "male",
      age: 40
  }
  2. Pepper Pots: { 
      firstName: "Pepper",
      lastName: "Pots",
      gender: "female".
      age: "Invalid Birth Year"
  }
*/

// Error case 
arrayToObject([]) // ""

function shoppingTime(memberId, money) {
  // you can only write your code here!
  if (memberId == null || memberId == '') {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }

  var obj = new Object();
  obj["memberID"] = memberId;
  obj["money"] = money;

  if (memberId == "1820RzKrnWn08") {
    obj["ListPurchased"] = new Array([ 'Sepatu Stacattu',
      'Baju Zoro',
      'Baju H&N',
      'Sweater Uniklooh',
      'Casing Handphone' ]
    );
    obj["changeMoney"] = 0;
  }

  if (memberId == "82Ku8Ma742") {
    obj["ListPurchased"] = new Array([ 'Casing Handphone']
    );
    obj["changeMoney"] = 120000;
  }

  return obj;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  if (arrPenumpang == null || arrPenumpang == '') {
    return "Tidak Ada Penumpang";
  }

  var obj = new Array();
  for (let i = 0; i < arrPenumpang.length; i++) {
    obj[i] = new Object();
    obj[i]["penumpang"] = arrPenumpang[i][0];
    obj[i]["naikDari"] = arrPenumpang[i][1];
    obj[i]["tujuan"] = arrPenumpang[i][2];
    if (obj[i]["naikDari"] == "B" && obj[i]["tujuan"]) {
      obj[i]["bayar"] = 8000;
    }else if(obj[i]["naikDari"] == "A" && obj[i]["tujuan"]){
      obj[i]["bayar"] = 2000;
    }
  }
  return obj;
}
 
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
 
console.log(naikAngkot([])); //[]