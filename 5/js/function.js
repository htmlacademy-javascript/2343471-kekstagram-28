// Cтрока короче 20 символов
//имяФункции('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
//имяФункции('проверяемая строка', 18); // true
// Строка длиннее 10 символов
//имяФункции('проверяемая строка', 10); // false

/*
const isCheck =(string, length) => {
return string.length <= length;
}
*/

const isStringLess = (string, length) => {
if (string.length <= length) {
return true;
} else
return false;
}
isStringLess('проверяемая строка', 20);

// Строка является палиндромом
//имяФункции('топот'); // true
// Несмотря на разный регистр, тоже палиндром
//имяФункции('ДовОд'); // true
// Это не палиндром
//имяФункции('Кекс');  // false

const isPalindrom = (string) => {
const tempString = string.toLowercase();
let reverseString ='';
for(let i = tempString.length - 1;i >= 0; i--) {
reverseString += tempString.at(i);
}
console.log(reverseString);
return tempString === reverseString;
}
const result=isPalindrom('');

// Это палиндром
//имяФункции('Лёша на полке клопа нашёл '); // true

const extractNumber = (string) => {
let result = '';
for (let i=0; i<spring.length; i++) {
  if(!Number.isNaN(parseInt(string.at(i), 10))) {
  }
}
return parseInt(result, 10);
}

//имяФункции('2023 год');            // 2023
//имяФункции('ECMAScript 2022');     // 2022
//имяФункции('1 кефир, 0.5 батона'); // 105
//имяФункции('агент 007');           // 7
//имяФункции('а я томат');           // NaN

const myPadStart = (string, minLength, pad) => {
let result = string;
while (result.length < minLength) {
const newResultLength = result.length + pad.length;
const actualPad = newResultLength <=minLength ? pad : pad.slice(0, minLength - newResultLength);
result = actualPad + result;
}
return result;
}

/*
Добавочный символ использован один раз
имяФункции('1', 2, '0');      // '01'
 Добавочный символ использован три раза
имяФункции('1', 4, '0');      // '0001'
 Добавочные символы обрезаны с конца
имяФункции('q', 4, 'werty');  // 'werq'
 Добавочные символы использованы полтора раза
имяФункции('q', 4, 'we');     // 'wweq'
Добавочные символы не использованы, исходная строка не изменена
имяФункции('qwerty', 4, '0'); // 'qwerty'//
*/
