/**
 * 初始化项目
 * @param {string} name
 */
const inquirer = require('inquirer'),
  fs = require('fs'),
  path = require('path'),
  colors = require('colors');

module.exports = async function () {
  const answers = await inquirer.prompt([
    {
      name: 'name',
      message: '项目名称',
      validate: (val) => val.length > 0
    },
    {
      name: 'api_domain',
      message: 'API域名(采用JSON交互)',
      default: 'tjwstcsd.1haomei.com',
      validate: (val) => val.length > 0
    },
    {
      name: 'rpc_domain',
      message: 'RPC域名(采用hprose交互)',
      default: 'gatewst.1haomei.com',
      validate: (val) => val.length > 0
    }
  ]);
  console.log('正在生成项目配置'.cyan);
  fs.writeFileSync(path.join(process.cwd(), 'project.json'), JSON.stringify(answers), 'UTF-8');
  console.log('项目生成完成'.green);
};