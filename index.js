#!/usr/bin/env node
const commander = require('commander'),
  init = require('./cmd/init')
  , products = require('./cmd/products'),
  exportCsv = require('./cmd/export_csv');

const pkg = require('./package.json');
// init
commander.command('init').description('初始化项目').action(init);
commander.command('products').description('读取所有商品').action(products);
commander.command('csv').description('转换JSON为CSV').action(exportCsv);
commander.version(pkg.version);
commander.parse(process.argv);