// contoh 1:
/* 
let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve('Janji telah ditepati');
  } else {
    reject('Ingkar Janji');
  }
});

janji1
  .then(response => console.log('OK : ' + response))
  .catch(response => console.log('Not OK : ' + response));
 */


// contoh 2:
/* 
let ditepati = true;
const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve('Ditepati setelah beberapa waktu');
    }, 2000);
  } else {
    setTimeout(() => {
      resolve('Tidak ditepati setelah beberapa waktu')
    }, 2000);
  }
});

console.log('mulai');
console.log(janji2.then(() => console.log(janji2)));
console.log('selesai');
 */


// contoh 3: menggunkan method Promise.all();

// promise 1
const film = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      judul: 'Avengers',
      sutradar: 'Sandhika Galih',
      pemeran: 'Doddy, Eko'
    }])
  }, 1000);
});

// promise 2
const cuaca = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      kota: 'Bandung',
      temp: 26,
      kodisi: 'Cerah Berawan'
    }])
  }, 500);
});

// Jalankan beberapa promise sekaligus
Promise.all([film, cuaca])
  // .then(response => console.log(response));
  .then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  })