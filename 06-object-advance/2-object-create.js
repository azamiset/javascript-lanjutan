// 1. Cara membuat object optimal memori secara manual
/*
  const methodMahasiswa = {
    makan: function (porsi) {
      this.energi += porsi;
      console.log(`Halo ${this.nama}, selamat makan!`);
    },

    main: function (jam) {
      this.energi -= jam;
      console.log(`Halo ${this.nama} selamat bermain!`);
    },

    tidur: function (jam) {
      this.energi += jam * 2;
      console.log(`Halo ${this.mahasiswa}, selamat tidur!`);
    }
  }

  function Mahasiswa(nama, energi) {
    let mahasiswa = {};

    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    mahasiswa.makan = methodMahasiswa.makan;
    mahasiswa.main = methodMahasiswa.main;
    mahasiswa.tidur = methodMahasiswa.tidur;

    return mahasiswa;
  }

  let azami = Mahasiswa('azami', 35);
*/


// 2. Cara membuat object optimal memori secara otomatis

const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },

  main: function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama} selamat bermain!`);
  },

  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, selamat tidur!`);
  }
}

function Mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa);

  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
}

let wandy = Mahasiswa('wandy', 25);
