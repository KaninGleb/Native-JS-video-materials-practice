import {findUserInDB} from "./index1.js";


findUserInDB(1)
  .then(user => user.name)
  .then(name => {
    // console.log(name)
    return 100
  })
  .then(number => {
    // console.log(number)
    return {value: number + 1};
  })
  .then(obj => {
    // console.log(obj.value)
    return Promise.resolve(obj.value + 1)
  })
  .then(number => {
    // console.log(number)
    return number + 1
  })


// Callback Hell
findUserInDB(1)
  .then(user => {
    // console.log(user);
    findUserInDB(user.friend)
      .then(user => {
        // console.log(user);
        findUserInDB(user.friend)
          .then(user => {
            // console.log(user);
          })
      })
  })

findUserInDB(1)
  .then(user => {
    // console.log(user);
    return user;
  })
  .then(user => findUserInDB(user.friend))
  .then(friend1 => {
    // console.log(friend1);
    return friend1;
  })
  .then(friend1 => findUserInDB(friend1.friend))
  .then(friend2 => {
    // console.log(friend2.name)
  })