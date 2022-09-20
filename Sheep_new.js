/*
[rewrite_local]
^https?:\/\/cat-match\.easygame2021\.com\/sheep\/v1\/game\/map_info_ex\?matchType=.?$ url script-response-body https://raw.githubusercontent.com/harry-sunhao/PersonalRepo/main/Sheep_new.js
[mitm]
hostname = cat-match.easygame2021.com
*/
var obj = JSON.parse($response.body);

obj.data.map_seed = [0,0,0,0];

$done({body: JSON.stringify(obj)});
