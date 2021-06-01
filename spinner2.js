const spinners = ['\r/ ', '\r- ', '\r\\', '\r| ', '\r/ ', '\r- ', '\r\\', '\r| '];
const spinIt = () => {
  let seconds = 1000;
  for (let element of spinners) {
    setTimeout(() => {
      process.stdout.write(element);
    }, seconds);
    seconds += 100;
  } setTimeout(() => {
    process.stdout.write('\n');
  }, seconds + 50 * (spinners.length - 1)
  );
};
spinIt(spinners);




