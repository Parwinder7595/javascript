const name ="Parwinder"
const repoCount = 23

//console.log(name + repoCount);

console.log('Hello my name is ${name} and my repo count is ${repoCount} ');

const gameName = new String('Parwinder')

console.log(gameName[2]);
console.log(gameName.__proto__);
console.log(gameName.slice(-7,-3));

const qaz ="    Gurdeep     "
console.log(qaz);
console.log(qaz.trim());

const url = "https://parwinder.com/parwinder%20parwinder"
console.log(url.replace('%20' , '-'))