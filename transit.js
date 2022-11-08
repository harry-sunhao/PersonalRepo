/*
[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/subscribers?$ url script-response-body https://raw.githubusercontent.com/harry-sunhao/PersonalRepo/main/transit.js
[mitm] 
hostname = api.revenuecat.com
*/


var text = '{"com.samvermette.Transit.royale.group2.annual":{"auto_resume_date":null,"billing_issues_detected_at":null,"expires_date":"2024-01-07T17:05:15Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2022-11-07T17:05:17Z","ownership_type":"PURCHASED","period_type":"trial","purchase_date":"2022-11-07T17:05:15Z","refunded_at":null,"store":"app_store","unsubscribe_detected_at":null}}';
var text1 = '{"Royale":{"expires_date":"2024-01-07T17:05:15Z","grace_period_expires_date":null,"product_identifier":"com.samvermette.Transit.royale.group2.annual","purchase_date":"2022-11-07T17:05:15Z"}}';
var obj = JSON.parse($response.body);
obj.subscriber.subscriptions = text;
obj.subscriber.entitlements = text1;
obj.subscriber.management_url = 'https://apps.apple.com/account/subscriptions';
$done({body: JSON.stringify(obj)});
