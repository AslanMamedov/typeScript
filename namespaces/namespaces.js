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
