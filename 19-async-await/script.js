// Asynchronous Function

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 3000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve('selesai');
      }, waktu)
    } else {
      reject('kelamaan');
    }

  })
}

async function cobaAsync() {
  try {
    const coba = await cobaPromise()
    console.log(coba);
  } catch (error) {
    console.log(error);
  }
}