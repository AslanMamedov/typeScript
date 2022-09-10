//! Decorator - Для модификации обьектов
//~ Сушествует 4 вида декоратора, класса свойства метода и акцесора

//~ Класса
const logClass = (construcor: Function) => {
	console.log(construcor);
};

//~ Свойства
const logProperty = (target: Object, propertyKey: string) => {
	console.log(propertyKey);
	console.log(target);
};

//~ Метода
const logMethod = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
	console.log(target);
	console.log(propertyKey);
	console.log(descriptor);
};

//~ Акцесора
const logSet = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
	console.log(target);
	console.log(propertyKey);
	console.log(descriptor);
};

@logClass
class User {
	@logProperty
	secretProperty: number;

	constructor(public name: string, public age: number, secretProperty: number) {
		this.secretProperty = secretProperty;
	}

	@logMethod
	public getPass(): string {
		return `${this.name}${this.age};`;
	}
	@logSet
	set myAge(age: number) {
		this.age = age;
	}
}

//! Factory Decorator - Фабрика декоратора

function factory(value: any) {
	console.log(value);
	return function (target: any) {
		console.log(target);
	};
}

const enumrable = (value: boolean) => {
	return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
		descriptor.enumerable = value;
	};
};

class UserDecorator {
	constructor(public name: string, public age: number) {}
	@enumrable(false)
	public getPass(): string {
		return `${this.name}${this.age}`;
	}
}

//! Композиция декораторов
//~ @f @g

const first = () => {
	console.log('first completing');
	return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
		console.log('first called');
	};
};
const second = () => {
	console.log('second completing');

	return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
		console.log('second called');
	};
};

class CompositionDecorators {
	constructor(public name: string, public age: number) {}
	@first()
	@second()
	public getPass(): string {
		return `${this.name}${this.age}`;
	}
}
