//#region regular readline (async)
// import readline from 'readline';

// const terminalInterface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// await terminalInterface.question('What is your name? ', (answer) => {
//     console.log('\nanswer:', answer);
//     terminalInterface.close();
// });

// console.log('After');
//#endregion

//#region promises readline (sync)
// import readlinePromises from 'readline/promises';

// const terminalInterface = readlinePromises.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const answer = await terminalInterface.question('What is your name? ');

// console.log('\nanswer:', answer);

// terminalInterface.close();
//#endregion
