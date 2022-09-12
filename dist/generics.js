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
const personState = {
    name: 'Aslan',
    age: 28,
};
const userState = {
    name: 'Aslan',
};
const stateThree = 'Aslan';
class StateFour {
    constructor(name) {
        this.name = name;
    }
}
const newStateFour = new StateFour('Aslan');
function myFnType(One, Two) {
    return Number(One) + Number(Two);
}
const myFnCount = myFnType(1, 2);
console.log(myFnCount);
function merge(o1, o2) {
    return { ...o1, ...o2 };
}
const r1 = merge({ a: 1 }, { b: 2 });
const r2 = merge({ a: 1, c: ' lol ' }, { b: 2 });
async function fakeRequest() {
    return 1;
}
const b = fakeRequest();
function getKey(obj, value) {
    const key = Object.keys(obj).find((k) => obj[k] === value);
    return key || null;
}
const key = getKey({
    name: 'Aslan',
}, 'Aslan');
function pathField(obj, field, value) { }
pathField({ name: 'Aslan' }, 'name', 'Aslan');
//~ Default value of Generic
function defaultValue(name) {
    return name;
}
const defaultValueType = defaultValue('Aslan');
function fillArray(len, element) {
    return new Array(len).fill(element);
}
const fillArrayType = fillArray(9, '8');
console.log(fillArrayType);
const someThing = 'Hello world';
const someTypeIsNumber = 1;
const typeArrayIs = ['Hello'];
const someFnType = (name, age) => {
    return [
        {
            name,
            age,
        },
    ];
};
const value = someFnType("Aslan", 28);
console.log(value);
