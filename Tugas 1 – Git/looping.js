console.log('LOOPING PERTAMA '); 
var i = 2;
while(i <= 20) { 
  console.log(i + ' - I love coding'); 
  i = i + 2;
}

console.log('LOOPING KEDUA '); 
var i = 20;
while(i >= 2) { 
  console.log(i + ' - I will become a mobile developer'); 
  i = i - 2;
}

for(var i = 1; i <= 20; i++) {
  if ((i % 3) == 0 && (i % 2) == 1) {
    console.log(i + ' - I Love Coding'); 
  } else if((i % 2) == 0){
    console.log(i + ' - Berkualitas'); 
  }else if((i % 2) == 1){
    console.log(i + ' - Santai'); 
  }
}

for (let i = 0; i < 4; i++) {
  var str = '';
  for (let j = 0; j < 8; j++) {
    str = str + '#';
  }
  console.log(str);
}

for (let i = 0; i < 7; i++) {
  var str = '';
  for (let j = 0; j < (i + 1); j++) {
    str = str + '#';
  }
  console.log(str);
}

for (let i = 0; i < 7; i++) {
  var str = '';
  for (let j = 0; j < (i + 1); j++) {
    str = str + '#';
  }
  console.log(str);
}

for (let i = 0; i < 8; i++) {
  var str = '';
  for (let j = 0; j < 8; j++) {
    if (((j + i) % 2) == 1) {
      str = str + '#';
    }else{
      str = str + ' ';
    }
  }
  console.log(str);
}