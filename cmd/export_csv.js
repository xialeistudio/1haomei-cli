const fs = require('fs'),
  path = require('path'),
  inquirer = require('inquirer');

module.exports = async function () {
  let { filename } = await inquirer.prompt([
    { name: 'filename', message: '待转换JSON路径', validate: (val) => val.length > 0 }
  ]);
  filename = path.join(process.cwd(), filename);
  const data = require(filename);
  // 读取keys
  if (data.length === 0) {
    console.log('json无数据'.red);
    process.exit(0);
  }
  console.log(`成功读取${data.length}个商品`.green);
  const keys = Object.keys(data[0]);
  // 处理数据
  const result = data.map(item => {
    const ret = [];
    keys.forEach(key => ret.push(item[key]));
    return ret.join(',');
  });
  result.unshift(keys.join(','));
  fs.writeFileSync(path.join(process.cwd(), 'export.csv'), result.join('\n'), 'UTF-8');
  console.log('写入商品成功'.green);
};