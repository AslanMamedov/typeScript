//!- Utility - Для преобразование базовых типо
//~ Readonly - Создает тип который все свойства будут предназначенный для чтения

interface IReadOnly {
	name: string;
	age: number;
}

const readOnlyUser: Readonly<IReadOnly> = {
	name: 'Aslan',
	age: 28,
};

// readOnlyUser.name = 'Max' Error

//~ Required - Создает тип который все поля типа становятся обязателбьными

interface IRequired {
	name?: string;
	age?: number;
}

const requiredUserWithout: IRequired = {}; // Not Error

// const requiredUser: Required<IRequired> = {}; // Error

//~ Record<K, T> - Утилита который создает тип с набором типов
//! K - Типы для ключей обьекта
//! T - Типы для значений обьекта

interface IPageInfo {
	title: string;
}

type Page = 'home' | 'about' | 'contact';

const page: Record<Page, IPageInfo> = {
	home: { title: 'home' },
	about: { title: 'about' },
	contact: { title: 'contact' },
};

//~ Pick<T, K> - Создает тип у типа которого он забрал ключи
//! T - Тип у которого нужно забрать
//! K - Ключи которые нужно забрать
interface ITodo {
	title: string;
	description: string;
	completed: boolean;
}

type TodoPreview = Pick<ITodo, 'title' | 'completed'>;

const todo: TodoPreview = {
	title: 'Learn TypeScript',
	completed: true,
};

//~ Omit<T, K> - Позволяет удаляет ненужное свойство у обьекта
//! T - Тип у которого нужно убрать
//! K - Ключи которые нужно убрать

interface ITodoOmit {
	title: string;
	description: string;
	completed: boolean;
}

type TodoPreviewOmit = Omit<ITodoOmit, 'completed'>;

const todoOmit: TodoPreviewOmit = {
	title: 'Learn TypeScript',
	description: 'I learned TypeScript',
};

//~ Exclude<T, U> - Исключает все типы которые передается вторым аргументом
type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // b | c
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; // c
type T2 = Exclude<string | number | (() => void), Function>; // string | number

//~ Extract<T, U> - Оставляет тип которую передали
type T3 = Extract<'a' | 'b' | 'c', 'a' | 'f'>; // a
type T4 = Extract<string | number | (() => void), Function>; // () => void

//~ NonNullable<T> - Удаляет все не сушествующие тип
type T5 = NonNullable<string | number | undefined>; // string | undefined
type T6 = NonNullable<string[] | null | undefined>; // string[]

//~ ReturnType<T> - Создает тип которуб возвращает функцией типа

declare function f1(): {
	a: number;
	b: string;
};

type T7 = ReturnType<() => string>; // string
type T8 = ReturnType<(a: string) => void>; // void
type T9 = ReturnType<<T>() => T>; // unknown
type T10 = ReturnType<<T extends X, X extends number[]>() => T>; // number[]
type T11 = ReturnType<typeof f1>; // {a: number, b: string}
type T12 = ReturnType<any>; // any
type T13 = ReturnType<never>; // any
// type T14 = ReturnType<string>; // Error
// type T14 = ReturnType<Function>; // Error

//~ InstanceType<T> - Создаем тип из типов экземпляра функции конструктора

class C {
	x = 0;
	y = 0;
}

type T14 = InstanceType<typeof C>; // C
type T15 = InstanceType<any>; // any
type T16 = InstanceType<never>; // never
// type T17 = InstanceType<string> // any
// type T18 = InstanceType<Function> // Error

//~ Partial - Сделает все поля обьекта опциональными

interface IPartial {
	name: string;
	age: number;
	isMarried: boolean;
}

type PartialOptions = Partial<IPartial>;

const partialPersonOne: PartialOptions = {};
const partialPersonTwo: Partial<IPartial> = {
	name: 'Aslan',
	isMarried: false,
};

//~ Parameters - Получает тип кортежа аргументов функции

function parametersUtility(name: string, age: number): void {}

type Parameter = Parameters<typeof parametersUtility>;

//~ ConstructorParameters - Позволяет получить тип данныз из аргументов конструктора

class ConstructorParametersType {
	constructor(public name: string, public age: number, public isMarried: boolean, public year: number) {}
}
type ConstructorParameter = ConstructorParameters<typeof ConstructorParametersType>;

//~ Awaited - Выполняет развертывания промисов

declare function fetch(): Promise<string>;

type fetchType = Awaited<ReturnType<typeof fetch>>;

//! Uppercase | Lowercase | Capitalize | Uncapitalize

type NameUppercase = Uppercase<'name'>; //~ NAME
type NameLowercase = Lowercase<'NAME'>; //~ name
type NameCapitalize = Capitalize<'name'>; //~ Name
type NameUncapitalize = Uncapitalize<'Name'>; //~ name

//! Utility

//~ Partial
type PerosnOne = { name: string; age: number };
type PersonTwo = Partial<PerosnOne>;

type MyPartial<T> = { [P in keyof T]?: T[P] };
type MyPersonPArtial = MyPartial<PerosnOne>;

//~ Required
type AnimalOne = { name?: string; weight?: number };
type AnimalTwo = Required<AnimalOne>;

type MyRequired<T> = { [P in keyof T]-?: T[P] };
type MyAnimalRequired = MyRequired<AnimalOne>;

//~ NonNullable
type ColorOne = string | null | undefined;
type ColorTwo = NonNullable<ColorOne>;

type MyNonNullable<T> = T extends null | undefined ? never : T;
type MyColorNonNullabl = MyNonNullable<ColorOne>;

//~ Record
type DimensionsOne = { width: number; height: number; length: number };
type DimensionsTwo = Record<'width' | 'height' | 'length', number>;

type Any = keyof any; //~ string | number | symbol
type MyRecord<K extends keyof any, T> = { [P in K]: T };

type MyDimensions = MyRecord<'width' | 'height' | 'length', number>;

//~ Readonly

type ArticleOne = { title: string; page: number };
const articleOne: ArticleOne = { title: 'ARTICLE', page: 1 };

type ArticleTwo = Readonly<ArticleOne>;

type MyReadonly<T> = { readonly [P in keyof T]: T[P] };

type MyArticle = MyReadonly<ArticleOne>;

const articleOneAsConst = { title: 'ARTICLE', page: 1 } as const;
const articleOneAsConstGeneric = <const>{ title: 'ARTICLE', page: 1 };

//~ ReadonlyArray

type ArticlesOne = Array<ArticleOne>;

const articleArrayOne: ArticlesOne = [
	{
		title: 'Article Array 2',
		page: 2,
	},
	{
		title: 'Article Array 3',
		page: 3,
	},
	{
		title: 'Article Array 4',
		page: 4,
	},
];
articleArrayOne.push({
	title: 'Article Array 5',
	page: 5,
});

type ArticlesTwo = ReadonlyArray<ArticleOne>;

const articleArrayTwo: ArticlesTwo = [
	{
		title: 'Article Array 6',
		page: 6,
	},
];
const articleArrayThree = [
	{
		title: 'Article Array 7',
		page: 7,
	},
] as const;

function readOnlyArrayFnOne(arr: ReadonlyArray<string>): void {}
function readOnlyArrayFnTwo(arr: readonly string[]): void {}


//~ Pick
type VectorOne = { x: number, y: number, z: number } 
type VectorTwo = Pick<VectorOne, 'x' | 'y'>

type MyPick<T, K extends keyof T> = { [P in K]: T[P] }

type VectorThree = MyPick<VectorOne, 'x' | 'z'>

//~ Extract
type TA = string | number | boolean
type TB = string | number
type TC = Extract<TA, TB>

type MyExtract<T, U> = T extends U ? T : never
type TD = MyExtract<TA, TB>

//~ Exclude

type TE = Exclude<TA, TB>
type MyExclude<T, U> = T extends U ? never : T

type TS = MyExclude<TA, TB>

//~ Omit

type TPersonOne = { name: string; age: number; weight: number; height: number };
type TPersonTwo = Omit<TPersonOne, 'weight' | 'height'>;

type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

type TPersonThree = MyOmit<TPersonOne, 'name' | 'age'>;

//~ Parameters

function FnOne(a: string, b: number): boolean {
	return a.length > b.toString().length
}

class ClassOne {
	a: boolean
	b: string

	constructor(a: boolean, b: string) {
		this.a = a
		this.b = b
	}
}

type TFnOne = typeof FnOne
type TClassOne = typeof ClassOne

type TCPFn = Parameters<TFnOne>


type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never 

type TAPFn = MyParameters<TFnOne>;


//~ ConstructorParameters

type TEConstructor = ConstructorParameters<TClassOne>; 

type MyConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;

type TEConstructorClass = MyConstructorParameters<TClassOne>;

//~ ReturnType

type G = ReturnType<TFnOne>;

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer P ? P : any;

type GReturnType = MyReturnType<TFnOne>;

//~ InstanceType

type I = InstanceType<TClassOne>;

type MyInstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer P ? P : any;

type ICLass = MyInstanceType<TClassOne>;