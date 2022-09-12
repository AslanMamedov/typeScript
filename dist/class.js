"use strict";
class Person {
    constructor() {
        this.time = new Date();
    }
    data() {
        console.log('Something ');
    }
    sayHi() {
        console.log('Hi');
    }
    ;
}
class TypeScript {
    constructor(version, id) {
        this.version = version;
        this.id = id;
    }
    info(name) {
        return `[${name}: TypeScript versiont is ${this.version}]`;
    }
    get versionType() {
        return this.id;
    }
    set versionType(id) {
        this.id = id;
    }
}
class Car {
    constructor(theModel) {
        this.numberOfWheels = 4;
        this.model = theModel;
    }
}
class CarTwo {
    constructor(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
}
//! Модификаторы:
//~ 1 Protected - Разрещает наследоваться другим классам
//~ 2 Private - Только для того класса в котором была опеределана
//~ 3 Public - По умолчанию
//~ 4 Readonly - Только для чтения
//~ 5 Static - Статические поле для того что бы они были видны только в самом классе
class Animal {
    constructor(color) {
        this.voice = '';
        this.year = 0;
        this.color = '';
        this.name = '';
        this.sayHi();
        this.color = color;
    }
    sayHi() {
        const colors = this.color;
        return `Hello World ${colors}`;
    }
}
Animal.age = '';
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice;
    }
}
const cat = new Cat('Red');
//! Abstract Классы и Методы - Для того что бы мы могли наследоваться во время разработки, от нее можно только наследоваться напримую нельзя содать экземпляр
class Component {
    constructor(name, age) {
        this.name = '';
        this.age = 0;
        this.name = name;
        this.age = age;
    }
}
class AppComponent extends Component {
    constructor(name, age, year, isMarried) {
        super(name, age);
        this.year = year;
        this.isMarried = isMarried;
        this.year = year;
        this.isMarried = isMarried;
    }
    render() {
        console.log('Component on render');
    }
    info() {
        return 'This is info';
    }
}
const appComponent = new AppComponent('Aslan', 28, 1994, false);
//! instends of - Проверяет  принадлежности какого либо обьекта к классу
class MyResponse {
    constructor() {
        this.header = 'Contet-type: application/json';
        this.result = 'Responst';
    }
}
class MyError {
    constructor() {
        this.status = 404;
        this.message = 'Error';
    }
}
function handle(res) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result,
        };
    }
    else {
        return {
            info: res.message + res.status,
        };
    }
}
