import readline from 'readline';

const terminalInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

terminalInterface.question('What is your name? ', (answer) => {
    console.log('\nanswer:', answer);
    terminalInterface.close();
});
