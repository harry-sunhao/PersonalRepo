/*
[rewrite_local]
^https?:\/\/ehtc\.sd12320\.gov\.cn\:4431\/wxHealthAccessService\/txzUser\/getNucleicAcidImp\.do?$ url script-response-body https://raw.githubusercontent.com/harry-sunhao/PersonalRepo/main/SDHealthy.js
[mitm] 
hostname = ehtc.12320.gov.cn
*/


Date.prototype.format = function (format) {
    var date = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": Math.round(Math.random()*(22-16)+16),
        "m+": Math.round(Math.random()*(59-5)+5),
        "s+": Math.round(Math.random()*(59-5)+5),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
};

var text = '{"success":true,"msg":null,"data":[{"result":"阴性","name":"东营市人民医院","time":"2022-05-11 15:08:15"},{"result":"阴性","name":"东营市人民医院","time":"2022-05-04 18:24:05"},{"result":"阴性","name":"东营市人民医院","time":"2022-04-30 13:06:43"}],"code":0}';
var obj = JSON.parse(text);
var dateTime=new Date();
for (var i=0;i<3;i++)
{ 
    dateTime = dateTime.setDate(dateTime.getDate() - i - 1);
    dateTime = new Date(dateTime);
    print(dateTime.format("YYYY-MM-dd hh:mm:ss"));
    obj.data[i].time = dateTime.format("YYYY-MM-dd hh:mm:ss");

}

$done({body: JSON.stringify(obj)});
