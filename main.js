'use strict';

const request = require('request');
const cp = require('child_process');

const config = {
    city: "北京",
    model: "MQA92CH/A", // sliver 256g
    check_interval: 1000
};

var stores = {};
const headers = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko" };

function check_stock() {
    request({
        url: "https://reserve-prime.apple.com/CN/zh_CN/reserve/iPhoneX/availability.json",
        headers: headers,
        method: 'GET',
    }, function (err, response, data) {
        if (data) {
            var all_stores = JSON.parse(data)["stores"];
            for (var storeNumber in stores) {
                var stock = all_stores[storeNumber][config.model].availability;
                console.log(stores[storeNumber].storeName, stock);
                if (stock.unlocked || stock.contract) {
                    cp.execSync("msg \"%username%\" X on stock!!!");
                }
            }
        }
        setTimeout(check_stock, config.check_interval);
    });
}

request({
    url: "https://reserve-prime.apple.com/CN/zh_CN/reserve/iPhoneX/stores.json",
    headers: headers,
    method: 'GET',
}, function (err, response, data) {
    if (data) {
        var all_stores = JSON.parse(data)["stores"];
        all_stores.forEach(function(store) {
            if (store.city == config.city) {
                stores[store.storeNumber] = store;
            }
        }, this);
        console.log(stores);
        check_stock();
    }
});