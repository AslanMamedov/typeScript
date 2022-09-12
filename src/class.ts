//! Class
interface IClassPerson {
	time: Date;
	data(): void;
	sayHi: () => void
}

type IClassPersonType = {
	time: Date;
	data(): void;
};

class Person implements IClassPersonType, IClassPerson {
	time: Date = new Date();
	data(): void {
		console.log('Something ');
	}
	sayHi(): void {
		console.log('Hi');
	} ;
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

class Animal {
	protected voice: string = '';
	private year: number = 0;
	public color: string = '';
	readonly name: string = '';
	static age: string = '';

	constructor(color: string) {
		this.sayHi();
		this.color = color;
	}
	private sayHi(): string {
		const colors: string = this.color;
		return `Hello World ${colors}`;
	}
}

class Cat extends Animal {
	public setVoice(voice: string): void {
		this.voice = voice;
	}
}
const cat = new Cat('Red');

//! Abstract Классы и Методы - Для того что бы мы могли наследоваться во время разработки, от нее можно только наследоваться напримую нельзя содать экземпляр

abstract class Component {
	name: string = ''
	age: number = 0
	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}

	abstract render(): void;
	abstract info(): string;
}

class AppComponent extends Component {

	constructor(name: string, age: number, public year: number, public isMarried: boolean) {
		super(name, age)
		this.year = year;
		this.isMarried = isMarried
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
