// Hint: use setInterval, create a new Promise and measure time with Date.now()

const MAXTIME = 2000;

export function delay(time) {
  const startTime = Date.now();
  return new Promise((resolve, reject) => {
    if (time > MAXTIME) {
      reject(new Error('This time is too much !'));
    } else {
      setTimeout(() => {
        resolve(Date.now() - startTime);
      }, time);
    }
  });
}

export function asyncDelay(time) {
  return delay(time);
}
