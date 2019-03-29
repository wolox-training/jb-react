// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  const startTime = Date.now();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Date.now() - startTime);
    }, time);
  });
}

export function asyncDelay() {

}
