import {findUserInDB} from "./index1.js";
import axios from "axios";


// const promise2 = findUserInDB(1);
//
// const promise2_2 = promise2.then((user) => {
//   return user.name
// })
//
// console.log(promise2_2)

findUserInDB(1)
  .then(user => user.name)


axios.get(findUserInDB(1))
  .then(response => response.data)
  .then(data => {
    // console.log(data)
  })


const makeNASARequest = () => {
  return axios.get(findUserInDB(1))
    .then(response => response.data)
}

makeNASARequest()
  .then(res => {
    // console.log(res)
  })