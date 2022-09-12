//! keyof - Возвращает ключи типов

interface IPersonOperators {
	name: string;
	age: number;
}

type PersonKeys = keyof IPersonOperators;

const names: PersonKeys = 'age';

type TUser = {
	_id: number;
	name: string;
	email: string;
	createdAt: Date;
};

type TUserKeysNoMeta = Exclude<keyof TUser, '_id' | 'createdAt'>;
type TUserKeysNoMetaTwo = Pick<TUser, 'name' | 'email'>;

enum Color {
	white = '#fff',
	black = '#000',
}

type ColorTypeKeyOf = keyof typeof Color;

//~ Infer - Определяет тип но только в условных типах

type TryInfer<T extends object = object> = T extends infer R ? R : never;

type UserInfer = TryInfer<{ name: 'Aslan'; age: 28 }>;

const inferArray = ['Something', 1, false];
type TInfer<T> = T extends (infer U)[] ? U : never;
type TInferTypeOf = typeof inferArray;
type TValueInfer = TInfer<typeof inferArray>;

const somePersonForInfer = {
	name: 'Aslan',
	age: 28,
};

type TInferPerson<T> = T extends { [key: string]: infer U } ? U : never;
type TInferOne = typeof somePersonForInfer;
type TInferTwo = TInferPerson<TInferOne>

interface ICatTypeAnimal {
	say: () => 'meow' 
}
class AnimalCat implements ICatTypeAnimal {
	say(): 'meow' {
		return 'meow'
	}
}
interface IDogTypeAnimal {
	say: () => 'woof';
}
class AnimalDog implements IDogTypeAnimal {
	say(): 'woof' {
		return 'woof';
	}
}

interface IAnimalClass<T> {
	new (): T
}


function createObjectAnimal<T>(classType: IAnimalClass<T>): T {
	return new classType();
}

const petCat = createObjectAnimal<ICatTypeAnimal>(AnimalCat);
const petDog = createObjectAnimal<IDogTypeAnimal>(AnimalDog);