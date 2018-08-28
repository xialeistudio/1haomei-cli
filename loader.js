/**
 * 首页数据
 */
const hprose = require('hprose'),
  axios = require('axios'),
  path = require('path'),
  fs = require('fs');
// axios拦截器
axios.interceptors.response.use(response => response.data.data, (e) => {
  if (e.response && e.response.data && e.response.data.error) {
    e.message = e.response.data.err_msg;
  }
  return Promise.reject(e);
});
// 加载项目配置
exports.getConfig = function () {
  const filename = path.join(process.cwd(), 'project.json');
  if (!fs.existsSync(filename)) {
    console.log('project.json不存在，请使用init初始化项目'.red);
    process.exit(1);
  }
  return require(filename);
};
// 加载钩子文件
exports.getHooks = function () {
  const filename = path.join(process.cwd(), 'hooks.js');
  if (!fs.existsSync(filename)) {
    return {
      onGoodsDetail: (data) => data
    };
  }
  return require(filename);
};
// 加载商品详情
exports.showGoods = async function (goodsId) {
  const project = exports.getConfig();
  const url = `https://${project.api_domain}/html/shop/index.php/WstInterFace/goodsDetailsServic/goodsDetails`;
  const data = await axios.post(url, {
    goods_id: goodsId,
    distribution: '',
    version: project.version,
    platform: project.platform
  });
  return data[0];
};
// 所有商品分类
exports.allGoodsType = async function () {
  const project = exports.getConfig();
  const url = `https://${project.api_domain}/html/shop/index.php/WstInterFace/GoodsType/getAllGoodsType`;
  const data = await axios.get(url);
  const list = [];
  data.typeSon.forEach(item => {
    item.son.forEach(son => list.push({ id: son.goodstypecode, name: son.goodstypename }));
  });
  return list;
};
// 某个分类商品
exports.allGoodsWithType = async function (typeId) {
  const project = exports.getConfig();
  const hooks = exports.getHooks();
  const url = `https://${project.api_domain}/html/shop/index.php/WstInterFace/GetProduct/getProduct`;
  let data = await axios.post(url, {
    data: { goodstypecode: typeId },
    type: 1,
    distribution: '',
    version: project.version,
    platform: project.platform
  });
  data = await Promise.all(data.map(async (item) => exports.showGoods(item.id)));
  return data.map(hooks.onGoodsDetail);
};