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