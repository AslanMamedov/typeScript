//! Примитивные типы в typescript
const isNumber: number = 1; //! 1 1.1 3e9 1_000_111 NaN
const isBoolean: boolean = false; //! true
const isString: string = 'SomeString'; //! `SomeString`, "SomeString"
const isNull: null = null;
const isUndefined: undefined = undefined;
const isSymbol: symbol = Symbol('symbol');
const isBigIng: bigint = 1n; //! 1n 1_000n

//! Object - Обьект
const isObject: object = {
	name: 'Aslan',
	age: 28,
	year: 1994,
	isMarried: false,
};
//! Так задается тип для обьектов
const isObjectType: {
	name: string;
	age: number;
	year: number;
	isMarried: boolean;
} = {
	name: 'Aslan',
	age: 28,
	year: 1994,
	isMarried: false,
};

//! Array - Массив
const arrayIsNumber: number[] = [1, 2, NaN, 3e9];
const arrayIsNumberGeneric: Array<number> = [1, 2, NaN, 3e9];
//~ Generic Array<Genereic>
const arrayIsString: string[] = ['Some', 'String', `TypeScript`];
const arrayIsStringGeneric: Array<string> = ['Some', 'String', `TypeScript`];
//~  Generic Array<Genereic>
const arrayIsBoolean: boolean[] = [false, true];
const arrayIsBooleanGenerc: Array<boolean> = [false, true];
//~  Generic Array<Genereic>
const arrayIsObject: object[] = [{}, {}];
const arrayIsObjectGeneric: Array<object> = [{}, {}];
//~  Generic Array<Genereic>
const arrayIsNull: null[] = [null];
const arrayIsNullGeneric: Array<null> = [null];
//~  Generic Array<Genereic>
const arrayIsUndefined: undefined[] = [undefined];
const arrayIsUndefinedGeneric: Array<undefined> = [undefined];
//~  Generic Array<Genereic>
const arrayIsBigInt: bigint[] = [1n, 1_000_111n];
const arrayIsBigIntGeneric: Array<bigint> = [1n, 1_000_111n];
//~  Generic Array<Genereic>
const arrayIsSymbol: symbol[] = [Symbol('id'), Symbol('key')];
const arrayIsSymbolGeneric: Array<symbol> = [Symbol('id'), Symbol('key')];

//! Tuple - Это означает что в массиве должно быть последовательность типов которые должны соотвествовать этим типам и количеству заданных типов.
const tupleType: [number, string, boolean, null, undefined, bigint, symbol, object, number[]] = [
	1,
	'SomeString',
	true,
	null,
	undefined,
	1n,
	Symbol('key'),
	{},
	[1, 11_111, 3e9],
];
//~ Tuple - Может иметь и конкреное значение которому должна соотвествовать тот массив которому она определяется
const tupleWithSomeValue: ['Name', 'age'] = ['Name', 'age'];

//! Any - Это означает что мы можем задать любой тип и любое значение или же мы также можем переопределит то значение которая была определена и переопределиться тип того значения которой мы задали (Не рекомендуется использовать этот тип данных)
let isAny: any = 1;
isAny = 'SomeString';
isAny = true;
isAny = 1n;
isAny = Symbol('key');
isAny = null;
isAny = undefined;
isAny = {};
isAny = [];


