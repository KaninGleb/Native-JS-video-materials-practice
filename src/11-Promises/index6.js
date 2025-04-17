import {findUserInDB} from "./index1.js";


// findUserInDB(1).then(user => {
//   console.log(user.name)
// })


function getNumber() {
  // return Promise.resolve( Math.random() )

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random())
    }, 2000)
  })
}

getNumber().then(n => console.log(n));
getNumber().then(n => console.log(n));


const repo = {
  save(data) {
    try {
      localStorage.setItem("some-key", JSON.stringify(data));
    } catch (error) {
      return false;
    }
    return true;
  },
  read() {
    const data = localStorage.getItem("some-key")
    if (!data) {
      return null;
    } else {
      return JSON.parse(data);
    }
  },
  saveAsync(data) {
    const promise = new Promise((resolve, reject) => {
      try {
        localStorage.setItem("some-key", JSON.stringify(data));
        resolve(true);
      } catch (error) {
        reject(error);
      }
    })
    return promise;
  },
  readAsync(data) {
    return new Promise((resolve, reject) => {
      const data = localStorage.getItem("some-key")
      if (!data) {
        resolve(null)
      } else {
        resolve(JSON.parse(data))
      }
    })
  }
}

// const result = repo.save({name: 'IT'})
// if (result) {
//   console.log('Success')
// } else {
//   console.warn('Success')
// }


// const run = async () => {
//   repo.saveAsync({name: 'IT'})
//     .then(() => console.log('SAVED'))
//     .catch(error => console.warn('NOT SAVED: ' + error))
// }

const result = repo.save({name: 'IT'})
console.log('SAVED')
const data = repo.read()
console.log(data)

const run = async () => {
  await repo.saveAsync({name: 'IT'})
  console.log('SAVED')

  const data = await repo.readAsync()
  console.log(data)
}

run()