//! Generic - Это аргументы для типов

const arrayOfNumber: Array<number> = [1, 2];

function reverse<T>(array: T[]): T[] {
	return array.reverse()
}

reverse(arrayOfNumber)