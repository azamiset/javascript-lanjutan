// rest parameter

//  mengambil sisa nilai dari parameter
/* 
function nilai(a, b, ...sisa) {
  console.log(a);
  console.log(b);
  console.log(sisa);
}
nilai(1, 2, 3, 4, 5, 6, 7)
 */

// menjumlahkan semua angka
/* 
function jumlahkan(...angka) {
  return angka.reduce((a, b) => a + b);
}
console.log(jumlahkan(1,2,3,4,5));
 */

// array destructuring
/* 
const k1 = ['Sandhika', 'Doddy', 'Erik', 'Fajar', 'Hany'];
const [ketua, wakil, ...anggota] = k1;
console.log(ketua);
console.log(wakil);
console.log(anggota);
 */

// object destructuring
/* 
const team = {
  pm: 'Sandika',
  frontEnd: 'Doddy',
  backEnd: 'Erik',
  ux: 'Hendra',
  devOps: 'fajar'
}

const { pm, ...myTeam } = team;
console.log(myTeam);
 */

// filtering
// saring value berdasarkan type
function filterBy(type, ...values) {
  return values.filter(v => typeof v === type);
}

console.log(filterBy('number', 1, 2, 'Sandhika', false, 10, true, 'doddy'));

console.log(filterBy('string', 1, 2, 'Sandhika', false, 10, true, 'doddy'));

console.log(filterBy('boolean', 1, 2, 'Sandhika', false, 10, true, 'doddy'));








