//  for ..in looping

const mhs = {
  nama: 'Azami',
  umur: 31,
  email: 'azamai@gmail.com'
}

// looping properti pada object
for (m in mhs) {
  console.log(m);
}

// looping value pada object
for (m in mhs) {
  console.log(mhs[m]);
}