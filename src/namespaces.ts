//! Namepece - Инкапсилирует все в нее добавленные сущности создовая свою пространство имен к которому можно обратиться
//~ Для того что бы мы могли обратиться к значенимя мы используюем export
namespace Utils {
	export const SECRET: string = 'NameSpace';
	export const PI: number = 3.14;
	const getPass = (name: string, age: number): string => ` $ { name } $ { age } `;
	const isEmpty = <T>(data: T): boolean => !data;
}

const someNameSpace = Utils.SECRET;
console.log(someNameSpace);

//! Для импорта в другой файл нам нужно использовать /// <reference path="namespace.ts" />

namespace UtilsWityExportFn {
	export function log(text: string, color: string): void;
	export function log(text: string, color: string, fontSize: number): void;
	export function log(text: string, color: string, fontSize?: number): void {
		if (fontSize) {
			console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}px`);
		} else {
			console.log(`%c${text}`, `color: ${color}`);
		}
	}
	log('Текст внутри', '#d9534f', 40);
}

UtilsWityExportFn.log('Текст снаружи', '#8534d');

//~ Можно разделять пространствой имен

namespace UserNameSpace {
	export abstract class User {
		protected age: number = 0;
		constructor(protected name: string = '', age: number = 0) {
			this.name = name;
			this.age = age;
		}

		abstract sayHi(): void 
	}
}


namespace UserNameSpace {
	export class Person extends UserNameSpace.User {
		constructor(name: string = '', age: number = 0, public isMarried: boolean = false) {
			super(name, age)
			this.isMarried = isMarried;
		}

		public sayHi(): void {
			console.log('Hi');
		}
	}
}

const userNameSpace = new UserNameSpace.Person()
console.log(userNameSpace);
userNameSpace.sayHi()



//~ Внутри namespace - может находиться также namespace

namespace Pets {
	export namespace Animals {
		export const cat = 'Cat'
		export const dog = 'Dog'
	}
}


const animalCat = Pets.Animals.cat
const animaldog = Pets.Animals.dog
console.log(animalCat);
console.log(animaldog);