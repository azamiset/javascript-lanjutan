// Spread operator

// memencah object iterable menjai singel elemen
/*
const mhs = ['sandhika', 'doddy', 'erik']
console.log(...mhs);
console.log(...mhs[0]);
*/


// menggabungkan 2 arry
/*
const mhs = ['sandhika', 'doddy', 'erik']
const dosen = ['ade', 'jamal', 'rudy']
const orang = [...mhs, 'Aji', ...dosen]
console.log(orang);
*/

// mencopy array
/* 
const mhs1 = ['sandhika', 'doddy', 'erik']
const mhs2 = [...mhs1]
console.log(mhs2);
 */

// mengambil text pada element html
/*
const liMhs = document.querySelectorAll('li');
const mhs = [...liMhs].map(m => m.textContent);
console.log(mhs);
*/

// mengedit html
const nama = document.querySelector('.nama')
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;



console.log(huruf);