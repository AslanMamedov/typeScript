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
function g(a, b) {
    if (typeof a === 'number') {
        return a + b;
    }
    else {
        return `${a}${b}`;
    }
}
console.log(g(1, 2));
console.log(g('a', 's'));
//! REST
function restOperation(id, ...rest) {
    console.log(id, rest);
}
restOperation('1994', { name: 'Aslan' }, 1);
//~ ?
function isNumberType(a, b, c) {
    const d = a + b;
    c?.(d);
    return d;
}
let resultIsNumberType = isNumberType(10, 3);
let resultIsNumberTypeWithFn = isNumberType(10, 3, d => console.log(`Result ${d}`));
function sumArray(a) {
    let d = 0;
    for (const b of a) {
        d += b?.cost ?? 0;
    }
    return d;
}
let resultSumArray = sumArray([null, {
        cost: 10
    }, undefined, { cost: 20 }, null, { cost: 30 }, undefined]);
console.log(resultSumArray);
