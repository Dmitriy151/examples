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

class Sportsmen{
  constructor(){
    this.scores=[];
  }


addScore (score){
  this.scores.push(score);
}

calculateAverage(){
  if(this.scores.lenth===0){
    return 0;
  }


let sum=0;
for (let i = 0; i < this.scores.length; i++) {
  const element = array[i];
  sum+=this.scores[i];

    }
  return sum/this.scores.length; 
  }
}