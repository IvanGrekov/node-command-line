import minimist from 'minimist';
import printUserInfo from './printUserInfo.js';

const argv = process.argv.slice(2);
const minimistedArgv = minimist(argv);

printUserInfo({
    ...minimistedArgv,
});
