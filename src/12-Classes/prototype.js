// 1 -----------------------------------------------
function DeleteUserAction(userId) {
  this.type = 'DELETE-USER'
  this.payload = {
    userId: userId
  }
}

const action1 = new DeleteUserAction(121212)
const action2 = new DeleteUserAction(333)

// console.log(action1)
// console.log(action2)


// 2 -----------------------------------------------
function User(name, site, dateOfBirth) {
  this.name = name
  this.site = site
  this.dateOfBirth = dateOfBirth
}

User.prototype.hello = function () {
  console.log(`I am ${this.name} from ${this.site}`)
}

const u1 = new User('Dimych', 'it-incubator', new Date(1900, 1, 2))
const u2 = new User('Artem', 'it-incubator', new Date(1900, 10, 12))

// u1.hello()
// u2.hello()
