import operationForParams from './operationForParams.js';

const argv = process.argv.slice(2);
const [operation, ...rest] = argv;
const numbers = rest.map((char) => +char).filter((char) => isFinite(char));

operationForParams(operation, numbers);
