"use strict";
//! Enums - Для структурирования однотипных элементов
//~ Default - По умолчанию все значения которые были оприделины идут по последовательной номерации 0 - ... , но также можно изменить последовательность а также задать ключам свои собственные значения и последовательность номерации
var SocialMedia;
(function (SocialMedia) {
    SocialMedia[SocialMedia["instagram"] = 0] = "instagram";
    SocialMedia[SocialMedia["facebook"] = 1] = "facebook";
    SocialMedia[SocialMedia["whatsApp"] = 2] = "whatsApp";
})(SocialMedia || (SocialMedia = {}));
SocialMedia.facebook; //! 1
SocialMedia[1]; //! facebook
console.log(SocialMedia.facebook);
console.log(SocialMedia[1]);
const media = SocialMedia.whatsApp;
console.log(media);
//~ Default
var SocialMediaTwo;
(function (SocialMediaTwo) {
    SocialMediaTwo[SocialMediaTwo["telegram"] = 2] = "telegram";
    SocialMediaTwo[SocialMediaTwo["vk"] = 3] = "vk";
    SocialMediaTwo[SocialMediaTwo["youtube"] = 4] = "youtube";
})(SocialMediaTwo || (SocialMediaTwo = {}));
const mediaTwo = SocialMediaTwo;
console.log(mediaTwo);
//~ Default
var ProgrammingLanguages;
(function (ProgrammingLanguages) {
    ProgrammingLanguages["js"] = "JavaScript";
    ProgrammingLanguages["python"] = "Python";
    ProgrammingLanguages["java"] = "Java";
    ProgrammingLanguages["rust"] = "Rust";
})(ProgrammingLanguages || (ProgrammingLanguages = {}));
const programmingLanguages = ProgrammingLanguages;
console.log(programmingLanguages);
//~ Revers enum
var ReversEnum;
(function (ReversEnum) {
    ReversEnum[ReversEnum["country"] = 0] = "country";
    ReversEnum[ReversEnum["city"] = 1] = "city";
})(ReversEnum || (ReversEnum = {}));
const revers = ReversEnum[0];
console.log(revers);
//~ Расчетный enum
const fb = () => {
    return 1;
};
var FunctionEnum;
(function (FunctionEnum) {
    FunctionEnum[FunctionEnum["facebook"] = fb()] = "facebook";
})(FunctionEnum || (FunctionEnum = {}));
FunctionEnum.facebook;
//~ Можно использовать как обьект
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
const direction = (obj) => {
    console.log(obj);
};
direction(Direction);
const admin = "Admin" /* PersonEnumForConst.ADMIN */;
console.log("Admin" /* PersonEnumForConst.ADMIN */);
var Value;
(function (Value) {
    Value[Value["None"] = 0] = "None";
    Value[Value["Read"] = 2] = "Read";
    Value[Value["Write"] = 2] = "Write";
    Value[Value["ReadWrite"] = 2] = "ReadWrite";
    Value[Value["StringLength"] = 'Sting'.length] = "StringLength";
})(Value || (Value = {}));
var Seasons;
(function (Seasons) {
    Seasons[Seasons["Winter"] = 0] = "Winter";
    Seasons[Seasons["Spring"] = 1] = "Spring";
    Seasons[Seasons["Summer"] = 2] = "Summer";
    Seasons[Seasons["Autumn"] = 3] = "Autumn";
})(Seasons || (Seasons = {}));
let developer = "Frontend" /* Developer.Frontend */;
console.log(developer);
