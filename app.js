// 引用linebot SDK
var linebot = require('linebot');

// 填入辨識Line Channel的資訊
var bot = linebot({
    channelId: '1577087210',
    channelSecret: 'bcd68f675d0ba744c354ccae4e0ad6ef',
    channelAccessToken: 'caE9AC7NSjZQrfLQkmfegrPv4wzjmHtbuBXe0ozeey/2jOR8F1CWKAekCzfkCg3VexW5UGi1kskM4SxNDlxviDAN8L8omzPrcSiG0pIl3PHr4GiOSVCnEXD1Y4/OL4Plck7WcKGW5BmX41jgSUBh7QdB04t89/1O/w1cDnyilFU='
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
    // event.message.text是使用者傳給bot的訊息
    // 準備要回傳的內容
    var userMessage = event.message.text;
    var replyMsg = '咕嚕靈波（●′∀‵）ノ♡';

    if (userMessage === '!抽') {
        var randomVal = Math.random() * 10000;
        var imageMessage = {
            'type': 'image',
            'originalContentUrl': '',
            'previewImageUrl': ''
          }
        console.log(randomVal);
        if (randomVal > 6666) {
            imageMessage['originalContentUrl'] = 'https://i.imgur.com/z6YWnak.jpg';
            imageMessage['previewImageUrl'] = 'https://i.imgur.com/z6YWnak.jpg';
            // event.reply('彩');
        }
        else if (randomVal > 3333) {
            imageMessage['originalContentUrl'] = 'https://i.imgur.com/W0u0SVO.jpg';
            imageMessage['previewImageUrl'] = 'https://i.imgur.com/W0u0SVO.jpg';
            // event.reply('金');
        }
        else {
            imageMessage['originalContentUrl'] = 'https://i.imgur.com/QtJEnUA.jpg';
            imageMessage['previewImageUrl'] = 'https://i.imgur.com/QtJEnUA.jpg';
            // event.reply('銀');
        }

        event.reply(imageMessage).then(function (data) {
            // 當訊息成功回傳後的處理
            console.log(data)
        }).catch(function (error) {
            // 當訊息回傳失敗後的處理
            console.log(error)
        });

        // console.log(imageMessage);
    }
    /*if (userMessage.includes("真步")) {
        replyMsg = '咕嚕靈波（●′∀‵）ノ♡';
        // 透過event.reply(要回傳的訊息)方法將訊息回傳給使用者
        event.reply(replyMsg).then(function (data) {
            // 當訊息成功回傳後的處理
        }).catch(function (error) {
            // 當訊息回傳失敗後的處理
        });
    }
    else if (userMessage.includes("老公")) {
        replyMsg = '最喜歡YoChen大人了';
        event.reply(replyMsg);
    }*/
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 8000, function () {
    console.log('[BOT已準備就緒]');
});