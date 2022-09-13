"use strict";
//! keyof - Возвращает ключи типов
const names = 'age';
var Color;
(function (Color) {
    Color["white"] = "#fff";
    Color["black"] = "#000";
})(Color || (Color = {}));
const inferArray = ['Something', 1, false];
const somePersonForInfer = {
    name: 'Aslan',
    age: 28,
};
class AnimalCat {
    say() {
        return 'meow';
    }
}
class AnimalDog {
    say() {
        return 'woof';
    }
}
function createObjectAnimal(classType) {
    return new classType();
}
const petCat = createObjectAnimal(AnimalCat);
const petDog = createObjectAnimal(AnimalDog);
//~ ??
let isA = null;
isA = undefined;
isA = 50;
let isB = isA ?? 100;
function calcTotalWeight(listProduct) {
    let totalWeight = 0;
    for (const product of listProduct) {
        totalWeight += product.weight;
    }
    return totalWeight;
}
const totalWeight = calcTotalWeight([
    {
        name: 'Tomato',
        weight: 1,
    },
    {
        name: 'Potato',
        weight: 2,
    },
]);
let numberOne = null;
setTimeout(() => {
    numberOne = 10;
}, 500);
setTimeout(() => {
    // const numberTwo: number = numberOne //~ Error
    const numberTwo = numberOne;
    console.log(numberTwo);
}, 1000);
// let text: string //~ Error
let text;
console.log(text);
//~ Пользовательские проверки
class FrontendDeveloper {
    constructor() {
        this.isCreateRestApi = false;
    }
}
class BackendDeveloper {
    constructor() {
        this.isCreateRestApi = true;
    }
    createRestApi() { }
}
function isBackendDeveloper(developer) {
    return developer.isCreateRestApi;
}
function writeCode(developer) {
    if (isBackendDeveloper(developer)) {
        developer.createRestApi();
    }
}
