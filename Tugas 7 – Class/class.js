class Animal {
  // Code class di sini
  constructor(name) {
    this.name = name
    this.legs = 4
    this.cold_blooded = false
  }
}

var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// Code class Ape dan class Frog di sini
class Ape extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
  }
  yell() {
    console.log("Auooo");
  }
}

class Frog extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
  }
  jump() {
    console.log("hop hop");
  }
}
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

class Clock {
  // Code di sini
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  };

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  };
}

var clock = new Clock({template: 'h:m:s'});
clock.start();  