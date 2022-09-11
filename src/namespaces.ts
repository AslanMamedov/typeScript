//! Namepece - Инкапсилирует все в нее добавленные сущности создовая свою пространство имен к которому можно обратиться 
//~ Для того что бы мы могли обратиться к значенимя мы используюем export 
namespace Utils {
	export const SECRET: string = 'NameSpace';
	export const PI : number = 3.14 ;
	const getPass = ( name : string , age : number ) : string => ` $ { name } $ { age } ` ;
	const isEmpty = < T > ( data : T ) : boolean => ! data ;
}

const someNameSpace = Utils.SECRET;
console.log(someNameSpace);

//! Для импорта в другой файл нам нужно использовать /// <reference path="namespace.ts" />

