//#region  process.env[variable]
// import dotenv from 'dotenv';

// dotenv.config();

// if (+process.env.X === 5) {
//     console.log('huray');
// }
//#endregion

//#region path.resolve
// import path from 'path';

// console.log(path.resolve('./src/app.js'));
// console.log(path.resolve('./src'));
//#endregion

//#region minimist
// import minimist from 'minimist';

// const argv = minimist(process.argv.slice(2));
// const userName = argv.name;

// if (userName) {
//     console.log(`Hello, ${userName}`);
// }
//#endregion

//#region readline (stdin / stdout)
// import readline from 'readline';

// const terminalInterface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// terminalInterface.question("What's your name? ", (answer) => {
//     const userName = answer || 'stranger';

//     console.log(`Hello, ${userName}`);
//     terminalInterface.close();
// });
//#endregion
