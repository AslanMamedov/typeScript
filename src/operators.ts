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

enum Color {
	white = '#fff',
	black = '#000'
}

type ColorTypeKeyOf = keyof typeof Color;


//~ Infer -

type TryInfer<T extends object = object> = T extends infer R ? R : never;

type UserInfer = TryInfer<{name: "Aslan", age: 28}>
