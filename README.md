# 1号美数据爬取

## 功能
+ 所有商品

## 命令
+ init 初始化项目
+ products 读取所有商品
+ csv 导出JSON列表为CSV

## 钩子系统
1. 在工作目录新建`hooks.js`

```js
{
    onGoodsDetail(data) { // 商品详情转换
        return data;
    }
}
```

2. 原始商品数据

```json
{
    "id": "8556",
    "is_on_sale": "1",
    "goods_img": "http://yhmbucket.img-cn-qingdao.aliyuncs.com/supply/upload/img/201806/4aab2ddaa5a2ead3cfb4b3a31aa791ad.jpeg",
    "goods_desc": "<p style=\"margin:0;padding:0;\"><img src=\"http://yhmbucket.img-cn-qingdao.aliyuncs.com/supply/upload/img/201808/1533716916_1812.jpg\" title=\"1533716916994074.jpg\" alt=\"59e1d907N7b2d5bc7.jpg\"/></p><p style=\"margin:0;padding:0;\"><img src=\"http://yhmbucket.img-cn-qingdao.aliyuncs.com/supply/upload/img/201806/1528969345_1940.jpg\" style=\"\" title=\"1528969345286585.jpg\"/></p><p style=\"margin:0;padding:0;\"><img src=\"http://yhmbucket.img-cn-qingdao.aliyuncs.com/supply/upload/img/201806/1528969346_7245.jpg\" style=\"\" title=\"1528969346582432.jpg\"/></p><p style=\"margin:0;padding:0;\"><img src=\"http://yhmbucket.img-cn-qingdao.aliyuncs.com/supply/upload/img/201806/1528969346_2501.jpg\" style=\"\" title=\"1528969346213011.jpg\"/></p><p style=\"margin:0;padding:0;\"><img src=\"http://yhmbucket.img-cn-qingdao.aliyuncs.com/supply/upload/img/201806/1528969346_5342.jpg\" style=\"\" title=\"1528969346945715.jpg\"/></p>",
    "special_rank": "0",
    "oldName": "韩国Cosmetea小怪兽气垫EE霜15g",
    "barcode": "8809498360465",
    "brandid": "478",
    "goodstypecode": "00010102",
    "manmoney": "60",
    "jainmoney": null,
    "storecode": "8718597724",
    "spec": "15g",
    "inprice": "0.0000",
    "pid": "87185",
    "goods_model": null,
    "name": "Cosmetea 小怪兽气垫EE霜 15g",
    "price": "165.00",
    "goodsnumber": "1573",
    "rec_id": "0",
    "dlevelproductproportion": "15.00",
    "dlevelfacilitatorproportion": "2.00",
    "dlevelagentproportion": "10.00",
    "proportion_type": "1",
    "market_price": "175.00",
    "distributionCount": 54001,
    "units": "盒",
    "isNewPeople": 0,
    "inventory": "5.00",
    "comments": [
      {
        "user": {
          "name": "前***丽",
          "img": "http://tjwstcsd.1haomei.com/html/shop/Public/Home/images/huiyi.jpg",
          "level": "3"
        },
        "comment": {
          "id": "3386",
          "type": "0",
          "content": "非常不错，5星好评！",
          "commentOffice": null,
          "mutileTime": "1970-01-01 08:00:00",
          "imgs": [],
          "rank": "5",
          "createTime": "2018-08-11 17:00:31"
        }
      }
    ],
    "count": "2",
    "rate": "100.00%",
    "goodsCount": 326
  },
```