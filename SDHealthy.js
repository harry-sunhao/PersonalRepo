/*
[rewrite_local]

^https?:\/\/ehtc\.sd12320\.gov\.cn\:4431\/wxHealthAccessService\/txzUser\/getNucleicAcidImp.do?$ url script-response-body https://raw.githubusercontent.com/harry-sunhao/PersonalRepo/main/SDHealthy.js
[mitm] 
hostname = ehtc.12320.gov.cn
*/
function dateFormat (date, format = 'YYYY-MM-DD HH:mm:ss') {
    const config = {
        YYYY: date.getFullYear(),
        MM: date.getMonth(),
        DD: date.getDate() - 1,
        HH: Math.round(Math.random()*(22-16)+16),
        mm: date.getMinutes(),
        ss: date.getSeconds(),
    }
    for(const key in config){
        format = format.replace(key, config[key])
    }
    return format
}

var text = '{"success":true,"msg":null,"data":[{"result":"阴性","name":"东营市人民医院","time":"2022-05-11 15:08:15"},{"result":"阴性","name":"东营市人民医院","time":"2022-05-04 18:24:05"},{"result":"阴性","name":"东营市人民医院","time":"2022-04-30 13:06:43"}],"code":0}';
var obj = JSON.parse(text);
obj.data[0].time = dateFormat(new Date());

$done({body: JSON.stringify(obj)});
