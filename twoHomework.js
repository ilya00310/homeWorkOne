// 1) метод OPTIONS описывает параметры соединения с сервером, позволяет получить заголовок allow, описывающий доступные методы для ресурса,
// принимает либо URL, либо * (весь сервер)

// 5)
const stringOne = 'one';
const stringTwo = 1 + '';
const numberOne = 1;
const numberTwo = +'1';
const booleanOne = Boolean('')
const booleanTwo = false;
const nullTwo = null;
const undefinedOne = undefined;
const symbolTwo = Symbol('f')
const bigintOne = BigInt(123)
console.log(typeof(bigintOne))
// 6)
console.log( "B" + "a" + (1 - "hello")); // "BaNAN"
console.log((true && 3) + "d"); // "3d"
console.log(Boolean(true && 3) + "d"); //"trued"
console.log(NaN + 1) // NaN
console.log(NaN + 'o') // "NaNо"        
console.log(undefined + 1) // NaN
console.log(undefined - 1) // NaN
console.log(null + 1) // 1
console.log(null / 5) // 0
console.log(5 / undefined) // NaN
console.log(-5 / null) // NaN
console.log(null == 0) // false
console.log(null == '') // false
console.log(null > 0) // false
console.log(null >= 0) // false
console.log(null == '') // false
console.log('foo' + + 'bar') // 'fooNaN'
console.log('11' + '1' - 1) // 110
console.log(typeof Object) // function
console.log(typeof Math) // object
console.log(new String('foo')=='foo') // true
console.log(new String('foo')==='foo') // false