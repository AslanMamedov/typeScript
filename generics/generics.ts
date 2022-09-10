//! Generic - Это аргументы для типов

const arrayOfNumber: Array<number> = [1, 2];

function reverse<T>(array: T[]): T[] {
	return array.reverse()
}

reverse(arrayOfNumber)

const someGeneric = <T>(data: T): T => data;

someGeneric<number>(10.092022).toFixed(2);
someGeneric<string>('SomeString').length;

//! extends - Означает что он будет по умолчанию того типо которую мы передадим 
//~ Несколько Generic

const generic = <T  , K extends string, D>(a: T, b: K, c: D): string => `${a}${b}${c}`;


console.log(generic<number, string,  boolean>(1, '2', false));

