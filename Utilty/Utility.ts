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
