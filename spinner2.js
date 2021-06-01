const spinners = ['\r/ ', '\r- ', '\r\\', '\r| ']
const spinIt = () => {
let seconds = 1000;
for (let element of spinners) {
  setTimeout(() => {
    process.stdout.write(element)
  }, seconds)
    seconds += 200;
  } setTimeout (()=> {
    process.stdout.write('\n')}, seconds + 200*(spinners.length-1)
    )
};
spinIt(spinners);



// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);


// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r|  '); 
// }, 900);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\n'); 
// }, 1200);

