"use strict";
//! type - для того что бы задавать свои типы
const someTypes = 'Aslan_1994';
const someNumberForTheType = 11000111;
let someId = 1;
someId = '1';
//! Guards
function string(x) {
    if (typeof x === "number") {
        return x.toFixed(2);
    }
    return x.trim();
}
function setColorType(type) {
}
setColorType('succes');
setColorType("danger");
setColorType("warning");
