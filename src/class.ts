//! Class
interface IClassPerson {
	time: Date;
	data(): void;
	sayHi: () => void;
}

type IClassPersonType = {
	time: Date;
	data(): void;
};

class TypeClass {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
}

class Person implements IClassPersonType, IClassPerson, TypeClass {
	time: Date = new Date();
	name: string = '';

	constructor(name: string) {
		this.name = name;
	}
	data(): void {
		console.log('Something ');
	}
	sayHi(): void {
		console.log('Hi');
	}
}

class TypeScript {
	version: string;
	id: number;
	constructor(version: string, id: number) {
		this.version = version;
		this.id = id;
	}

	info(name: string): string {
		return `[${name}: TypeScript versiont is ${this.version}]`;
	}

	get versionType(): number {
		return this.id;
	}

	set versionType(id: number) {
		this.id = id;
	}
}

class Car {
	readonly model: string;
	readonly numberOfWheels: number = 4;
	constructor(theModel: string) {
		this.model = theModel;
	}
}

class CarTwo {
	readonly numberOfWheels: number = 4;
	constructor(readonly model: string) {}
}

//! Модификаторы:
//~ 1 Protected - Разрещает наследоваться другим классам
//~ 2 Private - Только для того класса в котором была опеределана
//~ 3 Public - По умолчанию
//~ 4 Readonly - Только для чтения
//~ 5 Static - Статические поле для того что бы они были видны только в самом классе
//~ # - Приватное поле

class Animal {
	protected voice: string = '';
	private year: number = 0;
	public color: string = '';
	readonly name: string = '';
	static age: string = '';
	#type = 'Animal';

	constructor(color: string) {
		this.sayHi();
		this.color = color;
		this.#typeClass();
	}
	#typeClass(): string {
		return `Type: ${this.#type}`;
	}
	private sayHi(): string {
		const colors: string = this.color;
		const type = this.#typeClass();
		return `Hello World ${colors} type: ${type}`;
	}

	stringClass(): string {
		const type = this.#typeClass();
		return type;
	}
}
const animalTypes = new Animal('Red');
console.log(animalTypes);

class Cat extends Animal {
	public setVoice(voice: string): void {
		this.voice = voice;
		super.voice = 'Voice Super';
	}
}
const cat = new Cat('Red');

//! Abstract Классы и Методы - Для того что бы мы могли наследоваться во время разработки, от нее можно только наследоваться напримую нельзя содать экземпляр

abstract class Component {
	name: string = '';
	age: number = 0;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	abstract get changeValue(): number;

	abstract set changeValue(value: number);

	abstract render(): void;
	abstract info(): string;
}

class AppComponent extends Component {
	constructor(name: string, age: number, public year: number, public isMarried: boolean) {
		super(name, age);
		this.year = year;
		this.isMarried = isMarried;
	}

	get changeValue(): number {
		return this.year;
	}

	set changeValue(value: number) {
		this.year = value;
	}

	render(): void {
		console.log('Component on render');
	}
	info(): string {
		return 'This is info';
	}
}

const appComponent: AppComponent = new AppComponent('Aslan', 28, 1994, false);

//! instends of - Проверяет  принадлежности какого либо обьекта к классу

class MyResponse {
	header: string = 'Contet-type: application/json';
	result: string = 'Responst';
}
class MyError {
	status: number = 404;
	message: string = 'Error';
}

function handle(res: MyResponse | MyError) {
	if (res instanceof MyResponse) {
		return {
			info: res.header + res.result,
		};
	} else {
		return {
			info: res.message + res.status,
		};
	}
}

//~
interface ICar {
	color: string;
	price: number;
	year: '1994' | '2022';
}

class CarPrice implements ICar {
	color = 'Red';
	price = 20_000;
	year: '2022' = '2022';
}

const carPrice: CarPrice = {
	color: 'Red',
	price: 20_000,
	year: '2022',
};

//~ this

interface IUserPerson {
	name: string;
	age: number;
	isMarried: false | true;
	showName: () => void;
	showAge(): string;
}

interface IThis {
	year: string;
}

let userPerson: IUserPerson = {
	name: 'Aslan',
	age: 28,
	isMarried: false,
	showName: function (this: IUserPerson): void {
		console.log(this.name);
	},
	showAge(this: IUserPerson): string {
		return `Age: ${this.age}`;
	},
};

userPerson.showName();
console.log(userPerson.showAge());

//~

type TDays = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
type TSeasons = 'Winter' | 'Spring' | 'Summer' | 'Autumn';
enum Seasons {
	WINTER = 'Winter',
	SPRING = 'Spring',
	SUMMER = 'Summer',
	AUTUMN = 'Autumn',
}
class DaysOfTheWeek<D extends TDays> {
	day: D;
	constructor(day: D) {
		this.day = day;
	}
}

const monday = new DaysOfTheWeek<TDays>('Monday');

function seasons<T extends TSeasons>(season: T): string {
	return `${season}`;
}

const seasonFn = seasons<TSeasons>('Autumn');

interface IHuman {
	age: number;
	name: 'Man' | 'Woman'
}

interface IMan {
	name: 'Man';
}

interface IWoman {
	name: 'Woman';
}

function human<T extends IHuman>(human: T): string {
	return `Gender: ${human.name} Age: ${human.age}`;
}

const man = human<IHuman>({ name: 'Man', age: 20 });
const woman = human({ name: 'Woman', age: 20 });
