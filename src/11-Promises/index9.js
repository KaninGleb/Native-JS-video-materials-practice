const api = {
  async save() {

  },
  // read () {
  //   return Promise.resolve({ name: 'it-kamasutra' });
  // }

  async read () {
    return { name: 'it-kamasutra' };
  }
}

async function xxx() {
  return 100500;
}

async function run() {
  await api.save();
  // console.log('Saved')
  let data = await api.read();
  // console.log('Read:', data);


  let a = xxx();
  // console.log('Read 2:', a);

}

run();