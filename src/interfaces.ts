//! Interface - Нужны для определение типов у обьектов или классов или даже у функции

//~ readonly - для того что бы мы могли только читать значения
//~ ? - для того что бы ключи были не обязательными
//~ as - Это означает к какому типу определить
//~ <> - Мы также можем определеить тип черезе Generec
//~ extends - Для наследования interface и черезе " , " - мы можем наследоваться от неограниченного interface
//~ Мы также можем расширять interface при помощи повторного обьявления с темже именем
//~ [key: string]: any; - Динамические ключи (Неограниченное количество ключей и значений)

interface ICity {
	readonly name: string;
}

interface IUser {
	readonly id: number;
	name: string;
	age: number;
	year: number;
	isMarried?: boolean;
	sayHi?(words: string): string;
	country: string[];
	city: ICity;
	count: () => void;
}

const user: IUser = {
	id: 1,
	age: 28,
	name: 'Aslan',
	year: 1994,
	sayHi(words) {
		return `Hello ${words}`;
	},
	city: {
		name: 'Baku',
	},
	country: ['Azerbaijan'],
	count: function () {
		console.log(1 + 2);
	},
	isMarried: false,
};
user.count();

//~ as
const newUser = {
	id: 2,
	age: 28,
	name: 'Aslan',
	year: 1994,
	sayHi(words) {
		return `Hello ${words}`;
	},
	city: {
		name: 'Baku',
	},
	country: ['Azerbaijan'],
	count: function () {
		console.log(1 + 2);
	},
	isMarried: false,
} as IUser;


interface IAssertionType {
	name: string;
	age: number;
}

//~ Для того что бы мы могли создать пустой обьект но с ключи и значения будут заданны по позже 
const assertionTypeOne: IAssertionType = {} as IAssertionType 
const assertionTypeTwo: IAssertionType = <IAssertionType>{} 

assertionTypeOne.name = 'Aslan'
assertionTypeOne.age = 28

const personAs = {
	name: 'Aslan',
	age: 28
}

const keysOne = Object.keys(personAs) as Array<keyof typeof personAs>;
const keysTwo =<Array<keyof typeof personAs>> Object.keys(personAs) ;

keysOne.forEach(key => {
	personAs[key]
})

//~ Generic
const someUser = <IUser>{
	id: 3,
	age: 28,
	name: 'Aslan',
	year: 1994,
	sayHi(words) {
		return `Hello ${words}`;
	},
	city: {
		name: 'Baku',
	},
	country: ['Azerbaijan'],
	count: function () {
		console.log(1 + 2);
	},
	isMarried: false,
};

//~ extends - Мы можем даже наследоваться от type
interface IExtends {
	year: number;
	sity: string;
}
interface IPerson {
	id: number;
	name: string;
	age: number;
}

type someTypeforInterfece = {
	city: 'Baku' | string;
}

interface IExtendsSome extends IExtends, IPerson {
	country: string;
}

interface ICityWithPerson extends IPerson, someTypeforInterfece {
	gender: string
}


const someInterfaceWithType: ICityWithPerson = {
	gender: 'man',
	age: 28,
	city: "Baku",
	id: 1994,
	name: "Aslan"
}

const someUserExtends: IExtendsSome = {
	id: 1,
	name: 'Aslan',
	age: 28,
	country: 'Azerbaijan',
	sity: 'Baku',
	year: 1994,
};

//~ Расширения
interface ISome {
	name: string;
}

interface ISome {
	age: number;
}

const some: ISome = {
	name: 'Aslan',
	age: 28,
};

//~ [key: string]: any

interface IKey {
	[key: string]: any;
}

const dynamicKey: IKey = {
	name: 'Aslan',
	age: 28,
	year: 1994
}