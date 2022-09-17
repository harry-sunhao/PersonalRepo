/*
[rewrite_local]
^https?:\/\/cat-match\.easygame2021\.com\/sheep\/v1\/game\/map_info\?map_id\=?$ url script-response-body https://raw.githubusercontent.com/harry-sunhao/PersonalRepo/main/Sheep1.js
[mitm]
hostname = cat-match.easygame2021.com
*/
var obj = JSON.parse($response.body);

obj.data = '046ef1bab26e5b9bfe2473ded237b572';

$done({body: JSON.stringify(obj)});
