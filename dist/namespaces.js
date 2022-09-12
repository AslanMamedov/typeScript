"use strict";
//! Namepece - Инкапсилирует все в нее добавленные сущности создовая свою пространство имен к которому можно обратиться
//~ Для того что бы мы могли обратиться к значенимя мы используюем export
var Utils;
(function (Utils) {
    Utils.SECRET = 'NameSpace';
    Utils.PI = 3.14;
    const getPass = (name, age) => ` $ { name } $ { age } `;
    const isEmpty = (data) => !data;
})(Utils || (Utils = {}));
const someNameSpace = Utils.SECRET;
console.log(someNameSpace);
//! Для импорта в другой файл нам нужно использовать /// <reference path="namespace.ts" />
var UtilsWityExportFn;
(function (UtilsWityExportFn) {
    function log(text, color, fontSize) {
        if (fontSize) {
            console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}px`);
        }
        else {
            console.log(`%c${text}`, `color: ${color}`);
        }
    }
    UtilsWityExportFn.log = log;
    log('Текст внутри', '#d9534f', 40);
})(UtilsWityExportFn || (UtilsWityExportFn = {}));
UtilsWityExportFn.log('Текст снаружи', '#8534d');
//~ Можно разделять пространствой имен
var UserNameSpace;
(function (UserNameSpace) {
    class User {
        constructor(name = '', age = 0) {
            this.name = name;
            this.age = 0;
            this.name = name;
            this.age = age;
        }
    }
    UserNameSpace.User = User;
})(UserNameSpace || (UserNameSpace = {}));
(function (UserNameSpace) {
    class Person extends UserNameSpace.User {
        constructor(name = '', age = 0, isMarried = false) {
            super(name, age);
            this.isMarried = isMarried;
            this.isMarried = isMarried;
        }
        sayHi() {
            console.log('Hi');
        }
    }
    UserNameSpace.Person = Person;
})(UserNameSpace || (UserNameSpace = {}));
const userNameSpace = new UserNameSpace.Person();
console.log(userNameSpace);
userNameSpace.sayHi();
//~ Внутри namespace - может находиться также namespace
var Pets;
(function (Pets) {
    let Animals;
    (function (Animals) {
        Animals.cat = 'Cat';
        Animals.dog = 'Dog';
    })(Animals = Pets.Animals || (Pets.Animals = {}));
})(Pets || (Pets = {}));
const animalCat = Pets.Animals.cat;
const animaldog = Pets.Animals.dog;
console.log(animalCat);
console.log(animaldog);
