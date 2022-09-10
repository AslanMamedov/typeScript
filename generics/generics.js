"use strict";
//! Generic - Это аргументы для типов
const arrayOfNumber = [1, 2];
function reverse(array) {
    return array.reverse();
}
reverse(arrayOfNumber);
const someGeneric = (data) => data;
someGeneric(10.092022).toFixed(2);
someGeneric('SomeString').length;
//! extends - Означает что он будет по умолчанию того типо которую мы передадим 
//~ Несколько Generic
const generic = (a, b, c) => `${a}${b}${c}`;
console.log(generic(1, '2', false));
