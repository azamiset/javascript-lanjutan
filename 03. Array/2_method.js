
// Method pada Arrya


{
  var arr = ['wandy', 'azami', 'vanissa', 'fajar'];
  // 1. join : menggabungkan elemen array menjai satu string
  console.log(arr.join(' - '));
}

{
  var arr = ['wandy', 'azami', 'vanissa', 'fajar'];
  // 2. push & pop : menambahkan & menghapus nilai di element terakhir
  arr.push('yosep', 'dodol');
  arr.pop();

  console.log(arr.join(' - '));
}

{
  var arr = ['wandy', 'azami', 'vanissa', 'fajar'];
  // 3. unshift & shift : menambahkan & menghapus nilai di element awal
  arr.unshift('bobby');
  arr.shift();
  console.log(arr.join(' - '));
}

{
  var arr = ['wandy', 'azami', 'vanissa', 'fajar'];
  // 4. splice : menambahkan nilai di tengah element
  // splice(indexAwal, mauDihapusBerapa, elementBaru1, elementBaru2, ...)

  arr.splice(1, 2, 'roby', 'icha');
  console.log(arr.join(' - '));
}

{
  var arr = ['wandy', 'azami', 'vanissa', 'fajar'];
  // 5. slice : mengambil nilai ditengah element lalu memasukan ke array baru
  // slice(awal, akhir);
  var arr2 = arr.slice(1, 4);
  console.log(arr.join(' - '));
  console.log(arr2.join(' - '));
}
