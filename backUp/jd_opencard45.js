/*
10.15~10.21 联合开卡 [gua_opencard45.js]
新增开卡脚本 (脚本已加密
一次性脚本

1.邀请一人20豆(有可能没有豆
2.开12张 成功开1张 可能获得5京豆
  全部开完获得1次抽奖
3.关注10京豆 获得1次抽奖
4.加购5京豆 获得1次抽奖(默认不加购 如需加购请设置环境变量[guaopencard_addSku45]为"true"
5.抽奖 (默认不抽奖 如需抽奖请设置环境变量[guaopencard_draw45]为"3"
填写要抽奖的次数 不足已自身次数为准
guaopencard_draw45="3"
填非数字会全都抽奖

第一个账号助力作者 其他依次助力CK1
第一个CK失效会退出脚本

默认脚本不执行
如需执行脚本请设置环境变量
guaopencard45="true"
每个账号之间延迟 100=延迟100秒 0=延迟0秒会使用每3个账号延迟60秒
guaopenwait_All 所有
guaopenwait45="0"


All变量适用
————————————————
入口：[ 10.15~10.21 联合开卡 (https://3.cn/10-3bvYTA)]

请求太频繁会被黑ip
过10分钟再执行

============Quantumultx===============
[task_local]
#10.15~10.21 联合开卡
47 6 15-21 10 * https://raw.githubusercontent.com/smiek2221/scripts/master/gua_opencard45.js, tag=10.15~10.21 联合开卡, enabled=true


*/
let guaopencard_addSku = "false"
let guaopencard = "false"
let guaopenwait = "0"
let guaopencard_draw = "0"

const $ = new Env('10.15~10.21 联合开卡');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
//IOS等用户直接用NobyDa的jd cookie


var _0xodh = 'jsjiami.com.v6',
    _0x74b7 = [_0xodh, 'isNode', 'keys', 'forEach', 'push', 'env', 'JD_DEBUG', 'false', 'log', 'getdata', 'CookieJD', 'CookieJD2', 'CookiesJD', 'map', 'cookie', 'filter', 'guaopencard_addSku45', 'guaopencard_addSku_All', 'guaopencard45', 'guaopencard_All', 'guaopenwait45', 'guaopenwait_All', 'guaopencard_draw45', 'guaopencard_draw', 'hotFlag', 'outFlag', 'activityEnd', 'true', '如需执行脚本请设置环境变量[guaopencard45]为\"true\"', 'msg', 'name', '【提示】请先获取cookie\x0a直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/', 'appkey', '51B59BB805903DA4CE513D29EC448375', 'userId', '10299171', 'actId', '6f9c3a2cafeb4220bb622d7_1015', 'MixNicks', 'inviteNick', 'ARvQziHmfoAOI85tXjXZ5F4tLNYA4seuA67MOIYQxEk3Vl9+AVo4NF+tgyeIc6A6kdK3rLBQpEQH9V4tdrrh0w==', 'length', 'UserName', 'match', 'index', 'bean', 'nickName', '\x0a\x0a******开始【京东账号', '*********\x0a', 'MixNick', '此ip已被限制，请过10分钟后再执行脚本', 'sendNotify', 'catch', 'logErr', 'finally', 'done', 'hasEnd', 'endTime', 'Token', 'Pin', '此ip已被限制，请过10分钟后再执行脚本\x0a', 'isvObfuscator', '获取[token]失败！', 'activity_load', 'now', '活动结束', '获取cookie失败', 'toBind', 'openList', 'shopList', 'missionType', 'openCard', 'open', 'joinVenderId', 'mission', 'wait', 'random', 'hasCollectShop', 'uniteCollectShop', '已经关注', 'uniteAddCart', '如需加购请设置环境变量[guaopencard_addSku45]为\"true\"', 'runFalag', 'usedChance', '抽奖次数为:', '次抽奖', '抽奖太多次，多余的次数请再执行脚本', '如需抽奖请设置环境变量[guaopencard_draw45]为\"3\" 3为次数', 'myAward', 'missionInviteList', '当前助力:', '后面的号都会助力:', '休息1分钟，别被黑ip了\x0a可持续发展', 'https://jinggengjcq-isv.isvjcloud.com', 'POST', 'https://api.m.jd.com/client.action?functionId=isvObfuscator', 'body=%7B%22url%22%3A%22https%3A//jinggengjcq-isv.isvjcloud.com/fronth5/%3Flng%3D0%26lat%3D0%26sid%3D49687cd64aca2ae93aa43748a04e8f6w%26un_area%3D16_1315_1316_53522%23/pages/unitedCardNew20211010-ka/unitedCardNew20211010-ka%3FactId%3D9150e1d16b9d40_10101%22%2C%22id%22%3A%22%22%7D&uuid=b9b4ce69d42dacb64084279d51cdee764d7781fa&client=apple&clientVersion=10.1.4&st=1634100732991&sv=111&sign=67e254ffbcb13be9e12a9782c9cdf398', '/dm/front/openCardNew/activity_load?mix_nick=', '/openCardNew/activity_load', '/dm/front/openCardNew/shopList?mix_nick=', '/openCardNew/shopList', '/dm/front/openCardNew/complete/mission?mix_nick=', 'relationBind', '/openCardNew/complete/mission', '/dm/front/openCardNew/draw/post?mix_nick=', 'draw', '/openCardNew/draw/post', 'followShop', '/dm/front/openCardNew/followShop?mix_nick=', 'collectShop', '/openCardNew/followShop', 'addCart', '/dm/front/openCardNew/addCart?mix_nick=', '/openCardNew/addCart', '/dm/front/openCardNew/myAwards?mix_nick=', '/openCardNew/myAwards', '/dm/front/openCardNew/missionInviteList?mix_nick=', 'shareAct', '/openCardNew/missionInviteList', 'post', 'statusCode', 'toStr', ' API请求失败，请检查网路重试', 'accessLogWithAD', 'drawContent', 'parse', ' 执行任务异常', 'object', 'errcode', 'token', 'undefined', 'message', 'loadUniteOpenCard', 'setMixNick', 'uniteOpenCardOne', 'checkOpenCard', 'success', 'data', 'status', 'isOpenCard', 'remark', 'indexOf', '绑定成功', 'cusActivity', 'buyerNick', 'missionCustomer', 'cusShops', '不是会员', 'uniteOpenCar', '我的奖品：', 'list', 'awardDes', 'awardName', '邀请好友(', '邀请人数(', 'invitedLogList', 'total', 'errorMessage', '-> ', 'application/json', 'gzip, deflate, br', 'zh-cn', 'keep-alive', 'application/x-www-form-urlencoded', 'XMLHttpRequest', 'Origin', 'Content-Type', 'application/json; charset=utf-8', 'Cookie', '2.0', 'params', 'admJson', 'jdapp;iPhone;10.1.4;13.1.2;', ';network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1', 'abcdef0123456789', 'charAt', 'floor', 'string', '请勿随意在BoxJs输入框修改内容\x0a建议通过脚本去获取cookie', 'jsjyTiambiV.cCoNhmr.pvL6BXwV=='];
var _0x2918 = function(_0x368bc8, _0x4dc121) {
    _0x368bc8 = ~~'0x' ['concat'](_0x368bc8);
    var _0xcf701c = _0x74b7[_0x368bc8];
    return _0xcf701c;
};
(function(_0x4f455d, _0x4d1f05) {
    var _0x4e8d6e = 0x0;
    for (_0x4d1f05 = _0x4f455d['shift'](_0x4e8d6e >> 0x2); _0x4d1f05 && _0x4d1f05 !== (_0x4f455d['pop'](_0x4e8d6e >> 0x3) + '')['replace'](/[yTbVCNhrpLBXwV=]/g, ''); _0x4e8d6e++) {
        _0x4e8d6e = _0x4e8d6e ^ 0xaf585;
    }
}(_0x74b7, _0x2918));
let cookiesArr = [],
    cookie = '';
if ($[_0x2918('0')]()) {
    Object[_0x2918('1')](jdCookieNode)[_0x2918('2')](_0x1c351c => {
        cookiesArr[_0x2918('3')](jdCookieNode[_0x1c351c]);
    });
    if (process[_0x2918('4')][_0x2918('5')] && process[_0x2918('4')][_0x2918('5')] === _0x2918('6')) console[_0x2918('7')] = () => {};
} else {
    cookiesArr = [$[_0x2918('8')](_0x2918('9')), $[_0x2918('8')](_0x2918('a')), ...jsonParse($[_0x2918('8')](_0x2918('b')) || '[]')[_0x2918('c')](_0x280fe7 => _0x280fe7[_0x2918('d')])][_0x2918('e')](_0x16aeb6 => !!_0x16aeb6);
}
guaopencard_addSku = $[_0x2918('0')]() ? process[_0x2918('4')][_0x2918('f')] ? process[_0x2918('4')][_0x2918('f')] : '' + guaopencard_addSku : $[_0x2918('8')](_0x2918('f')) ? $[_0x2918('8')](_0x2918('f')) : '' + guaopencard_addSku;
guaopencard_addSku = $[_0x2918('0')]() ? process[_0x2918('4')][_0x2918('10')] ? process[_0x2918('4')][_0x2918('10')] : '' + guaopencard_addSku : $[_0x2918('8')](_0x2918('10')) ? $[_0x2918('8')](_0x2918('10')) : '' + guaopencard_addSku;
guaopencard = $[_0x2918('0')]() ? process[_0x2918('4')][_0x2918('11')] ? process[_0x2918('4')][_0x2918('11')] : '' + guaopencard : $[_0x2918('8')](_0x2918('11')) ? $[_0x2918('8')](_0x2918('11')) : '' + guaopencard;
guaopencard = $[_0x2918('0')]() ? process[_0x2918('4')][_0x2918('12')] ? process[_0x2918('4')][_0x2918('12')] : '' + guaopencard : $[_0x2918('8')](_0x2918('12')) ? $[_0x2918('8')](_0x2918('12')) : '' + guaopencard;
guaopenwait = $[_0x2918('0')]() ? process[_0x2918('4')][_0x2918('13')] ? process[_0x2918('4')][_0x2918('13')] : '' + guaopenwait : $[_0x2918('8')](_0x2918('13')) ? $[_0x2918('8')](_0x2918('13')) : '' + guaopenwait;
guaopenwait = $[_0x2918('0')]() ? process[_0x2918('4')][_0x2918('14')] ? process[_0x2918('4')][_0x2918('14')] : '' + guaopenwait : $[_0x2918('8')](_0x2918('14')) ? $[_0x2918('8')](_0x2918('14')) : '' + guaopenwait;
guaopenwait = parseInt(guaopenwait, 0xa) || 0x0;
guaopencard_draw = $[_0x2918('0')]() ? process[_0x2918('4')][_0x2918('15')] ? process[_0x2918('4')][_0x2918('15')] : guaopencard_draw : $[_0x2918('8')](_0x2918('15')) ? $[_0x2918('8')](_0x2918('15')) : guaopencard_draw;
guaopencard_draw = $[_0x2918('0')]() ? process[_0x2918('4')][_0x2918('16')] ? process[_0x2918('4')][_0x2918('16')] : guaopencard_draw : $[_0x2918('8')](_0x2918('16')) ? $[_0x2918('8')](_0x2918('16')) : guaopencard_draw;
guaopenwait = parseInt(guaopenwait, 0xa) || 0x0;
allMessage = '';
message = '';
$[_0x2918('17')] = ![];
$[_0x2918('18')] = ![];
$[_0x2918('19')] = ![];
let lz_jdpin_token_cookie = '';
let activityCookie = '';
!(async () => {
    if ($[_0x2918('0')]()) {
        if (guaopencard + '' != _0x2918('1a')) {
            console[_0x2918('7')](_0x2918('1b'));
        }
        if (guaopencard + '' != _0x2918('1a')) {
            return;
        }
    }
    if (!cookiesArr[0x0]) {
        $[_0x2918('1c')]($[_0x2918('1d')], _0x2918('1e'), _0x2918('1f'), {
            'open-url': _0x2918('1f')
        });
        return;
    }
    $[_0x2918('20')] = _0x2918('21');
    $[_0x2918('22')] = _0x2918('23');
    $[_0x2918('24')] = _0x2918('25');
    $[_0x2918('26')] = '';
    $[_0x2918('27')] = _0x2918('28');
    for (let _0x43424c = 0x0; _0x43424c < cookiesArr[_0x2918('29')]; _0x43424c++) {
        cookie = cookiesArr[_0x43424c];
        if (cookie) {
            $[_0x2918('2a')] = decodeURIComponent(cookie[_0x2918('2b')](/pt_pin=([^; ]+)(?=;?)/) && cookie[_0x2918('2b')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $[_0x2918('2c')] = _0x43424c + 0x1;
            message = '';
            $[_0x2918('2d')] = 0x0;
            $[_0x2918('17')] = ![];
            $[_0x2918('2e')] = '';
            console[_0x2918('7')](_0x2918('2f') + $[_0x2918('2c')] + '】' + ($[_0x2918('2e')] || $[_0x2918('2a')]) + _0x2918('30'));
            await getUA();
            await run();
            if (_0x43424c == 0x0 && !$[_0x2918('31')]) break;
            if ($[_0x2918('18')] || $[_0x2918('19')]) break;
        }
    }
    if ($[_0x2918('18')]) {
        let _0x48c066 = _0x2918('32');
        $[_0x2918('1c')]($[_0x2918('1d')], '', '' + _0x48c066);
        if ($[_0x2918('0')]()) await notify[_0x2918('33')]('' + $[_0x2918('1d')], '' + _0x48c066);
    }
})()[_0x2918('34')](_0x4693d5 => $[_0x2918('35')](_0x4693d5))[_0x2918('36')](() => $[_0x2918('37')]());
async function run() {
    try {
        $[_0x2918('38')] = !![];
        $[_0x2918('39')] = 0x0;
        lz_jdpin_token_cookie = '';
        $[_0x2918('3a')] = '';
        $[_0x2918('3b')] = '';
        $[_0x2918('31')] = '';
        let _0x3a4c56 = ![];
        if ($[_0x2918('19')]) return;
        if ($[_0x2918('18')]) {
            console[_0x2918('7')](_0x2918('3c'));
            return;
        }
        await takePostRequest(_0x2918('3d'));
        if ($[_0x2918('3a')] == '') {
            console[_0x2918('7')](_0x2918('3e'));
            return;
        }
        await takePostRequest(_0x2918('3f'));
        if (Date[_0x2918('40')]() > $[_0x2918('39')]) {
            $[_0x2918('31')] = '';
            $[_0x2918('19')] = !![];
            console[_0x2918('7')](_0x2918('41'));
            return;
        }
        if ($[_0x2918('31')] == '') {
            console[_0x2918('7')](_0x2918('42'));
            return;
        }
        $[_0x2918('43')] = 0x0;
        $[_0x2918('44')] = [];
        await takePostRequest('绑定');
        await takePostRequest(_0x2918('45'));
        for (o of $[_0x2918('44')]) {
            $[_0x2918('46')] = _0x2918('47');
            if (o[_0x2918('48')] != !![]) {
                $[_0x2918('47')] = ![];
                $[_0x2918('49')] = o[_0x2918('22')];
                await takePostRequest(_0x2918('4a'));
                await $[_0x2918('4b')](parseInt(Math[_0x2918('4c')]() * 0xbb8 + 0xbb8, 0xa));
                if ($[_0x2918('47')] == !![]) {
                    await joinShop();
                    await takePostRequest(_0x2918('3f'));
                    await $[_0x2918('4b')](parseInt(Math[_0x2918('4c')]() * 0xbb8 + 0xbb8, 0xa));
                }
                $[_0x2918('49')] = '';
            }
        }
        $[_0x2918('49')] = '';
        if ($[_0x2918('4d')] === 0x0) {
            $[_0x2918('46')] = _0x2918('4e');
            await takePostRequest(_0x2918('4a'));
            await $[_0x2918('4b')](parseInt(Math[_0x2918('4c')]() * 0x7d0 + 0xbb8, 0xa));
        } else {
            console[_0x2918('7')](_0x2918('4f'));
        }
        if (guaopencard_addSku + '' == _0x2918('1a')) {
            $[_0x2918('46')] = _0x2918('50');
            await takePostRequest(_0x2918('4a'));
            await $[_0x2918('4b')](parseInt(Math[_0x2918('4c')]() * 0x7d0 + 0xbb8, 0xa));
        } else {
            console[_0x2918('7')](_0x2918('51'));
        }
        await takePostRequest(_0x2918('3f'));
        if (guaopencard_draw + '' !== '0') {
            $[_0x2918('52')] = !![];
            let _0x3c965f = parseInt($[_0x2918('53')], 0xa);
            guaopencard_draw = parseInt(guaopencard_draw, 0xa);
            if (_0x3c965f > guaopencard_draw) _0x3c965f = guaopencard_draw;
            console[_0x2918('7')](_0x2918('54') + _0x3c965f);
            for (m = 0x1; _0x3c965f--; m++) {
                console[_0x2918('7')]('第' + m + _0x2918('55'));
                await takePostRequest('抽奖');
                if ($[_0x2918('52')] == ![]) break;
                if (Number(_0x3c965f) <= 0x0) break;
                if (m >= 0xa) {
                    console[_0x2918('7')](_0x2918('56'));
                    break;
                }
                await $[_0x2918('4b')](parseInt(Math[_0x2918('4c')]() * 0x7d0 + 0x7d0, 0xa));
            }
        } else console[_0x2918('7')](_0x2918('57'));
        await takePostRequest(_0x2918('58'));
        await takePostRequest(_0x2918('59'));
        console[_0x2918('7')]($[_0x2918('31')]);
        console[_0x2918('7')](_0x2918('5a') + $[_0x2918('27')]);
        if ($[_0x2918('2c')] == 0x1) {
            $[_0x2918('27')] = $[_0x2918('31')];
            console[_0x2918('7')](_0x2918('5b') + $[_0x2918('27')]);
        }
        await $[_0x2918('4b')](parseInt(Math[_0x2918('4c')]() * 0x3e8 + 0x1388, 0xa));
        if (_0x3a4c56) await $[_0x2918('4b')](parseInt(Math[_0x2918('4c')]() * 0x3e8 + 0x2710, 0xa));
        if (guaopenwait) {
            if ($[_0x2918('2c')] != cookiesArr[_0x2918('29')]) {
                console[_0x2918('7')]('等待' + guaopenwait + '秒');
                await $[_0x2918('4b')](parseInt(guaopenwait, 0xa) * 0x3e8);
            }
        } else {
            if ($[_0x2918('2c')] % 0x3 == 0x0) console[_0x2918('7')](_0x2918('5c'));
            if ($[_0x2918('2c')] % 0x3 == 0x0) await $[_0x2918('4b')](parseInt(Math[_0x2918('4c')]() * 0x1388 + 0xea60, 0xa));
        }
    } catch (_0x55523e) {
        console[_0x2918('7')](_0x55523e);
    }
}
async function takePostRequest(_0x114aec) {
    if ($[_0x2918('18')]) return;
    let _0x58bd1e = _0x2918('5d');
    let _0x44b7b7 = '';
    let _0x17084a = _0x2918('5e');
    let _0x3b059d = '';
    switch (_0x114aec) {
        case _0x2918('3d'):
            url = _0x2918('5f');
            _0x44b7b7 = _0x2918('60');
            break;
        case _0x2918('3f'):
            url = _0x58bd1e + _0x2918('61') + ($[_0x2918('31')] || $[_0x2918('26')] || '');
            _0x3b059d = {
                'jdToken': $[_0x2918('3a')],
                'source': '01',
                'inviteNick': $[_0x2918('27')] || ''
            };
            if ($[_0x2918('49')]) _0x3b059d = {
                ..._0x3b059d,
                'shopId': '' + $[_0x2918('49')]
            };
            _0x44b7b7 = taskPostUrl(_0x2918('62'), _0x3b059d);
            break;
        case _0x2918('45'):
            url = _0x58bd1e + _0x2918('63') + ($[_0x2918('31')] || $[_0x2918('26')] || '');
            _0x3b059d = {};
            _0x44b7b7 = taskPostUrl(_0x2918('64'), _0x3b059d);
            break;
        case '绑定':
            url = _0x58bd1e + _0x2918('65') + ($[_0x2918('31')] || $[_0x2918('26')] || '');
            _0x3b059d = {
                'missionType': _0x2918('66'),
                'inviterNick': $[_0x2918('27')] || ''
            };
            _0x44b7b7 = taskPostUrl(_0x2918('67'), _0x3b059d);
            break;
        case _0x2918('4a'):
            url = _0x58bd1e + _0x2918('65') + ($[_0x2918('31')] || $[_0x2918('26')] || '');
            _0x3b059d = {
                'missionType': $[_0x2918('46')]
            };
            if ($[_0x2918('49')]) _0x3b059d = {
                ..._0x3b059d,
                'shopId': $[_0x2918('49')]
            };
            _0x44b7b7 = taskPostUrl(_0x2918('67'), _0x3b059d);
            break;
        case '抽奖':
            url = _0x58bd1e + _0x2918('68') + ($[_0x2918('31')] || $[_0x2918('26')] || '');
            _0x3b059d = {
                'dataType': _0x2918('69'),
                'usedGameNum': '2'
            };
            _0x44b7b7 = taskPostUrl(_0x2918('6a'), _0x3b059d);
            break;
        case _0x2918('6b'):
            url = _0x58bd1e + _0x2918('6c') + ($[_0x2918('31')] || $[_0x2918('26')] || '');
            _0x3b059d = {
                'actId': $[_0x2918('24')],
                'missionType': _0x2918('6d')
            };
            _0x44b7b7 = taskPostUrl(_0x2918('6e'), _0x3b059d);
            break;
        case _0x2918('6f'):
            url = _0x58bd1e + _0x2918('70') + ($[_0x2918('31')] || $[_0x2918('26')] || '');
            _0x3b059d = {
                'actId': $[_0x2918('24')],
                'missionType': _0x2918('6f')
            };
            _0x44b7b7 = taskPostUrl(_0x2918('71'), _0x3b059d);
            break;
        case _0x2918('58'):
            url = _0x58bd1e + _0x2918('72') + ($[_0x2918('31')] || $[_0x2918('26')] || '');
            _0x3b059d = {
                'pageNo': 0x1,
                'pageSize': 0x270f
            };
            _0x44b7b7 = taskPostUrl(_0x2918('73'), _0x3b059d);
            break;
        case _0x2918('59'):
            url = _0x58bd1e + _0x2918('74') + ($[_0x2918('31')] || $[_0x2918('26')] || '');
            _0x3b059d = {
                'inviteListRequest': {
                    'actId': $[_0x2918('24')],
                    'userId': 0x9d2723,
                    'missionType': _0x2918('75'),
                    'inviteType': 0x1,
                    'buyerNick': $[_0x2918('31')] || ''
                }
            };
            _0x44b7b7 = taskPostUrl(_0x2918('76'), _0x3b059d);
            break;
        default:
            console[_0x2918('7')]('错误' + _0x114aec);
    }
    let _0x16c0e0 = getPostRequest(url, _0x44b7b7, _0x17084a);
    return new Promise(async _0xba35c6 => {
        $[_0x2918('77')](_0x16c0e0, (_0x54e127, _0x1d5215, _0x1fe6e5) => {
            try {
                if (_0x54e127) {
                    if (_0x1d5215 && _0x1d5215[_0x2918('78')] && _0x1d5215[_0x2918('78')] == 0x1ed) {
                        console[_0x2918('7')](_0x2918('3c'));
                        $[_0x2918('18')] = !![];
                    }
                    console[_0x2918('7')]('' + $[_0x2918('79')](_0x54e127, _0x54e127));
                    console[_0x2918('7')](_0x114aec + _0x2918('7a'));
                } else {
                    dealReturn(_0x114aec, _0x1fe6e5);
                }
            } catch (_0x33c738) {
                console[_0x2918('7')](_0x33c738, _0x1d5215);
            } finally {
                _0xba35c6();
            }
        });
    });
}
async function dealReturn(_0x46ade9, _0x5550c5) {
    let _0x5a87f8 = '';
    try {
        if (_0x46ade9 != _0x2918('7b') || _0x46ade9 != _0x2918('7c')) {
            if (_0x5550c5) {
                _0x5a87f8 = JSON[_0x2918('7d')](_0x5550c5);
            }
        }
    } catch (_0xe496b) {
        console[_0x2918('7')](_0x46ade9 + _0x2918('7e'));
        console[_0x2918('7')](_0x5550c5);
        $[_0x2918('52')] = ![];
    }
    try {
        let _0xdfaa3f = '';
        switch (_0x46ade9) {
            case _0x2918('3d'):
                if (typeof _0x5a87f8 == _0x2918('7f')) {
                    if (_0x5a87f8[_0x2918('80')] == 0x0) {
                        if (typeof _0x5a87f8[_0x2918('81')] != _0x2918('82')) $[_0x2918('3a')] = _0x5a87f8[_0x2918('81')];
                    } else if (_0x5a87f8[_0x2918('83')]) {
                        console[_0x2918('7')](_0x46ade9 + ' ' + (_0x5a87f8[_0x2918('83')] || ''));
                    } else {
                        console[_0x2918('7')](_0x5550c5);
                    }
                } else {
                    console[_0x2918('7')](_0x5550c5);
                }
                break;
            case _0x2918('7b'):
            case _0x2918('7c'):
                break;
            case _0x2918('3f'):
            case _0x2918('4a'):
            case _0x2918('45'):
            case _0x2918('84'):
            case _0x2918('85'):
            case _0x2918('86'):
            case _0x2918('87'):
            case _0x2918('6b'):
            case _0x2918('6f'):
            case _0x2918('58'):
            case _0x2918('59'):
            case '抽奖':
                _0xdfaa3f = '';
                if (_0x46ade9 == _0x2918('6b')) _0xdfaa3f = '关注';
                if (_0x46ade9 == _0x2918('6f')) _0xdfaa3f = '加购';
                if (typeof _0x5a87f8 == _0x2918('7f')) {
                    if (_0x5a87f8[_0x2918('88')] && _0x5a87f8[_0x2918('88')] === !![] && _0x5a87f8[_0x2918('89')]) {
                        _0x5a87f8 = _0x5a87f8[_0x2918('89')];
                        if (_0x5a87f8[_0x2918('8a')] && _0x5a87f8[_0x2918('8a')] == 0xc8) {
                            if (_0x46ade9 != _0x2918('85') && (_0x5a87f8[_0x2918('1c')] || _0x5a87f8[_0x2918('89')][_0x2918('8b')] || _0x5a87f8[_0x2918('89')][_0x2918('8c')])) console[_0x2918('7')]('' + (_0xdfaa3f && _0xdfaa3f + ':' || '') + (_0x5a87f8[_0x2918('1c')] || _0x5a87f8[_0x2918('89')][_0x2918('8b')] || _0x5a87f8[_0x2918('89')][_0x2918('8c')] || ''));
                            if (_0x46ade9 == _0x2918('3f')) {
                                if (_0x5a87f8[_0x2918('1c')] || _0x5a87f8[_0x2918('89')][_0x2918('8b')]) {
                                    if ((_0x5a87f8[_0x2918('1c')] || _0x5a87f8[_0x2918('89')][_0x2918('8b')] || '')[_0x2918('8d')](_0x2918('8e')) > -0x1) $[_0x2918('43')] = 0x1;
                                }
                                if (_0x5a87f8[_0x2918('89')]) {
                                    $[_0x2918('39')] = _0x5a87f8[_0x2918('89')][_0x2918('8f')][_0x2918('39')] || 0x0;
                                    $[_0x2918('31')] = _0x5a87f8[_0x2918('89')][_0x2918('90')] || '';
                                    $[_0x2918('53')] = _0x5a87f8[_0x2918('89')][_0x2918('91')][_0x2918('53')] || 0x0;
                                    $[_0x2918('4d')] = _0x5a87f8[_0x2918('89')][_0x2918('91')][_0x2918('4d')] || 0x0;
                                }
                            } else if (_0x46ade9 == _0x2918('45')) {
                                $[_0x2918('44')] = _0x5a87f8[_0x2918('89')][_0x2918('92')] || [];
                            } else if (_0x46ade9 == _0x2918('4a')) {
                                if (_0x5a87f8[_0x2918('89')][_0x2918('8c')][_0x2918('8d')](_0x2918('93')) > -0x1) {
                                    $[_0x2918('47')] = !![];
                                } else {
                                    $[_0x2918('47')] = ![];
                                }
                            } else if (_0x46ade9 == _0x2918('86')) {
                                $[_0x2918('94')] = _0x5a87f8[_0x2918('1c')] || _0x5a87f8[_0x2918('89')][_0x2918('1c')] || '';
                            } else if (_0x46ade9 == _0x2918('58')) {
                                console[_0x2918('7')](_0x2918('95'));
                                let _0x8551a5 = 0x0;
                                let _0x11c71f = 0x0;
                                for (let _0x1e04dd in _0x5a87f8[_0x2918('89')][_0x2918('96')] || []) {
                                    let _0x6e8084 = _0x5a87f8[_0x2918('89')][_0x2918('96')][_0x1e04dd];
                                    if (_0x6e8084[_0x2918('97')] == '20') {
                                        _0x8551a5++;
                                        _0x11c71f = _0x6e8084[_0x2918('97')];
                                    } else {
                                        console[_0x2918('7')]('' + _0x6e8084[_0x2918('98')]);
                                    }
                                }
                                if (_0x8551a5 > 0x0) console[_0x2918('7')](_0x2918('99') + _0x8551a5 + '):' + (_0x8551a5 * parseInt(_0x11c71f, 0xa) || 0x1e) + '京豆');
                            } else if (_0x46ade9 == _0x2918('59')) {
                                console[_0x2918('7')](_0x2918('9a') + _0x5a87f8[_0x2918('89')][_0x2918('9b')][_0x2918('9c')] + ')');
                            }
                        } else if (_0x5a87f8[_0x2918('1c')]) {
                            console[_0x2918('7')]((_0xdfaa3f || _0x46ade9) + ' ' + (_0x5a87f8[_0x2918('1c')] || ''));
                        } else {
                            console[_0x2918('7')]((_0xdfaa3f || _0x46ade9) + ' ' + _0x5550c5);
                        }
                    } else if (_0x5a87f8[_0x2918('9d')]) {
                        console[_0x2918('7')]((_0xdfaa3f || _0x46ade9) + ' ' + (_0x5a87f8[_0x2918('9d')] || ''));
                    } else {
                        console[_0x2918('7')]((_0xdfaa3f || _0x46ade9) + ' ' + _0x5550c5);
                    }
                } else {
                    console[_0x2918('7')]((_0xdfaa3f || _0x46ade9) + ' ' + _0x5550c5);
                }
                break;
            default:
                console[_0x2918('7')]((_0xdfaa3f || _0x46ade9) + _0x2918('9e') + _0x5550c5);
        }
        if (typeof _0x5a87f8 == _0x2918('7f')) {
            if (_0x5a87f8[_0x2918('9d')]) {
                if (_0x5a87f8[_0x2918('9d')][_0x2918('8d')]('火爆') > -0x1) {
                    $[_0x2918('17')] = !![];
                }
            }
        }
    } catch (_0x3dee90) {
        console[_0x2918('7')](_0x3dee90);
    }
}

function getPostRequest(_0xce5f3b, _0xf8d360, _0x51bf90 = _0x2918('5e')) {
    let _0x3e221f = {
        'Accept': _0x2918('9f'),
        'Accept-Encoding': _0x2918('a0'),
        'Accept-Language': _0x2918('a1'),
        'Connection': _0x2918('a2'),
        'Content-Type': _0x2918('a3'),
        'Cookie': cookie,
        'User-Agent': $['UA'],
        'X-Requested-With': _0x2918('a4')
    };
    if (_0xce5f3b[_0x2918('8d')](_0x2918('5d')) > -0x1) {
        _0x3e221f[_0x2918('a5')] = _0x2918('5d');
        _0x3e221f[_0x2918('a6')] = _0x2918('a7');
        delete _0x3e221f[_0x2918('a8')];
    }
    return {
        'url': _0xce5f3b,
        'method': _0x51bf90,
        'headers': _0x3e221f,
        'body': _0xf8d360,
        'timeout': 0x7530
    };
}

function taskPostUrl(_0x21bd60, _0x55bd13) {
    const _0x51eb0a = {
        'jsonRpc': _0x2918('a9'),
        'params': {
            'commonParameter': {
                'appkey': $[_0x2918('20')],
                'm': _0x2918('5e'),
                'timestamp': Date[_0x2918('40')](),
                'userId': $[_0x2918('22')]
            },
            'admJson': {
                'actId': $[_0x2918('24')],
                'userId': $[_0x2918('22')],
                ..._0x55bd13,
                'method': _0x21bd60,
                'buyerNick': $[_0x2918('31')] || ''
            }
        }
    };
    if (_0x21bd60[_0x2918('8d')](_0x2918('59')) > -0x1) {
        delete _0x51eb0a[_0x2918('aa')][_0x2918('ab')][_0x2918('24')];
    }
    return $[_0x2918('79')](_0x51eb0a, _0x51eb0a);
}
async function getUA() {
    $['UA'] = _0x2918('ac') + randomString(0x28) + _0x2918('ad');
}

function randomString(_0x32f71f) {
    _0x32f71f = _0x32f71f || 0x20;
    let _0x3c82af = _0x2918('ae'),
        _0x549808 = _0x3c82af[_0x2918('29')],
        _0x58c047 = '';
    for (i = 0x0; i < _0x32f71f; i++) _0x58c047 += _0x3c82af[_0x2918('af')](Math[_0x2918('b0')](Math[_0x2918('4c')]() * _0x549808));
    return _0x58c047;
}

function jsonParse(_0x14bf7c) {
    if (typeof _0x14bf7c == _0x2918('b1')) {
        try {
            return JSON[_0x2918('7d')](_0x14bf7c);
        } catch (_0x37b1d9) {
            console[_0x2918('7')](_0x37b1d9);
            $[_0x2918('1c')]($[_0x2918('1d')], '', _0x2918('b2'));
            return [];
        }
    }
};
_0xodh = 'jsjiami.com.v6';
function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
      return [];
    }
  }
}

function joinShop() {
  if(!$.joinVenderId) return
  return new Promise(async resolve => {
    $.shopactivityId = ''
    await $.wait(1000)
    await getshopactivityId()
    let activityId = ``
    if($.shopactivityId) activityId = `,"activityId":${$.shopactivityId}`
    const options = {
      url: `https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body={"venderId":"${$.joinVenderId}","shopId":"${$.joinVenderId}","bindByVerifyCodeFlag":1,"registerExtend":{},"writeChildFlag":0${activityId},"channel":401}&client=H5&clientVersion=9.2.0&uuid=88888`,
      headers: {
        'Content-Type': 'text/plain; Charset=UTF-8',
        'Origin': 'https://api.m.jd.com',
        'Host': 'api.m.jd.com',
        'accept': '*/*',
        'User-Agent': $.UA,
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': cookie
      }
    }
    $.get(options, async (err, resp, data) => {
      try {
        // console.log(data)
        let res = $.toObj(data);
        if(typeof res == 'object'){
          if(res.success === true){
            console.log(res.message)
            if(res.result && res.result.giftInfo){
              for(let i of res.result.giftInfo.giftList){
                console.log(`入会获得:${i.discountString}${i.prizeName}${i.secondLineDesc}`)
              }
            }
          }else if(typeof res == 'object' && res.message){
            console.log(`${res.message || ''}`)
          }else{
            console.log(data)
          }
        }else{
          console.log(data)
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
function getshopactivityId() {
  return new Promise(resolve => {
    const options = {
      url: `https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body=%7B%22venderId%22%3A%22${$.joinVenderId}%22%2C%22channel%22%3A401%7D&client=H5&clientVersion=9.2.0&uuid=88888`,
      headers: {
        'Content-Type': 'text/plain; Charset=UTF-8',
        'Origin': 'https://api.m.jd.com',
        'Host': 'api.m.jd.com',
        'accept': '*/*',
        'User-Agent': $.UA,
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': cookie
      }
    }
    $.get(options, async (err, resp, data) => {
      try {
        let res = $.toObj(data);
        if(res.success == true){
          // console.log($.toStr(res.result))
          console.log(`入会:${res.result.shopMemberCardInfo.venderCardName || ''}`)
          $.shopactivityId = res.result.interestsRuleList && res.result.interestsRuleList[0] && res.result.interestsRuleList[0].interestsInfo && res.result.interestsRuleList[0].interestsInfo.activityId || ''
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

