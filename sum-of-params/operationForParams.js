import { OPERATION_OPTIONS } from './constants.js';

const sumOfParams = (numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
};

const multiplicationOfParams = (numbers) => {
    return numbers.reduce((multiplication, num) => multiplication * num, 1);
};

export default function operationForParams(operation, numbers) {
    if (!Object.values(OPERATION_OPTIONS).includes(operation)) {
        console.log('Operation is not supported!');

        return;
    }

    if (!numbers.length) {
        console.log(`There is nothing to ${operation}`);

        return;
    }

    if (operation === OPERATION_OPTIONS.add) {
        console.log(sumOfParams(numbers));

        return;
    }

    if (operation === OPERATION_OPTIONS.multiply) {
        console.log(multiplicationOfParams(numbers));

        return;
    }
}
