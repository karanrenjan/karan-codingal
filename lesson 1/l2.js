const person = {
    name: "karan,"
    greet() {
        console.log("Hello my name is " + this.name);
    },
};
person.name;
person.greet();

class Animal {
     constructor(name) {
        this.name = name;
     }
     speak () {
        console.log('$.{this.name'} makes a sound .`);
              }
