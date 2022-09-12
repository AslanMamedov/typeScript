"use strict";
//! keyof - Возвращает ключи типов
const names = 'age';
var Color;
(function (Color) {
    Color["white"] = "#fff";
    Color["black"] = "#000";
})(Color || (Color = {}));
const inferArray = ['Something', 1, false];
const somePersonForInfer = {
    name: 'Aslan',
    age: 28,
};
class AnimalCat {
    say() {
        return 'meow';
    }
}
class AnimalDog {
    say() {
        return 'woof';
    }
}
function createObjectAnimal(classType) {
    return new classType();
}
const petCat = createObjectAnimal(AnimalCat);
const petDog = createObjectAnimal(AnimalDog);
