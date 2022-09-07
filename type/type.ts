//! type - для того что бы задавать свои типы

type StringType = string;
const someTypes: StringType = 'Aslan_1994';

type NumberType = number;
const someNumberForTheType: NumberType = 1_1000_111;

//~ Мы так же можем задать разновидность типов черезе " | ",
type ID = string | number;
let someId: ID = 1;
someId = '1';


//! Guards

function string(x: string | number) {
	if (typeof x === "number") {
		return x.toFixed(2)
	}
	return x.trim()
}


type ColorType = 'succes' | 'danger' | 'warning';

function setColorType(type: ColorType) {

}

setColorType('succes')
setColorType("danger")
setColorType("warning")
