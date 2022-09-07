"use strict";
//! Function - void, never, or some Type - Если функция ничего не возвращает то это void, если же функция что то возвращает то мы указываем тип которую она вернет, но если же функция будет работать бесконечно раз или вовзращать ощибку то never
//~ void
function typeScript(name, age) {
    const someText = `Name: ${name} Age:${age}`;
    console.log(someText);
}
typeScript('Aslan', 28);
//~ type
const someType = (someNumber) => {
    return someNumber;
};
console.log(someType(1994));
//~ never
const someError = () => {
    throw new Error('Something was wrong');
};
console.log(someError());
function myPosition(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() };
    }
    return { x: a, y: b };
}
console.log('Empty', myPosition());
console.log('One params', myPosition(42));
console.log('Two params', myPosition(41, 1));
