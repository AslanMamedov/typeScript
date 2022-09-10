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
// type T17 = InstanceType<string> // any
// type T18 = InstanceType<Function> // Error
