const colors = require("colors");

// colors.enable();
// colors.disable();

console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

const name = "Toni";
console.log(`Hello ${name}`.green);
console.log(colors.yellow(`Hello ${name}`));

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });
   
// outputs red text
console.log("this is an error".error);
 
// outputs yellow text
console.log("this is a warning".warn);

colors.setTheme({
    custom: ['red', 'underline']
  });
   
  console.log('test'.custom);