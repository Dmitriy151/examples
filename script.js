 const names= ['Денис','Егор','Пётер','Иван','Олег'];
undefined
let searchName='Егор';
undefined
for (let name of names) {
    if (name===searchName) {
        console.log(name);
        break;
    }
}

names.indexOf(searchName);
names.indexOf('');
console.log(names.indexOf(''));
console.log(names.indexOf(searchName));

if (names.indexOf('Денис')==!1) {
  console.log('нашли элемент');
}

if (names.includes('Денис')) {
  console.log('нашли Дениса');
}

const employees=[
  {name:'Мария',department:'IT',salary:'75000'},
  {name:'Иван',department:'Продажи',salary:'55000'},
  {name:'Николай',department:'it',salary:'92000'},
  {name:'Мария',department:'Маркетинг',salary:'45000'},
]

let salarys=[];

for(let employee of employees){
  salarys.push(employee.salary);
}

salarys;
console.log(salarys);

employees.map(employee=> employees.salary);

console.log(employees.map(employee=> employees.salary));

console.log(employees.map(employee=> employees.salary*2));





class BMW {
	constructor(name, color){
		this.carName = name;
		this.color = color;
	}
}

let garage = [
	new BMW("ласточка", "синий"),
	new BMW("принцесса", "белый")
];

let oleg = {
	name: "Олег",
	lastName: "Петров",
	gender: "мужчина",
	type: "человек",
	age: 15,
}

let ivan = {
	name: "Иван",
	lastName: "Иванов",
	gender: "мужчина",
	type: "человек",
	age: 20,
}

let nikita = {
	name: "Никита",
	lastName: "Романов",
	gender: "мужчина",
	type: "человек",
}

class Human{
	constructor(name, lastName, gender, type, age = 0){
		this.name = name;
		this.lastName = lastName;
		this.gender = "мужчина";
	  this.type = "человек";
		this.age = age;
	}
}

let persons = [
	new Human("Олег", "Петров", 15),
	new Human("Иван", "Иванов", 20),
	new Human("Никита", "Романов"),
  new Human("Лев", "Толстой", "мужчина","человек",25),
]

let methodName = 'calculateAverage';
class Sportsman{
	constructor(){
		this.scores = [];
	}

	addScore(score){
		this.scores.push(score);
	}

	['calculate'+'Average'](){
		if(this.scores.length === 0){
			return 0;
		}

		let summ = 0;
		for (let i = 0; i < this.scores.length; i++) {
			summ += this.scores[i];			
		}
		return summ / this.scores.length;
	}
}

let olga = new Sportsman();
olga.addScore(9);
olga.addScore(10);
olga.addScore(10);
console.log(olga.calculateAverage());



// function init() {
//   let userName='Олег';
// function showGreeting(name) {
//   console.log(`Привет ${name}`);
// }
// showGreeting(userName);
// }
// init();

try {
  console.log('какая-нибудь строка'); 
} catch (error) {
  console.log(error);
}

try {
  setTimeout(() => {
    throw new Error('ошибка');
  }, 5000); 
} catch (error) {
  console.log(error);
}

setTimeout(() => {
  console.log('мы внутри колбека');
  try {
      console.log('мы внутри конструкции try');
      throw new Error('ошибка');
  } catch (error) {
    console.log('мы внутри блока catch');
    console.log(error);
  }
}, 5000);

// function showGreeting () {
//   console.log('Привет пользователь');
// } 

// for(let i; i<10; i++){
//   const currentDate= new Date();
//   setTimeout(()=> {
//     const now=new Date();
//     console.log(now-currentDate);
//   },2000)
// }

// function doAsyncAction(){
//   const currentDate= new Date();
//   setTimeout(()=> {
//     const now=new Date();
//     console.log(now-currentDate);
//   },1000)
// } 

// function sum() {
//   let sum=0;
//   for (let i = 0; i <=10000000; i++) {
//   sum+=i;
  
//   }
//   return sum;
// }

// for(let i=0; i<10;i++){
//   doAsyncAction();
//   sum();
// }