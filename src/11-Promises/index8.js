import {findUserInDB} from "./global.js";


findUserInDB(1)
  .then(user => {
    // console.log(user);
    return user.friend;
  })
  .then(friendId => findUserInDB(friendId))
  .catch(() => {
    return { name: 'Friend Bot', friend: 3 }
  })
  .then(friend1 => {
    // console.log(friend1.name);
    return friend1.friend;
  })
  .then(friendId => findUserInDB(friendId))
  .then(friend2 => {
    // console.log(friend2.name)
  })
  .catch(error => {
    // console.log(error)
  })


async function run() {
  try {
    const user = await findUserInDB(1)
    // console.log(user.name)

    let friend1;
    try {
      friend1 = await findUserInDB(user.friend)
    } catch (error) {
      friend1 = { name: 'Friend Bot', friend: 3 }
    }
    // console.log('friend1.name:', friend1.name)
    const friend2 = await findUserInDB(friend1.friend)
    // console.log(friend2.name)
  } catch (error) {
    // console.warn(error)
  }
}

run()