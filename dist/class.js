"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Animal_instances, _Animal_type, _Animal_typeClass;
class TypeClass {
    constructor(name) {
        this.name = name;
    }
}
class Person {
    constructor(name) {
        this.time = new Date();
        this.name = '';
        this.name = name;
    }
    data() {
        console.log('Something ');
    }
    sayHi() {
        console.log('Hi');
    }
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
//~ # - Приватное поле
class Animal {
    constructor(color) {
        _Animal_instances.add(this);
        this.voice = '';
        this.year = 0;
        this.color = '';
        this.name = '';
        _Animal_type.set(this, 'Animal');
        this.sayHi();
        this.color = color;
        __classPrivateFieldGet(this, _Animal_instances, "m", _Animal_typeClass).call(this);
    }
    sayHi() {
        const colors = this.color;
        const type = __classPrivateFieldGet(this, _Animal_instances, "m", _Animal_typeClass).call(this);
        return `Hello World ${colors} type: ${type}`;
    }
    stringClass() {
        const type = __classPrivateFieldGet(this, _Animal_instances, "m", _Animal_typeClass).call(this);
        return type;
    }
}
_Animal_type = new WeakMap(), _Animal_instances = new WeakSet(), _Animal_typeClass = function _Animal_typeClass() {
    return `Type: ${__classPrivateFieldGet(this, _Animal_type, "f")}`;
};
Animal.age = '';
const animalTypes = new Animal('Red');
console.log(animalTypes);
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice;
        super.voice = 'Voice Super';
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
    get changeValue() {
        return this.year;
    }
    set changeValue(value) {
        this.year = value;
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
class CarPrice {
    constructor() {
        this.color = 'Red';
        this.price = 20000;
        this.year = '2022';
    }
}
const carPrice = {
    color: 'Red',
    price: 20000,
    year: '2022',
};
let userPerson = {
    name: 'Aslan',
    age: 28,
    isMarried: false,
    showName: function () {
        console.log(this.name);
    },
    showAge() {
        return `Age: ${this.age}`;
    },
};
userPerson.showName();
console.log(userPerson.showAge());
var Seasons;
(function (Seasons) {
    Seasons["WINTER"] = "Winter";
    Seasons["SPRING"] = "Spring";
    Seasons["SUMMER"] = "Summer";
    Seasons["AUTUMN"] = "Autumn";
})(Seasons || (Seasons = {}));
class DaysOfTheWeek {
    constructor(day) {
        this.day = day;
    }
}
const monday = new DaysOfTheWeek('Monday');
function seasons(season) {
    return `${season}`;
}
const seasonFn = seasons('Autumn');
function human(human) {
    return `Gender: ${human.name} Age: ${human.age}`;
}
const man = human({ name: 'Man', age: 20 });
const woman = human({ name: 'Woman', age: 20 });
