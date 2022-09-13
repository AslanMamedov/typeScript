//! type - для того что бы задавать свои типы

type StringType = string;
const someTypes: StringType = 'Aslan_1994';

type NumberType = number;
const someNumberForTheType: NumberType = 1_1000_111;

//~ Мы так же можем задать разновидность типов черезе " | ",
type ID = string | number;
let someId: ID = 1;
someId = '1';

//! Guards - Multiple types - Синтаксис нескольких типо, типо обьединение

//~ Multiple
type Tmultiple = string | number;

function string(x: string | number) {
	if (typeof x === 'number') {
		return x.toFixed(2);
	}
	return x.trim();
}

type ColorType = 'succes' | 'danger' | 'warning';

function setColorType(type: ColorType) {}

setColorType('succes');
setColorType('danger');
setColorType('warning');

//~ ? - Опциональный оператор
type PersonType = {
	name: string;
	age: number;
	isMarried: boolean;
	year?: number;
};

const newUserType: PersonType = {
	name: 'Aslan',
	age: 28,
	isMarried: false,
};

const oldUserType: PersonType = {
	name: 'Aslan',
	age: 30,
	isMarried: true,
	year: 1994,
};

//! & - Intersection - Обьединение типов

type TOne = {
	name: string;
};

type TTwo = {
	age: number;
};

type TFour = {
	isMarried: boolean;
};

type TThree = TOne & TTwo & TFour;

type TFive = Pick<TThree, 'age' | 'isMarried' | 'name'>;

type TSix = TFive & {
	year: number;
};

type TSeven = Pick<TSix, keyof TSix>;

type TEight = TSeven & {
	city: string;
};

const typeUser: TSeven = {
	name: 'Aslan',
	age: 28,
	isMarried: false,
	year: 1994,
};

const typeUserEight: TEight = {
	name: 'Aslan',
	age: 28,
	year: 1994,
	isMarried: false,
	city: 'Baku',
};

type MessageOf<T> = T extends { message: unknown } ? T['message'] : never;

interface IEmail {
	message: string;
}

interface ICat {
	age: number;
}

type EmailMessgeContents = MessageOf<IEmail>;
type CatMessgeContents = MessageOf<ICat>;

interface IInKeyOf {
	[key: string]: any;
}
//~ Мы тут проверяем значения ключенй в заданной Property если это не числового типа то она выдаст ошибку!
type OptionFlags<T> = {
	[Property in keyof T]: number;
};

// const keyofInOptionFlags: OptionFlags<IInKeyOf> = {
// 	name: 'Aslan'
// } //~ Error - Потому что значения ключя не совподает типом в переданной в Generic

type ErrorMessage = string | string[] | Error;

const apiError: ErrorMessage = JSON.parse(JSON.stringify('[]'));

const formatedMessage = (apiError as string[]).map((e) => e.toUpperCase());

//~ const ❗

const userConstOne = {
	name: 'Aslan',
	age: 28,
} as const;
const userConstTwo = <const>{
	name: 'Aslan',
	age: 28,
};

type TOneType = typeof userConstOne;
type TTwoType = typeof userConstTwo;

const months = ['January', 'February', 'Martch'] as const;

for (let month of months) {
}


//!TypeGuards
//~ is - Возвращает true или false если передаваемый типом значения не соотвествует тому значению которому вы передали

interface ISuccessType {
	response: 'Success';
	data: { name: 'Aslan'; age: 28; isMarried: boolean };
}

interface IErrorType {
	response: 'Error';
	errorMessage: { message: 'Something was wrong' };
}

type TIsType = ISuccessType | IErrorType;

function isSuccessType(typeIs: TIsType): typeIs is ISuccessType {
	if (typeIs.response === 'Success') {
		return true;
	} else {
		return false;
	}
}
function isErrorType(typeIs: TIsType): typeIs is IErrorType {
	if (typeIs.response === 'Error') {
		return true;
	} else {
		return false;
	}
}

function isResponseDataType(data: TIsType) {
	if (isSuccessType(data)) {
		return data.data;
	} else {
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
