//! Enums - Для структурирования однотипных элементов
//~ Default - По умолчанию все значения которые были оприделины идут по последовательной номерации 0 - ... , но также можно изменить последовательность а также задать ключам свои собственные значения и последовательность номерации

enum SocialMedia {
	instagram,
	facebook,
	whatsApp,
}

SocialMedia.facebook; //! 1
SocialMedia[1]; //! facebook

console.log(SocialMedia.facebook);
console.log(SocialMedia[1]);

const media = SocialMedia.whatsApp;
console.log(media);

//~ Default

enum SocialMediaTwo {
	telegram = 2,
	vk,
	youtube,
}

const mediaTwo = SocialMediaTwo;
console.log(mediaTwo);

//~ Default

enum ProgrammingLanguages {
	js = 'JavaScript',
	python = 'Python',
	java = 'Java',
	rust = 'Rust',
}

const programmingLanguages = ProgrammingLanguages;
console.log(programmingLanguages);

//~ Revers enum

enum ReversEnum {
	country,
	city,
}

const revers = ReversEnum[0];
console.log(revers);

//~ Расчетный enum

const fb = (): number => {
	return 1;
};

enum FunctionEnum {
	facebook = fb(),
}

FunctionEnum.facebook;
//~ Можно использовать как обьект
enum Direction {
	Up = 'UP',
	Down = 'DOWN',
	Left = 'LEFT',
	Right = 'RIGHT',
}

interface IObjectEnum {
	Up: string;
	Down: string;
	Left: string;
	Right: string;
}

const direction = (obj: IObjectEnum): void => {
	console.log(obj);
};

direction(Direction);

//~ const enum - преобрузует enum в обычную переменную

const enum PersonEnumForConst {
	ADMIN = 'Admin',
	USER = 'USER',
}

const admin = PersonEnumForConst.ADMIN;
console.log(PersonEnumForConst.ADMIN);

enum Value {
	None,
	Read = 1 << 1,
	Write = 1 << 1,
	ReadWrite = Read | Write,
	StringLength = 'Sting'.length,
}

enum Seasons {
	Winter,
	Spring,
	Summer,
	Autumn,
}

type TypeSeasons = keyof typeof Seasons;

//~
const enum Developer {
	Frontend = 'Frontend',
	Backend = 'Backend'
}

let developer: Developer = Developer.Frontend
console.log(developer);