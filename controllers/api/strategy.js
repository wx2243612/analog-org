'use strict';

const only = require('only');
const Decimal = require('decimal.js');
const trialMarket = require('../../lib/transferStrategys/trialMarket');

module.exports = function (router) {
  
    /**
     * 获取账户资产详情
     * http://localhost:4000/api/strategy/trialNoLimit
     */
    router.get('/trialNoLimit',async function(req, res) {
        try{
            let siteItems = [
                { site: "bitfinex", contractType: "spot"},
                { site: "okex", contractType: "spot"}
            ];
            let positionsInfo = await trialMarket.trialNoLimit(siteItems);
            res.json(positionsInfo);
        } catch (err){
            console.error(err);
            res.json({ isSuccess: false, message: "系统发生错误" });
        }
    });
}