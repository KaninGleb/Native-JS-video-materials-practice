// 1 -----------------------------------------------
const deleteUser = (userId) => {
  const action = {
    type: 'DELETE-USER',
    payload: {
      userId: userId
    },
  }
  return action
}

const action1 = deleteUser('123123')
const action2 = deleteUser('444444')

// console.log(action1)
// console.log(action2)


// 2 -----------------------------------------------
function commonHello() {
  console.log(`I am ${this.name} from ${this.site}`)
}

const userFabric = (name) => {
  const user = {
    name,
    site: 'it-incubator',
    dateOfBirth: new Date(1900, 1, 2),
    hello: commonHello
  }
  return user
}

const u1 = userFabric('Dimych')
const u2 = userFabric('Artem')

// u1.hello()
// u2.hello()
