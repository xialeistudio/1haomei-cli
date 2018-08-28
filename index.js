const commander = require('commander'),
  init = require('./init');
const pkg = require('./package.json');
// init
commander.command('init').description('初始化项目').action(init);

commander.version(pkg.version);
commander.parse(process.argv);