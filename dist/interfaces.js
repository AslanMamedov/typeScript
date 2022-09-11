"use strict";
//! Interface - Нужны для определение типов у обьектов или классов или даже у функции
const user = {
    id: 1,
    age: 28,
    name: 'Aslan',
    year: 1994,
    sayHi(words) {
        return `Hello ${words}`;
    },
    city: {
        name: 'Baku',
    },
    country: ['Azerbaijan'],
    count: function () {
        console.log(1 + 2);
    },
    isMarried: false,
};
user.count();
//~ as
const newUser = {
    id: 2,
    age: 28,
    name: 'Aslan',
    year: 1994,
    sayHi(words) {
        return `Hello ${words}`;
    },
    city: {
        name: 'Baku',
    },
    country: ['Azerbaijan'],
    count: function () {
        console.log(1 + 2);
    },
    isMarried: false,
};
//~ Для того что бы мы могли создать пустой обьект но с ключи и значения будут заданны по позже 
const assertionTypeOne = {};
const assertionTypeTwo = {};
assertionTypeOne.name = 'Aslan';
assertionTypeOne.age = 28;
const personAs = {
    name: 'Aslan',
    age: 28
};
const keysOne = Object.keys(personAs);
const keysTwo = Object.keys(personAs);
keysOne.forEach(key => {
    personAs[key];
});
//~ Generic
const someUser = {
    id: 3,
    age: 28,
    name: 'Aslan',
    year: 1994,
    sayHi(words) {
        return `Hello ${words}`;
    },
    city: {
        name: 'Baku',
    },
    country: ['Azerbaijan'],
    count: function () {
        console.log(1 + 2);
    },
    isMarried: false,
};
const someInterfaceWithType = {
    gender: 'man',
    age: 28,
    city: "Baku",
    id: 1994,
    name: "Aslan"
};
const someUserExtends = {
    id: 1,
    name: 'Aslan',
    age: 28,
    country: 'Azerbaijan',
    sity: 'Baku',
    year: 1994,
};
const some = {
    name: 'Aslan',
    age: 28,
};
const dynamicKey = {
    name: 'Aslan',
    age: 28,
    year: 1994
};
