# iPhone X stock alert cn
针对中国Apple Store 到店预约iPhone X的库存到货提醒

## 安装
1. 安装[nodejs](https://nodejs.org/en/download/)
2. 下载并解压[代码](https://github.com/bin-y/iphone_x_stock_alert_cn/archive/master.zip)
3. 在解压目录命令`npm install request`

## 使用方法
1. 修改代码中的config内容，city为目标城市，model为目标型号，chekc_interval为检查间隔（单位毫秒）
2. 在解压目录命令行执行`node main.js`开始监控，当指定城市有直营店可以预约时会弹出窗口提示`X on stock!!!`

## 型号列表
```
银色 256G: MQA92CH/A
银色 64G : MQA62CH/A
灰色 256G: MQA82CH/A
灰色 64G : MQA52CH/A
```
