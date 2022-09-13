//! Generic - Это аргументы для типов

const arrayOfNumber: Array<number> = [1, 2];

function reverse<T>(array: T[]): T[] {
	return array.reverse();
}

reverse(arrayOfNumber);

const someGeneric = <T>(data: T): T => data;

someGeneric<number>(10.092022).toFixed(2);
someGeneric<string>('SomeString').length;

//! extends - Означает что он будет по умолчанию того типо которую мы передадим
//~ Несколько Generic

const generic = <T, K extends string, D>(a: T, b: K, c: D): string => `${a}${b}${c}`;

console.log(generic<number, string, boolean>(1, '2', false));

interface StateOne<T, K> {
	name: T;
	age: K;
}

const personState: StateOne<string, number> = {
	name: 'Aslan',
	age: 28,
};

type StateTwo<T> = {
	name: T;
};

const userState: StateTwo<string> = {
	name: 'Aslan',
};

type StateThree<T> = T;

const stateThree: StateThree<string> = 'Aslan';

class StateFour<T> {
	name: T;
	constructor(name: T) {
		this.name = name;
	}
}

const newStateFour = new StateFour<string>('Aslan');

function myFnType<T, N, C>(One: T, Two: N): C | number {
	return Number(One) + Number(Two);
}

const myFnCount = myFnType<number, number, number>(1, 2);

console.log(myFnCount);
function merge<U, V>(o1: U, o2: V): U & V {
	return { ...o1, ...o2 };
}
const r1 = merge({ a: 1 }, { b: 2 });
const r2 = merge({ a: 1, c: ' lol ' }, { b: 2 });

async function fakeRequest() {
	return 1;
}
const b: Promise<number> = fakeRequest();

function getKey<T extends object, U extends keyof T>(obj: T, value: T[U]): U | null {
	const key = (Object.keys(obj) as Array<U>).find((k) => obj[k] === value);

	return key || null;
}

const key = getKey(
	{
		name: 'Aslan',
	},
	'Aslan'
);

function pathField<T extends object, U extends keyof T, V extends T[U]>(obj: T, field: U, value: V) {}

pathField({ name: 'Aslan' }, 'name', 'Aslan');

//~ Default value of Generic

function defaultValue<T = string>(name?: T): T | undefined {
	return name;
}

const defaultValueType = defaultValue('Aslan');

function fillArray<T, U extends number>(len: U, element: T): T[] {
	return new Array<T>(len).fill(element);
}

const fillArrayType = fillArray<string, number>(9, '8');
console.log(fillArrayType);

type TEveryType<T> = T;
const someThing: TEveryType<'Hello world'> = 'Hello world';
const someTypeIsNumber: TEveryType<1> = 1;

type TArray<T> = T[];

const typeArrayIs: TArray<'Hi' | 12 | 'Hello' | 'World' | 2022> = ['Hello'];
//~ SomePractice
type TFn<T, K, U> = (name: K, age: U) => T[];

interface IObjectTypeFn {
	name: string;
	age: number;
}

const someFnType: TFn<IObjectTypeFn, 'Aslan', 28> = (name, age) => {
	return [
		{
			name,
			age,
		},
	];
};

const value = someFnType('Aslan', 28);
console.log(value);

//!
interface IAnalytics {
	bussines: string;
	data: string;
}
interface IDesign {
	graphical: string;
}

interface IMenu {
	analytics: IAnalytics;
	design: IDesign;
}

const menu: IMenu = {
	analytics: {
		bussines: 'Для бизнеса',
		data: 'Big Data',
	},
	design: {
		graphical: 'Графисеский',
	},
};

function getMenu<T, L1 extends keyof T, L2 extends keyof T[L1]>(obj: T, l1: L1, l2: L2) {
	return obj[l1][l2];
}

const resultGetMenuAnalytics = getMenu<IMenu, 'analytics', 'data'>(menu, 'analytics', 'data');
const resultGetMenuDesign = getMenu<IMenu, 'design', 'graphical'>(menu, 'design', 'graphical');
//~
console.log(resultGetMenuAnalytics);
console.log(resultGetMenuDesign);

//~

// class Phone {
// 	public weight: number;
// }

// class XiaomiPhone extends Phone {
// 	public weight: number;
// 	public accumulator: number;
// }
// class ApplePhone extends Phone {
// 	public weight: number;
// 	public accumulator: number;

// }

// function createInstane<T extends Phone>(PhoneClass: new () => T): T {
// 	return new PhoneClass();
// }

// createInstane(XiaomiPhone).weight;
// createInstane(ApplePhone).weight;
