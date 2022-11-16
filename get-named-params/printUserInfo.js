export default function printUserInfo({ name, age, lastname }) {
    const fomattedLastname = lastname ? ` ${lastname}` : '';

    console.log(`${name}${fomattedLastname} is ${age}`);
}
