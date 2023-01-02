class User { }

const newUser = new User();

// const david = new user();
 // this
class user {
  constructor (name) {
     this. name = name;
  }
  //metodos
  speak() {
     return 'Hello';
  }
  greeting() {
     return `${this.speakO} ${this.name}`;
  }
}

const ana = new user ('Ana');
console.log (ana.greeting());
