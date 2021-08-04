// 1. Pemanggilan Object

// cara 1 - function declaration
function haloA() {
	console.log('halo A');
}
haloA();



// cara 2 - object literal
var objA = {};
objA.halo = function () {
	console.log('halo obj A');
}
objA.halo();



// cara 3 - constructor
function HaloB() {
	console.log('halo B');
}
new HaloB();


// 2. this

// 1 context this pada global
// 1.1 this dipanggil langsung atau variabel
console.log(this);
// console.log(window); // error
var a = 10
console.log(a);
console.log(this.a);
// console.log(window.a); // error



// 1.2 this dipanggil dengan function declaration
function haloC() {
	console.log(this);
	console.log('halo C');
}
haloC();
// this.halo(); / error
// window.haloC(); / error
// this mengembalikan object global



// 2 context this pada local
// 2.1 panggil this dalam object literal
var objB = { a: 10, nama: 'wandy' };
objB.halo = function () {
	console.log(this);
	console.log('halo obj B');
}
objB.halo();
// this mengembalikan object yang bersangkutan



// 2.2 panggil this dalam function contructor
function HaloD() {
	console.log(this);
	console.log('halo D');
}
new HaloD();
var obj1 = new HaloD();
var obj2 = new HaloD();
	// this mengembalikan object yang baru dibuat
