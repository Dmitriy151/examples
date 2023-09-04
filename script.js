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
olga.addScore(11);

olga.calculateAverage();

const summStep= (n, itemsPerStep, onload)=>{
  const size=Math.ceil(n/itemsPerStep);//количество шагов

let index = 0;//текущий шаг
let summ = 0;//результат суммирования
  return()=> {
    if(index === size){
      onload(summ);
      return;
    }

    const start = index * itemsPerStep;
    const end =Math.min(n+1, (index + 1) * itemsPerStep);

    for (let i = start; i < end; i++){
      summ += i;
start     
    }
    console.log(`Шаг:${index}, ${summ}`);
    index++;
    sheduleStep();
  }
}

const onload=(summ)=> console.log(summ);
const step=summStep(100000,25000,onload);
const sheduleStep=()=> setTimeout(step,100);

sheduleStep();

let xhr=new XMLHttpRequest();
function processFinish(){
	console.log(xhr.responseText);
}

xhr.onload=processFinish;
xhr.open("GET", "https://www.cbr-xml-daily.ru/daily_json.js");
xhr.send();

// const computer= {
// 	text:'результат',sum(a,b) {
// 		this.text+=a+b;
// 		return a+b;
// 	}
// }

function cachedDecorated(func) {
	let cache={};
	return (...args)
	hash
}