//! Class 
interface IClassPerson {
	time: Date,
	data(): void
}

class Person implements IClassPerson {
	time: Date = new Date();
	data(): void {
		console.log('Something ');
	}
}


class TypeScript {
	version: string;

	constructor(version: string) {
		this.version = version;
	}

	info(name: string): string {
		return `[${name}: TypeScript versiont is ${this.version}]`
	}
}

class Car {
	readonly model: string;
	readonly numberOfWheels: number =  4;
	constructor(theModel: string) {
		this.model = theModel;
		
	}
}

class CarTwo {
	readonly numberOfWheels: number = 4;
	constructor(readonly model: string) {

	}
}

//! Модификаторы: 
//~ Protected - Разрещает наследоваться другим классам 
//~ Private - Только для того класса в котором была опеределана  
//~ Public - По умолчанию 


class Animal {
	protected voice: string = '';
	public color: string = '';

	constructor() {
		this.sayHi()
	}
	private sayHi(): string {
		return `Hello World`
	}
}

class Cat extends Animal {
	public setVoice(voice: string): void {
		this.voice = voice
	}
}
const cat = new Cat()


//! Abstract Классы и Методы - Для того что бы мы могли наследоваться во время разработки


abstract class Component {
	abstract render(): void;
	abstract info(): string;
}

class AppComponent extends Component {
	render(): void {
		console.log('Component on render');
	}

	info(): string {
		return 'This is info'
	}
}

//! instends of - Проверяет  принадлежности какого либо обьекта к классу

class MyResponse {
	header: string = 'Contet-type: application/json';
	result: string = 'Responst'
}
class MyError {
	status: number = 404
	message: string = 'Error'
}

function handle(res: MyResponse | MyError) {
	if (res instanceof MyResponse) {
		return {
			info: res.header + res.result
		}
	} else {
		return {
			info: res.message + res.status
		}
	}
}
