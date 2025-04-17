// import axios from "axios";

const users = [
  { id: 1, name: 'Dima', vacancies: 12 },
]

const findUserInDB = async (id) => {
  return users.find(user => user.id === id);
}


// const promise1 = axios.get('https://google.com');
const promise1 = Promise.resolve({data: { vacancies: 12 }});

promise1
  .then((data) => {
    //console.log(data)
  })

const promise2 = findUserInDB(10)
promise2
  .then((user) => {
    //console.log(user)
  })
  .catch(()=>{})

const otherPromise1 = Promise.all([promise1, promise2])
const otherPromise2 = Promise.allSettled([promise1, promise2])

otherPromise1
  .then((response) => {
    const dataFromGoogle = response[0]
    const userFromDB = response[1]
    // console.log(dataFromGoogle.data.vacancies + ' ; ' + userFromDB.name)
  })
  .catch((error) => {
    // console.log('Initialization failed. Try later:', error)
  })

otherPromise2
  .then((results) => {
    // console.log('.allSettled:', results)
    const dataFromGoogle = results[0].status === 'fulfilled' ? results[0].value : null
    const userFromDB = results[1].value
    // console.log(dataFromGoogle.data.vacancies + ' ; ' + userFromDB.name)
  })