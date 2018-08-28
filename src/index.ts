import commander from 'commander';
import init from './init';

const pkg = require('../package.json');
// help
commander.version(pkg.version);
// init
commander.command('init').description('初始化项目').action(init);
// run
commander.parse(process.argv);