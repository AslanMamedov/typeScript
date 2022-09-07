//! keyof - Возвращает ключи типов

interface IPersonOperators {
	name: string;
	age: number;
}

type PersonKeys = keyof IPersonOperators;

const names: PersonKeys = 'age';

type TUser = {
	_id: number
	name: string
	email: string
	createdAt: Date	
}

type TUserKeysNoMeta = Exclude<keyof TUser, '_id' | 'createdAt'>
type TUserKeysNoMetaTwo = Pick<TUser, 'name' | 'email'>

