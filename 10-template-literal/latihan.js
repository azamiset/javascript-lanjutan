// 1. HTML fragments
/*
const mhs = {
  nama: 'Andy',
  umur: 30,
  nrp: '2646338',
  email: 'andy@gmail.com'
}

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="nrp">${mhs.nrp}</span>
</div>`;

document.body.innerHTML  = el;
*/

// 2. looping
/*
let mhs = [
  {
    nama: 'andy',
    email: 'andy@gmail.com'
  },
  {
    nama: 'eko',
    email: 'eko@gmail.com'
  },
  {
    nama: 'frian',
    email: 'frian@gmail.com'
  }
];

const el = `<div class="mhs">
  ${mhs.map(m => `<ul>
    <li>${m.nama}</li>
    <li>${m.email}</li>
  </ul>`).join('')}
</div>`;

document.body.innerHTML = el;
*/

// 3. conditional / ternary
/*
const lagu = {
  judul: 'Kau Adalah',
  penyanyi: 'Isyana Sarasvati',
  feat: 'Rayi Putra'
}

const el = `<div class="lagu">
  <ul>
    <li>${lagu.penyanyi}</li>
    <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
  </ul>
</div>`;

document.body.innerHTML = el;
*/

// nested
// HTML fragment bersarang
const mhs = {
  nama: 'Aswad Zami',
  semester: 5,
  mataKuliah: [
    'Rekayasa Web',
    'Analisis dan perancangan sistem informasi',
    'Pemrograman sistem interkatif',
    'Perancangan sistem Berorientasi Object'
  ]
}

function cetakMataKuliah(mataKuliah) {
  return `
    <ol>
      ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
  `;
}

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="semester">Semester : ${mhs.semester}</span>
  <h4>Mata Kuliah</h4>
  ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;