//! Function - void, never, or some Type - Если функция ничего не возвращает то это void, если же функция что то возвращает то мы указываем тип которую она вернет, но если же функция будет работать бесконечно раз или вовзращать ощибку то never

//~ void
function typeScript(name: string, age: number): void {
	const someText: string = `Name: ${name} Age:${age}`;
	console.log(someText);
}
typeScript('Aslan', 28);

//~ type
const someType = (someNumber: number): number => {
	return someNumber;
};

console.log(someType(1994));

//~ never
const someError = (): never => {
	throw new Error('Something was wrong');
};
console.log(someError());

//~ Перегрузка функции

interface IPosition {
	x: number | undefined;
	y: number | undefined;
}

interface IDefault extends IPosition {
	default?: string;
}

function myPosition(): IPosition;
function myPosition(a: number): IDefault;
function myPosition(a: number, b: number): IPosition;

function myPosition(a?: number, b?: number) {
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

//! REST

function restOperation(id: string, ...rest: Array<any>): void {
	console.log(id, rest);
}
restOperation('1994', {name: 'Aslan'}, 1)
