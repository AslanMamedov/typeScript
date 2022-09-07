"use strict";
class Person {
    constructor() {
        this.time = new Date();
    }
    data() {
        console.log('Something ');
    }
}
class TypeScript {
    constructor(version) {
        this.version = version;
    }
    info(name) {
        return `[${name}: TypeScript versiont is ${this.version}]`;
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
//~ Protected - Разрещает наследоваться другим классам 
//~ Private - Только для того класса в котором была опеределана  
//~ Public - По умолчанию 
class Animal {
    constructor() {
        this.voice = '';
        this.color = '';
        this.sayHi();
    }
    sayHi() {
        return `Hello World`;
    }
}
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice;
    }
}
const cat = new Cat();
//! Abstract Классы и Методы - Для того что бы мы могли наследоваться во время разработки
class Component {
}
class AppComponent extends Component {
    render() {
        console.log('Component on render');
    }
    info() {
        return 'This is info';
    }
}
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
            info: res.header + res.result
        };
    }
    else {
        return {
            info: res.message + res.status
        };
    }
}
