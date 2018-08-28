// 加载所有商品
const loader = require('../loader')
  , colors = require('colors'),
  path = require('path'),
  fs = require('fs');
module.exports = async function () {
  const catetories = await loader.allGoodsType();
  console.log(`成功读取${catetories.length}个分类`.green);
  const list = [];
  for (const category of catetories) {
    const data = await loader.allGoodsWithType(category.id);
    list.push(...data);
    console.log(`读取分类商品[${category.name}]商品数[${data.length}]`.cyan);
  }
  console.log(`写入商品数据...`.cyan);
  const filename = path.join(process.cwd(), 'products.json');
  fs.writeFileSync(filename, JSON.stringify(list), 'utf-8');
  console.log(`写入商品数据完成`.green);
};