"use strict";
//!- Utility - Для преобразование базовых типо
//~ Readonly - Создает тип который все свойства будут предназначенный для чтения
const readOnlyUser = {
    name: 'Aslan',
    age: 28,
};
const requiredUserWithout = {}; // Not Error
const page = {
    home: { title: 'home' },
    about: { title: 'about' },
    contact: { title: 'contact' },
};
const todo = {
    title: 'Learn TypeScript',
    completed: true,
};
const todoOmit = {
    title: 'Learn TypeScript',
    description: 'I learned TypeScript',
};
// type T14 = ReturnType<string>; // Error
// type T14 = ReturnType<Function>; // Error
//~ InstanceType<T> - Создаем тип из типов экземпляра функции конструктора
class C {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
const partialPersonOne = {};
const partialPersonTwo = {
    name: 'Aslan',
    isMarried: false,
};
//~ Parameters - Получает тип кортежа аргументов функции
function parametersUtility(name, age) { }
//~ ConstructorParameters - Позволяет получить тип данныз из аргументов конструктора
class ConstructorParametersType {
    constructor(name, age, isMarried, year) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
        this.year = year;
    }
}
const articleOne = { title: 'ARTICLE', page: 1 };
const articleOneAsConst = { title: 'ARTICLE', page: 1 };
const articleOneAsConstGeneric = { title: 'ARTICLE', page: 1 };
const articleArrayOne = [
    {
        title: 'Article Array 2',
        page: 2,
    },
    {
        title: 'Article Array 3',
        page: 3,
    },
    {
        title: 'Article Array 4',
        page: 4,
    },
];
articleArrayOne.push({
    title: 'Article Array 5',
    page: 5,
});
const articleArrayTwo = [
    {
        title: 'Article Array 6',
        page: 6,
    },
];
const articleArrayThree = [
    {
        title: 'Article Array 7',
        page: 7,
    },
];
function readOnlyArrayFnOne(arr) { }
function readOnlyArrayFnTwo(arr) { }
//~ Parameters
function FnOne(a, b) {
    return a.length > b.toString().length;
}
class ClassOne {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}
