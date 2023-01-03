import minimist from 'minimist';

// NOTE: it's better to use --name=Ivan, since this variant allows to have long var names
const argv = minimist(process.argv.slice(2));

console.log(argv);
