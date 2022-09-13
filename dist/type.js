"use strict";
//! type - для того что бы задавать свои типы
const someTypes = 'Aslan_1994';
const someNumberForTheType = 11000111;
let someId = 1;
someId = '1';
function string(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}
function setColorType(type) { }
setColorType('succes');
setColorType('danger');
setColorType('warning');
const newUserType = {
    name: 'Aslan',
    age: 28,
    isMarried: false,
};
const oldUserType = {
    name: 'Aslan',
    age: 30,
    isMarried: true,
    year: 1994,
};
const typeUser = {
    name: 'Aslan',
    age: 28,
    isMarried: false,
    year: 1994,
};
const typeUserEight = {
    name: 'Aslan',
    age: 28,
    year: 1994,
    isMarried: false,
    city: 'Baku',
};
const apiError = JSON.parse(JSON.stringify('[]'));
const formatedMessage = apiError.map((e) => e.toUpperCase());
//~ const ❗
const userConstOne = {
    name: 'Aslan',
    age: 28,
};
const userConstTwo = {
    name: 'Aslan',
    age: 28,
};
const months = ['January', 'February', 'Martch'];
for (let month of months) {
}
function isSuccessType(typeIs) {
    if (typeIs.response === 'Success') {
        return true;
    }
    else {
        return false;
    }
}
function isErrorType(typeIs) {
    if (typeIs.response === 'Error') {
        return true;
    }
    else {
        return false;
    }
}
function isResponseDataType(data) {
    if (isSuccessType(data)) {
        return data.data;
    }
    else {
        return data.errorMessage;
    }
}
//~ IsSuccess
console.log(isSuccessType({ response: 'Success', data: { name: 'Aslan', age: 28, isMarried: false } })); // true
console.log(isSuccessType({ response: 'Error', errorMessage: { message: 'Something was wrong' } })); // false
//~ IsError
console.log(isErrorType({ response: 'Success', data: { name: 'Aslan', age: 28, isMarried: false } })); // true
console.log(isErrorType({ response: 'Error', errorMessage: { message: 'Something was wrong' } })); // false
//~ isResponseData
console.log(isResponseDataType({ response: 'Success', data: { name: 'Aslan', age: 28, isMarried: false } }));
console.log(isResponseDataType({ response: 'Error', errorMessage: { message: 'Something was wrong' } }));
