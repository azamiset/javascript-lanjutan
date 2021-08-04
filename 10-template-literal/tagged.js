// Tegged Template
const nama = 'Aswad Zami';
const umur = 31;
const email = 'aswad@gmail.com';

/*
function coba(strings, ...values) {
  let result = '';
  strings.forEach((str, i) => {
    result += `${str}${values[i] || ''}`
  });
  return result;
}
*/

/*
function coba(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
}
*/

function coba(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}.`;
// console.log(str);
document.body.innerHTML = str;