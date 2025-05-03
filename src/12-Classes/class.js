// 1 ------------------------------------------------
class DeleteUserAction {
  constructor (userId) {
    this.type = 'DELETE-USER'
    this.payload = {
      userId: userId
    }
  }
}

const action1 = new DeleteUserAction(121212)
const action2 = new DeleteUserAction(333)

// console.log(action1)
// console.log(action2)


// 2 ------------------------------------------------
class User1 {
  constructor(name, site, dateOfBirth) {
  this.name = name
  this.site = site
  this.dateOfBirth = dateOfBirth
  }

  hello () {
    console.log(`I am ${this.name} from ${this.site}`)
  }
}

const user1 = new User1('Dimych', 'it-incubator', new Date(1900, 1, 2))
const user2 = new User1('Artem', 'it-incubator', new Date(1900, 10, 12))

// user1.hello()
// user2.hello()


// 3 - Class - constructor values -------------------
class User {
  constructor(name, site, dateOfBirth) {
    this.name = name
    this.site = site
    this.dateOfBirth = dateOfBirth
    this.counter = 0
  }

  hello () {
    this.counter++
    console.log(`I am ${this.name} from ${this.site}`)
  }
}

const u1 = new User('Dimych', 'it-incubator', new Date(1900, 1, 2))
const u2 = new User('Artem', 'it-incubator', new Date(1900, 10, 12))

// u1.hello()
// u2.hello()


// 4 - Getter, Setter -------------------------------
class User2 {
  #name = ''

  constructor(name, site, dateOfBirth) {
    this.name = name
    this.site = site
    this.dateOfBirth = dateOfBirth
    this.counter = 0
  }

  get name () {
    return this.#name
  }

  set name (newName) {
    return this.#name = newName
  }

  hello () {
    this.counter++
    console.log(`I am ${this.#name} from ${this.site}`)
  }
}

const u2_1 = new User2('Dimych', 'it-incubator', new Date(1900, 1, 2))
const u2_2 = new User2('Artem', 'it-incubator', new Date(1900, 10, 12))

u2_1.name = 'Dimych 123'

// console.log(u2_1)
//
// u1.hello()
// u2.hello()


// 5 - Class inheritance ---------------------------
class User3 {
  #name = ''

  constructor(name, site, dob) {
    this.name = name
    this.site = site
    this.dateOfBirth = dob
    this.counter = 0
  }

  get name () {
    return this.#name
  }

  set name (newName) {
    return this.#name = newName
  }

  hello () {
    this.counter++
    console.log(`I am ${this.#name} from ${this.site}`)
  }
}

const u3_1 = new User2('Dimych!!!', 'it-incubator.by', new Date(1988, 1, 2))
const u3_2 = new User2('Artem!!!', 'it-incubator.by', new Date(1988, 10, 12))

u3_1.name = 'Igor!!!'

// let users = [u3_1, u3_2]

// users.forEach(u => u.hello())


class Coder extends User3 {
  constructor(name, site, dob, tech) {
    super(name, site, dob)
    this.tech = tech
  }

  code() {
    console.log(`I am ${this.name}, here is my ${this.tech} code: function sum(a, b) => a + b;`)
  }

  hello() {
    super.hello()
    console.log('Go away')
  }
}

class Hacker extends Coder {
  constructor(a, b, c, d) {
    super();
    this.tech = 'XXX'
    this.name = 'XXXXX'
  }

  code () {
    console.log(`I will hack everything`)
  }
}

const coder1 = new Coder('Dimych Coder!!!', 'it-incubator.by', new Date(1988, 1, 2), 'c#')
// coder1.code()
// coder1.hello()


const hacker1 = new Hacker('Dimych Coder!!!', 'it-incubator.by', new Date(1988, 1, 2), 'c#')
// hacker1.hello()
// hacker1.code()

let users = [u3_1, u3_2, coder1, hacker1]

users.forEach(u => u.hello())
