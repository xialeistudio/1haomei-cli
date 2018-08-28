'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { 'default': mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
var commander_1 = __importDefault(require('commander'));
var init_1 = __importDefault(require('./init'));
var pkg = require('../package.json');
// help
commander_1.default.version(pkg.version);
// init
commander_1.default.command('init').description('初始化项目').action(init_1.default);
// run
commander_1.default.parse(process.argv);
