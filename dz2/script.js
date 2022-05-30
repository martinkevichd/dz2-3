////////task1

let name=prompt('Введите ваше имя'),
    age=prompt('Введите возраст'),
    city=prompt('Введите ваш город'),
    company=prompt('Введите компанию'),
    phone=prompt('Введите телефон'),
    email=prompt('Ввседите email');

alert('Меня зовут '+ name + ' Мне ' + age + 'лет ' + ' Я проживаю в городе ' + city + ' и работаю в компании ' + company + ' Мои контактные данные: ' + phone + ',' + email);


///////task 2

let year= 2022-age;
alert(year);

//////task 3

let str=prompt('Введите строку, состоящую из 6 цифр');
let num="";

for(let i=0;i<str.length;i++) {
    if(str[i]==' ') i++;
    else 
    {(num+=str[i]);
        i++;
    }
}

if(Number(num[0])+Number(num[1])+Number(num[2])== Number(num[3])+Number(num[4])+Number(num[5]))
{
    alert('да');
}
else alert('нет');


////////task4
let c=0;
if(c>0) console.log('Верно');
else console.log('Неверно');

c=1;
if(c>0) console.log('Верно');
else console.log('Неверно');

c=-3;
if(c>0) console.log('Верно');
else console.log('Неверно');

////////task5

let a=10, b=2;
let sum=a+b;

console.log(sum);

let diff=a-b;

console.log(diff);

let multipl=a*b;

console.log(multipl);

let division=a/b;
console.log(division);

if (sum>1) console.log(sum*sum);

///////task 6

if (a>2 && a<11 || b==6 && b<14) console.log('Верно');
else console.log('Неверно');

//////task 7 

let n=prompt('Введите число от 0 до 59');

if(n<0 || n>59) alert('Введите корректное число');
else {
    if (n>0 && n<=15) alert ('Первая четверть часа');
    else if (n>15 && n<=30) alert ('Вторая четверть часа');
    else if (n>30 && n<=45) alert ('Третья четверть часа');
    else alert('Четвертая часть часа');
}


///////task8

let day=prompt('Введите число от 1 до 31');
if(day<1 || day>31) alert('Введите корректное число');
else {
    if (day>=1 && day<=10) alert ('Первая декада месяца');
    else if (day>=11 && day<=20) alert ('Вторая декада месяца');
    else alert('Третья декада месяца');
}

///////task9

let amount_day =prompt ('Введите количество дней (в года)');
let years=amount_day/365;

if(Number.isInteger(years))alert('Целое');
else alert('Меньше года');

let amount_month =prompt ('Введите количество дней (в месяцы)');
let month=amount_month/31;

if(Number.isInteger(month))alert('Целое');
else alert('Меньше месяца');

let amount_weeks =prompt ('Введите количество дней (в недели)');
let week=amount_weeks/7;

if(Number.isInteger(week))alert('Целое');
else alert('Меньше недели');


//////task 10 
let m;
let days=prompt('Ввседите день (1-365)');
if (days>=1 && days<=31) {
    m=1;
    alert('Январь');
}
else if(days>31 && days <=59){
    m=1;
    alert('Февраль');
}
else if( days>59 && days<=90) {
    m=2;
    alert('Март');
}
else if(days>90 && days <=120){
    m=2;
    alert('Апрель');
}
else if(days>120 && days <=151) {
    m=2;
    alert('Май');
}
else if(days>151 && days <=181) {
    m=3;
    alert('Июнь');
}
else if(days>181 && days<=212) {
    m=3;
    alert('Июль');
}
else if (days>212 && days<=243){
    m=3;
    alert('Август');
}
else if (days>243 && days<=273){
    m=4;
    alert('Сентябрь');
}
else if(days>273 && days<=304) {
    m=4;
    alert('Октябрь');
}
else if(days>304 && days<=334) {
    m=4;
    alert('Ноябрь');
}
else if(days>334 && days<=365){
    m=1;
    alert('Декабрь');
}

switch(m){
    case 1: 
        alert('Зима');
        break;
    case 2:
        alert('Весна');
        break;
    case 3:
        alert('Лето');
        break;
    case 4:
        alert('Осень');
        break;
}