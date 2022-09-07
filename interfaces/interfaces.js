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
