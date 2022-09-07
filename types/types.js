"use strict";
//! Примитивные типы в typescript
const isNumber = 1; //! 1 1.1 3e9 1_000_111 NaN
const isBoolean = false; //! true
const isString = 'SomeString'; //! `SomeString`, "SomeString"
const isNull = null;
const isUndefined = undefined;
const isSymbol = Symbol('symbol');
const isBigIng = 1n; //! 1n 1_000n
//! Object - Обьект
const isObject = {
    name: 'Aslan',
    age: 28,
    year: 1994,
    isMarried: false,
};
//! Так задается тип для обьектов
const isObjectType = {
    name: 'Aslan',
    age: 28,
    year: 1994,
    isMarried: false,
};
//! Array - Массив
const arrayIsNumber = [1, 2, NaN, 3e9];
const arrayIsNumberGeneric = [1, 2, NaN, 3e9];
//~ Generic Array<Genereic>
const arrayIsString = ['Some', 'String', `TypeScript`];
const arrayIsStringGeneric = ['Some', 'String', `TypeScript`];
//~  Generic Array<Genereic>
const arrayIsBoolean = [false, true];
const arrayIsBooleanGenerc = [false, true];
//~  Generic Array<Genereic>
const arrayIsObject = [{}, {}];
const arrayIsObjectGeneric = [{}, {}];
//~  Generic Array<Genereic>
const arrayIsNull = [null];
const arrayIsNullGeneric = [null];
//~  Generic Array<Genereic>
const arrayIsUndefined = [undefined];
const arrayIsUndefinedGeneric = [undefined];
//~  Generic Array<Genereic>
const arrayIsBigInt = [1n, 1000111n];
const arrayIsBigIntGeneric = [1n, 1000111n];
//~  Generic Array<Genereic>
const arrayIsSymbol = [Symbol('id'), Symbol('key')];
const arrayIsSymbolGeneric = [Symbol('id'), Symbol('key')];
//! Tuple - Это означает что в массиве должно быть последовательность типов которые должны соотвествовать этим типам и количеству заданных типов.
const tupleType = [
    1,
    'SomeString',
    true,
    null,
    undefined,
    1n,
    Symbol('key'),
    {},
    [1, 11111, 3e9],
];
//~ Tuple - Может иметь и конкреное значение которому должна соотвествовать тот массив которому она определяется
const tupleWithSomeValue = ['Name', 'age'];
//! Any - Это означает что мы можем задать любой тип и любое значение или же мы также можем переопределит то значение которая была определена и переопределиться тип того значения которой мы задали (Не рекомендуется использовать этот тип данных)
let isAny = 1;
isAny = 'SomeString';
isAny = true;
isAny = 1n;
isAny = Symbol('key');
isAny = null;
isAny = undefined;
isAny = {};
isAny = [];
