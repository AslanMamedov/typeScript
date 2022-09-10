"use strict";
//! Decorator - Для модификации обьектов
//~ Сушествует 4 вида декоратора, класса свойства метода и акцесора
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//~ Класса
const logClass = (construcor) => {
    console.log(construcor);
};
//~ Свойства
const logProperty = (target, propertyKey) => {
    console.log(propertyKey);
    console.log(target);
};
//~ Метода
const logMethod = (target, propertyKey, descriptor) => {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
};
//~ Акцесора
const logSet = (target, propertyKey, descriptor) => {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
};
let User = class User {
    constructor(name, age, secretProperty) {
        this.name = name;
        this.age = age;
        this.secretProperty = secretProperty;
    }
    getPass() {
        return `${this.name}${this.age};`;
    }
    set myAge(age) {
        this.age = age;
    }
};
__decorate([
    logProperty
], User.prototype, "secretProperty", void 0);
__decorate([
    logMethod
], User.prototype, "getPass", null);
__decorate([
    logSet
], User.prototype, "myAge", null);
User = __decorate([
    logClass
], User);
//! Factory Decorator - Фабрика декоратора
function factory(value) {
    console.log(value);
    return function (target) {
        console.log(target);
    };
}
const enumrable = (value) => {
    return (target, propertyKey, descriptor) => {
        descriptor.enumerable = value;
    };
};
class UserDecorator {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPass() {
        return `${this.name}${this.age}`;
    }
}
__decorate([
    enumrable(false)
], UserDecorator.prototype, "getPass", null);
//! Композиция декораторов
//~ @f @g
const first = () => {
    console.log('first completing');
    return (target, propertyKey, descriptor) => {
        console.log('first called');
    };
};
const second = () => {
    console.log('second completing');
    return (target, propertyKey, descriptor) => {
        console.log('second called');
    };
};
class CompositionDecorators {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPass() {
        return `${this.name}${this.age}`;
    }
}
__decorate([
    first(),
    second()
], CompositionDecorators.prototype, "getPass", null);
