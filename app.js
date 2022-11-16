//#region native process.env (X=1 node app.js)
// console.log('process.env', process.env);
// console.log('process.env.X', process.env.X);
//#endregion

//#region  process.env[variable]
// import dotenv from 'dotenv';

// dotenv.config();

// if (+process.env.X === 5) {
//     console.log('huray');
// }
//#endregion

//#region path.resolve
// console.log('process.env.PATH', process.env.PATH);
// console.log('-----');
// console.log(require.resolve.paths('a'));
// console.log(path.resolve('./src'));
//#endregion

//#region native argv (node app.js x=1 y=2)
// console.log('process.argv', process.argv.slice(2));
//#endregion

//#region minimist
// import minimist from 'minimist';

// const argv = minimist(process.argv.slice(2));
// console.log('argv', argv);

// NOTE: for long var names use -- instead of - (optimal --name=Ivan)
// const userName = argv.name;

// if (userName) {
//     console.log(`Hello, ${userName}`);
// }
//#endregion

//#region readline (stdin / stdout)
import readline from 'readline';

const terminalInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

terminalInterface.question('What is your name? ', (answer) => {
    console.log('Hello,', answer || 'stranger');
    terminalInterface.close();
});
//#endregion
