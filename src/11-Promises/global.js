
const axios = {
  _fake(url, data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let responseData = {
          text: `${url} loves you`
        }
        if (url.indexOf('it-kamasutra') > 0) {
          responseData = {
            requestedCount: data.count,
            message: 'We will prepare students for you',
          }
        } else if (url.indexOf('google') > 0) {
          responseData = {
            vacancies: 12
          }
        } else if (url.indexOf('microsoft') > 0) {
          responseData = {
            vacancies: 21
          }
        }
        resolve({
          request: {},
          status: 200,
          headers: {},
          config: {},
          data: responseData
        })
      }, 1000)
    })
  }
}


export const findUserInDB = (id) => {
  return new Promise((resolve, reject) => {
    const users = [
      { id: 1, name: 'Dima', friend: 4 },
      { id: 2, name: 'Sveta', friend: null },
      { id: 3, name: 'Valera', friend: 2 },
    ]

    const user = users.find(u => u.id === id);
    if (user !== undefined) {
      resolve(user);
    } else {
      reject('User not found');
    }
  })
}


// console.log(findUserInDB(2));