

let num = 1;

const counter = setInterval(() => {
  // console.log('setInterval:', num)
  num++
  if (num > 3) return clearInterval(counter)
}, 1000)


setTimeout(() => {
  // console.log('setTimeout:', 1);
  setTimeout(() => {
    // console.log('setTimeout:', 2);
    setTimeout(() => {
      // console.log('setTimeout:', 3);
    }, 1000)
  }, 1000)
}, 1000)


function wait (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  await wait(1000);
  // console.log('wait:', 1);

  await wait(2000);
  // console.log('wait:', 2);

  await wait(3000);
  // console.log('wait:', 3);
}

run();