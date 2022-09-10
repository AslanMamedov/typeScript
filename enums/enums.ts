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
