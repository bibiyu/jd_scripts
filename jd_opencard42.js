/*
10.8~10.18 金秋好物盛典 福利来袭 [gua_opencard42.js]
新增开卡脚本 (脚本已加密
一次性脚本

1.邀请一人20豆
2.开2组(共8张) 成功开1组 获得1次抽奖
  抽奖可能获得30京豆
3.关注10豆 
4.加购5京豆
  (默认不加购 如需加购请设置环境变量[guaopencard_addSku42]为"true"
5.浏览商品1豆/个

第一个账号助力作者 其他依次助力CK1
第一个CK失效会退出脚本

默认脚本不执行
如需执行脚本请设置环境变量
guaopencard42="true"
每个账号之间延迟 100=延迟100秒 0=延迟0秒会使用每3个账号延迟60秒
guaopenwait_All 所有
guaopenwait42="0"


All变量适用
————————————————
入口：[ 10.8~10.18 金秋好物盛典 福利来袭 (https://lzdz1-isv.isvjcloud.com/dingzhi/dz/openCard/activity?activityId=dz20210929skcnurdk34jkkl3dsf4awqw&shareUuid=77df2cb5cc0941219b1d4f0429345957)]

请求太频繁会被黑ip
过10分钟再执行

============Quantumultx===============
[task_local]
#10.8~10.18 金秋好物盛典 福利来袭
47 3 8-18 10 * https://raw.githubusercontent.com/smiek2221/scripts/master/gua_opencard42.js, tag=10.8~10.18 金秋好物盛典 福利来袭, enabled=true

*/
let guaopencard_addSku = "false"
let guaopencard = "false"
let guaopenwait = "0"

const $ = new Env('10.8~10.18 金秋好物盛典 福利来袭');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
//IOS等用户直接用NobyDa的jd cookie

/*
 *Progcessed By JSDec in 0.14s
 *JSDec - JSDec.js.org
 */
var _0xodU = 'jsjiami.com.v6',
    _0x5431 = [_0xodU, 'isNode', 'keys', 'forEach', 'push', 'env', 'JD_DEBUG', 'false', 'log', 'getdata', 'CookieJD', 'CookieJD2', 'CookiesJD', 'map', 'cookie', 'filter', 'guaopencard_addSku42', 'guaopencard_addSku_All', 'guaopencard42', 'guaopencard_All', 'guaopenwait42', 'guaopenwait_All', 'hotFlag', 'outFlag', 'activityEnd', 'true', '如需执行脚本请设置环境变量[guaopencard42]为\"true\"', 'msg', 'name', '【提示】请先获取cookie\x0a直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/', 'activityId', 'dz20210929skcnurdk34jkkl3dsf4awqw', 'shareUuid', '77df2cb5cc0941219b1d4f0429345957', '入口:\x0ahttps://lzdz1-isv.isvjcloud.com/dingzhi/dz/openCard/activity?activityId=', '&shareUuid=', 'length', 'UserName', 'match', 'index', 'bean', 'nickName', '\x0a\x0a******开始【京东账号', '*********\x0a', 'actorUuid', '此ip已被限制，请过10分钟后再执行脚本', 'sendNotify', 'catch', 'logErr', 'finally', 'done', 'hasEnd', 'endTime', 'Token', 'Pin', 'isvObfuscator', '获取[token]失败！', '获取cookie失败', '此ip已被限制，请过10分钟后再执行脚本\x0a', 'getSimpleActInfoVo', 'getMyPing', '获取[Pin]失败！', 'accessLogWithAD', 'getUserInfo', 'activityContent', '获取不到[actorUuid]退出执行，请重新执行', 'now', '活动结束', 'drawContent', 'wait', 'openList', 'allOpenCard', 'checkOpenCard', '开卡任务', 'openCard', 'status', 'joinVenderId', 'value', 'random', '已全部开卡', 'openCardScore1', 'startDraw', 'openCardScore2', '关注: ', 'followShop', '加购: ', 'addSku', '如需加购请设置环境变量[guaopencard_addSku42]为\"true\"', 'runFalag', '浏览商品: ', 'visitSku', 'visitSkuList', 'visitSkuValue', 'getDrawRecordHasCoupon', 'getShareRecord', '当前助力:', '后面的号都会助力:', '休息1分钟，别被黑ip了\x0a可持续发展', 'https://lzdz1-isv.isvjcloud.com', 'POST', 'https://api.m.jd.com/client.action?functionId=isvObfuscator', 'body=%7B%22url%22%3A%22https%3A//lzdz1-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=904ce8c5b41545d35e0ad6507707fbac94ec90ad&client=apple&clientVersion=10.1.4&st=1633672178634&sv=111&sign=c9d17d9364432069541aa3d82465c007', '/dz/common/getSimpleActInfoVo', 'activityId=', '/customer/getMyPing', 'userId=', 'shopId', 'venderId', '&token=', '&fromType=APP', '/common/accessLogWithAD', '/drawCenter/activity?activityId=', 'venderId=', '&code=99&pin=', '&activityId=', '&pageUrl=', '&subType=app&adSource=', '/wxActionCommon/getUserInfo', 'pin=', '/dingzhi/dz/openCard/activityContent', '&pin=', '&pinImg=', 'attrTouXiang', '&nick=', 'nickname', '&cjyxPin=&cjhyPin=&shareUuid=', '/dingzhi/taskact/openCardcommon/drawContent', '/dingzhi/dz/openCard/checkOpenCard', '&actorUuid=', '/dingzhi/dz/openCard/startDraw', '&type=', '/dingzhi/dz/openCard/followShop', '&taskType=23&taskValue=', 'followShopValue', 'viewVideo', 'toShop', '/dingzhi/dz/openCard/saveTask', 'toShopValue', 'addSkuValue', '&taskType=', '&taskValue=', '/dingzhi/taskact/openCardcommon/getDrawRecordHasCoupon', '/dingzhi/taskact/openCardcommon/getShareRecord', 'post', 'statusCode', 'undefined', 'toStr', ' API请求失败，请检查网路重试', 'parse', ' 执行任务异常', 'object', 'errcode', 'token', 'message', 'isvObfuscator ', 'result', 'data', 'errorMessage', 'secretPin', 'yunMidImageUrl', 'https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png', 'allStatus', 'settings', 'cardList1', 'cardList2', 'cardList', 'score1', 'score2', 'drawScore', 'addBeanNum', 'sendStatus', 'beanNumMember', 'assistSendStatus', ' 额外获得:', '热门文章', '浏览店铺', '浏览商品', 'drawOk', 'drawInfoType', '空气💨', '获得:', '我的奖品：', '邀请好友', 'infoName', 'replace', 'infoType', '邀请好友(', 'ShareCount', '=========== 你邀请了:', '-> ', 'indexOf', 'application/json', 'gzip, deflate, br', 'zh-cn', 'keep-alive', 'application/x-www-form-urlencoded', 'XMLHttpRequest', 'Referer', 'https://lzdz1-isv.isvjcloud.com/dingzhi/dz/openCard/activity?activityId=', 'Cookie', 'AUTH_C_USER=', 'get', ' cookie API请求失败，请检查网路重试', 'headers', 'set-cookie', 'Set-Cookie', 'split', 'trim', 'LZ_TOKEN_KEY=', 'LZ_TOKEN_VALUE=', 'lz_jdpin_token=', 'jdapp;iPhone;10.1.4;13.1.2;', ';network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1', 'abcdef0123456789', 'charAt', 'floor', 'XFjsHTMjiamiLf.OcomzHQ.nvCC6WX=='];
var _0x4caf = function(_0x18db21, _0x59e7d8) {
    _0x18db21 = ~~'0x' ['concat'](_0x18db21);
    var _0x2fae69 = _0x5431[_0x18db21];
    return _0x2fae69;
};
(function(_0x3cb81d, _0x1d5fcf) {
    var _0x1a8dd2 = 0x0;
    for (_0x1d5fcf = _0x3cb81d['shift'](_0x1a8dd2 >> 0x2); _0x1d5fcf && _0x1d5fcf !== (_0x3cb81d['pop'](_0x1a8dd2 >> 0x3) + '')['replace'](/[XFHTMLfOzHQnCCWX=]/g, ''); _0x1a8dd2++) {
        _0x1a8dd2 = _0x1a8dd2 ^ 0xad378;
    }
}(_0x5431, _0x4caf));
let cookiesArr = [],
    cookie = '';
if ($[_0x4caf('0')]()) {
    Object[_0x4caf('1')](jdCookieNode)[_0x4caf('2')](_0x5733c7 => {
        cookiesArr[_0x4caf('3')](jdCookieNode[_0x5733c7]);
    });
    if (process[_0x4caf('4')][_0x4caf('5')] && process[_0x4caf('4')][_0x4caf('5')] === _0x4caf('6')) console[_0x4caf('7')] = () => {};
} else {
    cookiesArr = [$[_0x4caf('8')](_0x4caf('9')), $[_0x4caf('8')](_0x4caf('a')), ...jsonParse($[_0x4caf('8')](_0x4caf('b')) || '[]')[_0x4caf('c')](_0x10d510 => _0x10d510[_0x4caf('d')])][_0x4caf('e')](_0x544c53 => !!_0x544c53);
}
guaopencard_addSku = $[_0x4caf('0')]() ? process[_0x4caf('4')][_0x4caf('f')] ? process[_0x4caf('4')][_0x4caf('f')] : '' + guaopencard_addSku : $[_0x4caf('8')](_0x4caf('f')) ? $[_0x4caf('8')](_0x4caf('f')) : '' + guaopencard_addSku;
guaopencard_addSku = $[_0x4caf('0')]() ? process[_0x4caf('4')][_0x4caf('10')] ? process[_0x4caf('4')][_0x4caf('10')] : '' + guaopencard_addSku : $[_0x4caf('8')](_0x4caf('10')) ? $[_0x4caf('8')](_0x4caf('10')) : '' + guaopencard_addSku;
guaopencard = $[_0x4caf('0')]() ? process[_0x4caf('4')][_0x4caf('11')] ? process[_0x4caf('4')][_0x4caf('11')] : '' + guaopencard : $[_0x4caf('8')](_0x4caf('11')) ? $[_0x4caf('8')](_0x4caf('11')) : '' + guaopencard;
guaopencard = $[_0x4caf('0')]() ? process[_0x4caf('4')][_0x4caf('12')] ? process[_0x4caf('4')][_0x4caf('12')] : '' + guaopencard : $[_0x4caf('8')](_0x4caf('12')) ? $[_0x4caf('8')](_0x4caf('12')) : '' + guaopencard;
guaopenwait = $[_0x4caf('0')]() ? process[_0x4caf('4')][_0x4caf('13')] ? process[_0x4caf('4')][_0x4caf('13')] : '' + guaopenwait : $[_0x4caf('8')](_0x4caf('13')) ? $[_0x4caf('8')](_0x4caf('13')) : '' + guaopenwait;
guaopenwait = $[_0x4caf('0')]() ? process[_0x4caf('4')][_0x4caf('14')] ? process[_0x4caf('4')][_0x4caf('14')] : '' + guaopenwait : $[_0x4caf('8')](_0x4caf('14')) ? $[_0x4caf('8')](_0x4caf('14')) : '' + guaopenwait;
guaopenwait = parseInt(guaopenwait, 0xa) || 0x0;
allMessage = '';
message = '';
$[_0x4caf('15')] = ![];
$[_0x4caf('16')] = ![];
$[_0x4caf('17')] = ![];
let lz_jdpin_token_cookie = '';
let activityCookie = '';
!(async () => {
    if ($[_0x4caf('0')]()) {
        if (guaopencard + '' != _0x4caf('18')) {
            console[_0x4caf('7')](_0x4caf('19'));
        }
        if (guaopencard + '' != _0x4caf('18')) {
            return;
        }
    }
    if (!cookiesArr[0x0]) {
        $[_0x4caf('1a')]($[_0x4caf('1b')], _0x4caf('1c'), _0x4caf('1d'), {
            'open-url': _0x4caf('1d')
        });
        return;
    }
    $[_0x4caf('1e')] = _0x4caf('1f');
    $[_0x4caf('20')] = _0x4caf('21');
    console[_0x4caf('7')](_0x4caf('22') + $[_0x4caf('1e')] + _0x4caf('23') + $[_0x4caf('20')]);
    for (let _0x24140f = 0x0; _0x24140f < cookiesArr[_0x4caf('24')]; _0x24140f++) {
        cookie = cookiesArr[_0x24140f];
        if (cookie) {
            $[_0x4caf('25')] = decodeURIComponent(cookie[_0x4caf('26')](/pt_pin=([^; ]+)(?=;?)/) && cookie[_0x4caf('26')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $[_0x4caf('27')] = _0x24140f + 0x1;
            message = '';
            $[_0x4caf('28')] = 0x0;
            $[_0x4caf('15')] = ![];
            $[_0x4caf('29')] = '';
            console[_0x4caf('7')](_0x4caf('2a') + $[_0x4caf('27')] + '】' + ($[_0x4caf('29')] || $[_0x4caf('25')]) + _0x4caf('2b'));
            await getUA();
            await run();
            if (_0x24140f == 0x0 && !$[_0x4caf('2c')]) break;
            if ($[_0x4caf('16')] || $[_0x4caf('17')]) break;
        }
    }
    if ($[_0x4caf('16')]) {
        let _0x5ca2c4 = _0x4caf('2d');
        $[_0x4caf('1a')]($[_0x4caf('1b')], '', '' + _0x5ca2c4);
        if ($[_0x4caf('0')]()) await notify[_0x4caf('2e')]('' + $[_0x4caf('1b')], '' + _0x5ca2c4);
    }
})()[_0x4caf('2f')](_0x3c8e00 => $[_0x4caf('30')](_0x3c8e00))[_0x4caf('31')](() => $[_0x4caf('32')]());
async function run() {
    try {
        $[_0x4caf('33')] = !![];
        $[_0x4caf('34')] = 0x0;
        lz_jdpin_token_cookie = '';
        $[_0x4caf('35')] = '';
        $[_0x4caf('36')] = '';
        let _0xf659a = ![];
        await takePostRequest(_0x4caf('37'));
        if ($[_0x4caf('35')] == '') {
            console[_0x4caf('7')](_0x4caf('38'));
            return;
        }
        await getCk();
        if (activityCookie == '') {
            console[_0x4caf('7')](_0x4caf('39'));
            return;
        }
        if ($[_0x4caf('16')]) {
            console[_0x4caf('7')](_0x4caf('3a'));
            return;
        }
        await takePostRequest(_0x4caf('3b'));
        await takePostRequest(_0x4caf('3c'));
        if (!$[_0x4caf('36')]) {
            console[_0x4caf('7')](_0x4caf('3d'));
            return;
        }
        await takePostRequest(_0x4caf('3e'));
        await takePostRequest(_0x4caf('3f'));
        await takePostRequest(_0x4caf('40'));
        if (!$[_0x4caf('2c')]) {
            console[_0x4caf('7')](_0x4caf('41'));
            return;
        }
        if ($[_0x4caf('33')] === !![] || Date[_0x4caf('42')]() > $[_0x4caf('34')]) {
            $[_0x4caf('17')] = !![];
            console[_0x4caf('7')](_0x4caf('43'));
            return;
        }
        await takePostRequest(_0x4caf('44'));
        await $[_0x4caf('45')](0x3e8);
        $[_0x4caf('46')] = [];
        $[_0x4caf('47')] = ![];
        await takePostRequest(_0x4caf('48'));
        if ($[_0x4caf('47')] == ![]) {
            console[_0x4caf('7')](_0x4caf('49'));
            for (o of $[_0x4caf('46')]) {
                $[_0x4caf('4a')] = ![];
                if (o[_0x4caf('4b')] == 0x0) {
                    _0xf659a = !![];
                    $[_0x4caf('4c')] = o[_0x4caf('4d')];
                    await $[_0x4caf('45')](parseInt(Math[_0x4caf('4e')]() * 0xbb8 + 0xbb8, 0xa));
                    await joinShop();
                    await $[_0x4caf('45')](parseInt(Math[_0x4caf('4e')]() * 0x3e8 + 0x3e8, 0xa));
                    await takePostRequest(_0x4caf('44'));
                    await takePostRequest(_0x4caf('48'));
                    await $[_0x4caf('45')](parseInt(Math[_0x4caf('4e')]() * 0xbb8 + 0x7d0, 0xa));
                }
            }
            await getCk();
            await takePostRequest(_0x4caf('40'));
        } else {
            console[_0x4caf('7')](_0x4caf('4f'));
        }
        if ($[_0x4caf('50')] == 0x1 && !$[_0x4caf('16')]) {
            $[_0x4caf('51')] = 0x1;
            _0xf659a = !![];
            await takePostRequest(_0x4caf('51'));
            await $[_0x4caf('45')](parseInt(Math[_0x4caf('4e')]() * 0x3e8 + 0xbb8, 0xa));
        }
        if ($[_0x4caf('52')] == 0x1 && !$[_0x4caf('16')]) {
            $[_0x4caf('51')] = 0x2;
            _0xf659a = !![];
            await takePostRequest(_0x4caf('51'));
            await $[_0x4caf('45')](parseInt(Math[_0x4caf('4e')]() * 0x3e8 + 0xbb8, 0xa));
        }
        $[_0x4caf('7')](_0x4caf('53') + $[_0x4caf('54')]);
        if (!$[_0x4caf('54')] && !$[_0x4caf('16')]) {
            _0xf659a = !![];
            await takePostRequest(_0x4caf('54'));
            await $[_0x4caf('45')](parseInt(Math[_0x4caf('4e')]() * 0x3e8 + 0x1388, 0xa));
        }
        $[_0x4caf('7')](_0x4caf('55') + $[_0x4caf('56')]);
        if (!$[_0x4caf('56')] && !$[_0x4caf('16')]) {
            if (guaopencard_addSku + '' == _0x4caf('18')) {
                _0xf659a = !![];
                await takePostRequest(_0x4caf('56'));
                await $[_0x4caf('45')](parseInt(Math[_0x4caf('4e')]() * 0x3e8 + 0x1388, 0xa));
            } else {
                console[_0x4caf('7')](_0x4caf('57'));
            }
        }
        $[_0x4caf('58')] = !![];
        $[_0x4caf('7')](_0x4caf('59') + $[_0x4caf('5a')]);
        if (!$[_0x4caf('5a')] && !$[_0x4caf('16')]) {
            _0xf659a = !![];
            for (let _0x5eeb77 of $[_0x4caf('5b')] || []) {
                if ($[_0x4caf('58')] == ![]) break;
                if (_0x5eeb77[_0x4caf('4d')] && _0x5eeb77[_0x4caf('4b')] === 0x0) {
                    $[_0x4caf('5c')] = _0x5eeb77[_0x4caf('4d')];
                    await takePostRequest(_0x4caf('5a'));
                    await $[_0x4caf('45')](parseInt(Math[_0x4caf('4e')]() * 0xbb8 + 0xbb8, 0xa));
                }
            }
        }
        if (_0xf659a) {
            await takePostRequest(_0x4caf('40'));
        }
        await $[_0x4caf('45')](parseInt(Math[_0x4caf('4e')]() * 0x3e8 + 0x7d0, 0xa));
        await takePostRequest(_0x4caf('5d'));
        await takePostRequest(_0x4caf('5e'));
        if ($[_0x4caf('16')]) {
            console[_0x4caf('7')](_0x4caf('3a'));
            return;
        }
        console[_0x4caf('7')]($[_0x4caf('2c')]);
        console[_0x4caf('7')](_0x4caf('5f') + $[_0x4caf('20')]);
        if ($[_0x4caf('27')] == 0x1) {
            $[_0x4caf('20')] = $[_0x4caf('2c')];
            console[_0x4caf('7')](_0x4caf('60') + $[_0x4caf('20')]);
        }
        await $[_0x4caf('45')](parseInt(Math[_0x4caf('4e')]() * 0x3e8 + 0x1388, 0xa));
        if (_0xf659a) await $[_0x4caf('45')](parseInt(Math[_0x4caf('4e')]() * 0x3e8 + 0x2710, 0xa));
        if (guaopenwait) {
            if ($[_0x4caf('27')] != cookiesArr[_0x4caf('24')]) {
                console[_0x4caf('7')]('等待' + guaopenwait + '秒');
                await $[_0x4caf('45')](parseInt(guaopenwait, 0xa) * 0x3e8);
            }
        } else {
            if ($[_0x4caf('27')] % 0x3 == 0x0) console[_0x4caf('7')](_0x4caf('61'));
            if ($[_0x4caf('27')] % 0x3 == 0x0) await $[_0x4caf('45')](parseInt(Math[_0x4caf('4e')]() * 0x1388 + 0xea60, 0xa));
        }
    } catch (_0x1f2639) {
        console[_0x4caf('7')](_0x1f2639);
    }
}
async function takePostRequest(_0x27843c) {
    if ($[_0x4caf('16')]) return;
    let _0x394b7c = _0x4caf('62');
    let _0x55818a = '';
    let _0x201309 = _0x4caf('63');
    let _0x39faed = '';
    switch (_0x27843c) {
        case _0x4caf('37'):
            _0x394b7c = _0x4caf('64');
            _0x55818a = _0x4caf('65');
            break;
        case _0x4caf('3b'):
            _0x394b7c = _0x394b7c + _0x4caf('66');
            _0x55818a = _0x4caf('67') + $[_0x4caf('1e')];
            break;
        case _0x4caf('3c'):
            _0x394b7c = _0x394b7c + _0x4caf('68');
            _0x55818a = _0x4caf('69') + ($[_0x4caf('6a')] || $[_0x4caf('6b')] || '') + _0x4caf('6c') + $[_0x4caf('35')] + _0x4caf('6d');
            break;
        case _0x4caf('3e'):
            _0x394b7c = _0x394b7c + _0x4caf('6e');
            let _0x5c435c = _0x394b7c + _0x4caf('6f') + $[_0x4caf('1e')] + _0x4caf('23') + $[_0x4caf('20')];
            _0x55818a = _0x4caf('70') + ($[_0x4caf('6a')] || $[_0x4caf('6b')] || '') + _0x4caf('71') + encodeURIComponent($[_0x4caf('36')]) + _0x4caf('72') + $[_0x4caf('1e')] + _0x4caf('73') + encodeURIComponent(_0x5c435c) + _0x4caf('74');
            break;
        case _0x4caf('3f'):
            _0x394b7c = _0x394b7c + _0x4caf('75');
            _0x55818a = _0x4caf('76') + encodeURIComponent($[_0x4caf('36')]);
            break;
        case _0x4caf('40'):
            _0x394b7c = _0x394b7c + _0x4caf('77');
            _0x55818a = _0x4caf('67') + $[_0x4caf('1e')] + _0x4caf('78') + encodeURIComponent($[_0x4caf('36')]) + _0x4caf('79') + encodeURIComponent($[_0x4caf('7a')]) + _0x4caf('7b') + encodeURIComponent($[_0x4caf('7c')]) + _0x4caf('7d') + $[_0x4caf('20')];
            break;
        case _0x4caf('44'):
            _0x394b7c = _0x394b7c + _0x4caf('7e');
            _0x55818a = _0x4caf('67') + $[_0x4caf('1e')] + _0x4caf('78') + encodeURIComponent($[_0x4caf('36')]);
            break;
        case _0x4caf('48'):
            _0x394b7c = _0x394b7c + _0x4caf('7f');
            _0x55818a = _0x4caf('67') + $[_0x4caf('1e')] + _0x4caf('78') + encodeURIComponent($[_0x4caf('36')]) + _0x4caf('80') + $[_0x4caf('2c')] + _0x4caf('23') + $[_0x4caf('20')];
            break;
        case _0x4caf('51'):
            _0x394b7c = _0x394b7c + _0x4caf('81');
            _0x55818a = _0x4caf('67') + $[_0x4caf('1e')] + _0x4caf('80') + $[_0x4caf('2c')] + _0x4caf('78') + encodeURIComponent($[_0x4caf('36')]) + ($[_0x4caf('51')] && _0x4caf('82') + $[_0x4caf('51')] || '');
            break;
        case _0x4caf('54'):
            _0x394b7c = _0x394b7c + _0x4caf('83');
            _0x55818a = _0x4caf('67') + $[_0x4caf('1e')] + _0x4caf('78') + encodeURIComponent($[_0x4caf('36')]) + _0x4caf('80') + $[_0x4caf('2c')] + _0x4caf('23') + $[_0x4caf('20')] + _0x4caf('84') + $[_0x4caf('85')];
            break;
        case _0x4caf('86'):
        case _0x4caf('5a'):
        case _0x4caf('87'):
        case _0x4caf('56'):
            _0x394b7c = _0x394b7c + _0x4caf('88');
            let _0x221a94 = '';
            let _0x374dcf = '';
            if (_0x27843c == _0x4caf('86')) {
                _0x221a94 = 0x1f;
                _0x374dcf = 0x1f;
            } else if (_0x27843c == _0x4caf('5a')) {
                _0x221a94 = 0x5;
                _0x374dcf = $[_0x4caf('5c')] || 0x5;
            } else if (_0x27843c == _0x4caf('87')) {
                _0x221a94 = 0xe;
                _0x374dcf = $[_0x4caf('89')] || 0xe;
            } else if (_0x27843c == _0x4caf('56')) {
                _0x221a94 = 0x2;
                _0x374dcf = $[_0x4caf('8a')] || 0x2;
            }
            _0x55818a = _0x4caf('67') + $[_0x4caf('1e')] + _0x4caf('78') + encodeURIComponent($[_0x4caf('36')]) + _0x4caf('80') + $[_0x4caf('2c')] + _0x4caf('8b') + _0x221a94 + _0x4caf('8c') + _0x374dcf;
            break;
        case _0x4caf('5d'):
            _0x394b7c = _0x394b7c + _0x4caf('8d');
            _0x55818a = _0x4caf('67') + $[_0x4caf('1e')] + _0x4caf('78') + encodeURIComponent($[_0x4caf('36')]) + _0x4caf('80') + $[_0x4caf('2c')];
            break;
        case _0x4caf('5e'):
            _0x394b7c = _0x394b7c + _0x4caf('8e');
            _0x55818a = _0x4caf('67') + $[_0x4caf('1e')] + _0x4caf('78') + encodeURIComponent($[_0x4caf('36')]) + _0x4caf('80') + $[_0x4caf('2c')];
            break;
        default:
            console[_0x4caf('7')]('错误' + _0x27843c);
    }
    let _0x1d8a9c = getPostRequest(_0x394b7c, _0x55818a, _0x201309);
    return new Promise(async _0x336fdb => {
        $[_0x4caf('8f')](_0x1d8a9c, (_0x66c056, _0x4023ea, _0xa2809) => {
            try {
                setActivityCookie(_0x4023ea);
                if (_0x66c056) {
                    if (_0x4023ea && typeof _0x4023ea[_0x4caf('90')] != _0x4caf('91')) {
                        if (_0x4023ea[_0x4caf('90')] == 0x1ed) {
                            console[_0x4caf('7')](_0x4caf('3a'));
                            $[_0x4caf('16')] = !![];
                        }
                    }
                    console[_0x4caf('7')]('' + $[_0x4caf('92')](_0x66c056, _0x66c056));
                    console[_0x4caf('7')](_0x27843c + _0x4caf('93'));
                } else {
                    dealReturn(_0x27843c, _0xa2809);
                }
            } catch (_0x19543d) {
                console[_0x4caf('7')](_0x19543d, _0x4023ea);
            } finally {
                _0x336fdb();
            }
        });
    });
}
async function dealReturn(_0x1a4cf0, _0x24f0e5) {
    let _0x45f605 = '';
    try {
        if (_0x1a4cf0 != _0x4caf('3e') || _0x1a4cf0 != _0x4caf('44')) {
            if (_0x24f0e5) {
                _0x45f605 = JSON[_0x4caf('94')](_0x24f0e5);
            }
        }
    } catch (_0x322622) {
        console[_0x4caf('7')](_0x1a4cf0 + _0x4caf('95'));
        console[_0x4caf('7')](_0x24f0e5);
        $[_0x4caf('58')] = ![];
    }
    try {
        switch (_0x1a4cf0) {
            case _0x4caf('37'):
                if (typeof _0x45f605 == _0x4caf('96')) {
                    if (_0x45f605[_0x4caf('97')] == 0x0) {
                        if (typeof _0x45f605[_0x4caf('98')] != _0x4caf('91')) $[_0x4caf('35')] = _0x45f605[_0x4caf('98')];
                    } else if (_0x45f605[_0x4caf('99')]) {
                        console[_0x4caf('7')](_0x4caf('9a') + (_0x45f605[_0x4caf('99')] || ''));
                    } else {
                        console[_0x4caf('7')](_0x24f0e5);
                    }
                } else {
                    console[_0x4caf('7')](_0x24f0e5);
                }
                break;
            case _0x4caf('3b'):
                if (typeof _0x45f605 == _0x4caf('96')) {
                    if (_0x45f605[_0x4caf('9b')] && _0x45f605[_0x4caf('9b')] === !![]) {
                        if (typeof _0x45f605[_0x4caf('9c')][_0x4caf('6a')] != _0x4caf('91')) $[_0x4caf('6a')] = _0x45f605[_0x4caf('9c')][_0x4caf('6a')];
                        if (typeof _0x45f605[_0x4caf('9c')][_0x4caf('6b')] != _0x4caf('91')) $[_0x4caf('6b')] = _0x45f605[_0x4caf('9c')][_0x4caf('6b')];
                    } else if (_0x45f605[_0x4caf('9d')]) {
                        console[_0x4caf('7')](_0x1a4cf0 + ' ' + (_0x45f605[_0x4caf('9d')] || ''));
                    } else {
                        console[_0x4caf('7')](_0x1a4cf0 + ' ' + _0x24f0e5);
                    }
                } else {
                    console[_0x4caf('7')](_0x1a4cf0 + ' ' + _0x24f0e5);
                }
                break;
            case _0x4caf('3c'):
                if (typeof _0x45f605 == _0x4caf('96')) {
                    if (_0x45f605[_0x4caf('9b')] && _0x45f605[_0x4caf('9b')] === !![]) {
                        if (_0x45f605[_0x4caf('9c')] && typeof _0x45f605[_0x4caf('9c')][_0x4caf('9e')] != _0x4caf('91')) $[_0x4caf('36')] = _0x45f605[_0x4caf('9c')][_0x4caf('9e')];
                        if (_0x45f605[_0x4caf('9c')] && typeof _0x45f605[_0x4caf('9c')][_0x4caf('7c')] != _0x4caf('91')) $[_0x4caf('7c')] = _0x45f605[_0x4caf('9c')][_0x4caf('7c')];
                    } else if (_0x45f605[_0x4caf('9d')]) {
                        console[_0x4caf('7')](_0x1a4cf0 + ' ' + (_0x45f605[_0x4caf('9d')] || ''));
                    } else {
                        console[_0x4caf('7')](_0x1a4cf0 + ' ' + _0x24f0e5);
                    }
                } else {
                    console[_0x4caf('7')](_0x1a4cf0 + ' ' + _0x24f0e5);
                }
                break;
            case _0x4caf('3f'):
                if (typeof _0x45f605 == _0x4caf('96')) {
                    if (_0x45f605[_0x4caf('9b')] && _0x45f605[_0x4caf('9b')] === !![]) {
                        if (_0x45f605[_0x4caf('9c')] && typeof _0x45f605[_0x4caf('9c')][_0x4caf('9f')] != _0x4caf('91')) $[_0x4caf('7a')] = _0x45f605[_0x4caf('9c')][_0x4caf('9f')] || _0x4caf('a0');
                    } else if (_0x45f605[_0x4caf('9d')]) {
                        console[_0x4caf('7')](_0x1a4cf0 + ' ' + (_0x45f605[_0x4caf('9d')] || ''));
                    } else {
                        console[_0x4caf('7')](_0x1a4cf0 + ' ' + _0x24f0e5);
                    }
                } else {
                    console[_0x4caf('7')](_0x1a4cf0 + ' ' + _0x24f0e5);
                }
                break;
            case _0x4caf('40'):
                if (typeof _0x45f605 == _0x4caf('96')) {
                    if (_0x45f605[_0x4caf('9b')] && _0x45f605[_0x4caf('9b')] === !![]) {
                        $[_0x4caf('34')] = _0x45f605[_0x4caf('9c')][_0x4caf('34')] || 0x0;
                        $[_0x4caf('33')] = _0x45f605[_0x4caf('9c')][_0x4caf('33')] || ![];
                        $[_0x4caf('2c')] = _0x45f605[_0x4caf('9c')][_0x4caf('2c')] || '';
                        $[_0x4caf('54')] = _0x45f605[_0x4caf('9c')][_0x4caf('54')][_0x4caf('a1')] || ![];
                        $[_0x4caf('56')] = _0x45f605[_0x4caf('9c')][_0x4caf('56')][_0x4caf('a1')] || ![];
                        if (_0x45f605[_0x4caf('9c')][_0x4caf('54')] && _0x45f605[_0x4caf('9c')][_0x4caf('54')][_0x4caf('a2')] && _0x45f605[_0x4caf('9c')][_0x4caf('54')][_0x4caf('a2')][0x0]) {
                            $[_0x4caf('85')] = _0x45f605[_0x4caf('9c')][_0x4caf('54')][_0x4caf('a2')][0x0][_0x4caf('4d')] || 0x1;
                        }
                        if (_0x45f605[_0x4caf('9c')][_0x4caf('56')] && _0x45f605[_0x4caf('9c')][_0x4caf('56')][_0x4caf('a2')] && _0x45f605[_0x4caf('9c')][_0x4caf('56')][_0x4caf('a2')][0x0]) {
                            $[_0x4caf('8a')] = _0x45f605[_0x4caf('9c')][_0x4caf('56')][_0x4caf('a2')][0x0][_0x4caf('4d')] || 0x2;
                        }
                        $[_0x4caf('5a')] = _0x45f605[_0x4caf('9c')][_0x4caf('5a')][_0x4caf('a1')] || ![];
                        $[_0x4caf('5b')] = _0x45f605[_0x4caf('9c')][_0x4caf('5a')][_0x4caf('a2')] || [];
                    } else if (_0x45f605[_0x4caf('9d')]) {
                        console[_0x4caf('7')](_0x1a4cf0 + ' ' + (_0x45f605[_0x4caf('9d')] || ''));
                    } else {
                        console[_0x4caf('7')](_0x1a4cf0 + ' ' + _0x24f0e5);
                    }
                } else {
                    console[_0x4caf('7')](_0x1a4cf0 + ' ' + _0x24f0e5);
                }
                break;
            case _0x4caf('48'):
                if (typeof _0x45f605 == _0x4caf('96')) {
                    if (_0x45f605[_0x4caf('9b')] && _0x45f605[_0x4caf('9b')] === !![]) {
                        let _0x25ffc4 = _0x45f605[_0x4caf('9c')][_0x4caf('a3')] || [];
                        let _0xb88c0f = _0x45f605[_0x4caf('9c')][_0x4caf('a4')] || [];
                        let _0x5e0f53 = _0x45f605[_0x4caf('9c')][_0x4caf('a5')] || [];
                        $[_0x4caf('46')] = [..._0x5e0f53, ..._0x25ffc4, ..._0xb88c0f];
                        $[_0x4caf('47')] = _0x45f605[_0x4caf('9c')][_0x4caf('47')] || ![];
                        $[_0x4caf('50')] = _0x45f605[_0x4caf('9c')][_0x4caf('a6')] || 0x0;
                        $[_0x4caf('52')] = _0x45f605[_0x4caf('9c')][_0x4caf('a7')] || 0x0;
                        $[_0x4caf('a8')] = _0x45f605[_0x4caf('9c')][_0x4caf('a8')] || 0x0;
                    } else if (_0x45f605[_0x4caf('9d')]) {
                        console[_0x4caf('7')](_0x1a4cf0 + ' ' + (_0x45f605[_0x4caf('9d')] || ''));
                    } else {
                        console[_0x4caf('7')](_0x1a4cf0 + ' ' + _0x24f0e5);
                    }
                } else {
                    console[_0x4caf('7')](_0x1a4cf0 + ' ' + _0x24f0e5);
                }
                break;
            case _0x4caf('51'):
            case _0x4caf('54'):
            case _0x4caf('86'):
            case _0x4caf('5a'):
            case _0x4caf('87'):
            case _0x4caf('56'):
                if (typeof _0x45f605 == _0x4caf('96')) {
                    if (_0x45f605[_0x4caf('9b')] && _0x45f605[_0x4caf('9b')] === !![]) {
                        if (typeof _0x45f605[_0x4caf('9c')] == _0x4caf('96')) {
                            let _0x5785be = '';
                            let _0x402d0c = '抽奖';
                            if (_0x45f605[_0x4caf('9c')][_0x4caf('a9')] && _0x45f605[_0x4caf('9c')][_0x4caf('aa')]) {
                                _0x5785be = _0x45f605[_0x4caf('9c')][_0x4caf('a9')] + '京豆';
                            }
                            if (_0x1a4cf0 == _0x4caf('54')) {
                                _0x402d0c = '关注';
                                if (_0x45f605[_0x4caf('9c')][_0x4caf('ab')] && _0x45f605[_0x4caf('9c')][_0x4caf('ac')]) {
                                    _0x5785be += _0x4caf('ad') + _0x45f605[_0x4caf('9c')][_0x4caf('ab')] + '京豆';
                                }
                            } else if (_0x1a4cf0 == _0x4caf('56')) {
                                _0x402d0c = '加购';
                            } else if (_0x1a4cf0 == _0x4caf('86')) {
                                _0x402d0c = _0x4caf('ae');
                            } else if (_0x1a4cf0 == _0x4caf('87')) {
                                _0x402d0c = _0x4caf('af');
                            } else if (_0x1a4cf0 == _0x4caf('5a')) {
                                _0x402d0c = _0x4caf('b0');
                            } else {
                                _0x5785be = _0x45f605[_0x4caf('9c')][_0x4caf('b1')] == !![] && (_0x45f605[_0x4caf('9c')][_0x4caf('b2')] == 0x6 && _0x45f605[_0x4caf('9c')][_0x4caf('1b')] || '') || _0x4caf('b3');
                            }
                            if (!_0x5785be) {
                                _0x5785be = _0x4caf('b3');
                            }
                            console[_0x4caf('7')](_0x402d0c + _0x4caf('b4') + (_0x5785be || _0x24f0e5));
                        } else {
                            console[_0x4caf('7')](_0x1a4cf0 + ' ' + _0x24f0e5);
                        }
                    } else if (_0x45f605[_0x4caf('9d')]) {
                        $[_0x4caf('58')] = ![];
                        console[_0x4caf('7')](_0x1a4cf0 + ' ' + (_0x45f605[_0x4caf('9d')] || ''));
                    } else {
                        console[_0x4caf('7')](_0x1a4cf0 + ' ' + _0x24f0e5);
                    }
                } else {
                    console[_0x4caf('7')](_0x1a4cf0 + ' ' + _0x24f0e5);
                }
                break;
            case _0x4caf('5d'):
                if (typeof _0x45f605 == _0x4caf('96')) {
                    if (_0x45f605[_0x4caf('9b')] && _0x45f605[_0x4caf('9b')] === !![]) {
                        console[_0x4caf('7')](_0x4caf('b5'));
                        let _0x426489 = 0x0;
                        let _0x3eaa52 = 0x0;
                        for (let _0xc96337 in _0x45f605[_0x4caf('9c')]) {
                            let _0x4c5054 = _0x45f605[_0x4caf('9c')][_0xc96337];
                            if (_0x4c5054[_0x4caf('4d')] == _0x4caf('b6')) _0x426489++;
                            if (_0x4c5054[_0x4caf('4d')] == _0x4caf('b6')) _0x3eaa52 = _0x4c5054[_0x4caf('b7')][_0x4caf('b8')]('京豆', '');
                            if (_0x4c5054[_0x4caf('4d')] != _0x4caf('b6')) console[_0x4caf('7')]('' + (_0x4c5054[_0x4caf('b9')] != 0xa && _0x4c5054[_0x4caf('4d')] + ':' || '') + _0x4c5054[_0x4caf('b7')]);
                        }
                        if (_0x426489 > 0x0) console[_0x4caf('7')](_0x4caf('ba') + _0x426489 + '):' + (_0x426489 * parseInt(_0x3eaa52, 0xa) || 0x1e) + '京豆');
                    } else if (_0x45f605[_0x4caf('9d')]) {
                        console[_0x4caf('7')](_0x1a4cf0 + ' ' + (_0x45f605[_0x4caf('9d')] || ''));
                    } else {
                        console[_0x4caf('7')](_0x1a4cf0 + ' ' + _0x24f0e5);
                    }
                } else {
                    console[_0x4caf('7')](_0x1a4cf0 + ' ' + _0x24f0e5);
                }
                break;
            case _0x4caf('5e'):
                if (typeof _0x45f605 == _0x4caf('96')) {
                    if (_0x45f605[_0x4caf('9b')] && _0x45f605[_0x4caf('9b')] === !![] && _0x45f605[_0x4caf('9c')]) {
                        $[_0x4caf('bb')] = _0x45f605[_0x4caf('9c')][_0x4caf('24')];
                        $[_0x4caf('7')](_0x4caf('bc') + _0x45f605[_0x4caf('9c')][_0x4caf('24')] + '个');
                    } else if (_0x45f605[_0x4caf('9d')]) {
                        console[_0x4caf('7')](_0x1a4cf0 + ' ' + (_0x45f605[_0x4caf('9d')] || ''));
                    } else {
                        console[_0x4caf('7')](_0x1a4cf0 + ' ' + _0x24f0e5);
                    }
                } else {
                    console[_0x4caf('7')](_0x1a4cf0 + ' ' + _0x24f0e5);
                }
                break;
            case _0x4caf('3e'):
            case _0x4caf('44'):
                break;
            default:
                console[_0x4caf('7')](_0x1a4cf0 + _0x4caf('bd') + _0x24f0e5);
        }
        if (typeof _0x45f605 == _0x4caf('96')) {
            if (_0x45f605[_0x4caf('9d')]) {
                if (_0x45f605[_0x4caf('9d')][_0x4caf('be')]('火爆') > -0x1) {
                    $[_0x4caf('15')] = !![];
                }
            }
        }
    } catch (_0xa27fa0) {
        console[_0x4caf('7')](_0xa27fa0);
    }
}

function getPostRequest(_0x5d9243, _0x922c17, _0x30a78c = _0x4caf('63')) {
    let _0xc5d19b = {
        'Accept': _0x4caf('bf'),
        'Accept-Encoding': _0x4caf('c0'),
        'Accept-Language': _0x4caf('c1'),
        'Connection': _0x4caf('c2'),
        'Content-Type': _0x4caf('c3'),
        'Cookie': cookie,
        'User-Agent': $['UA'],
        'X-Requested-With': _0x4caf('c4')
    };
    if (_0x5d9243[_0x4caf('be')](_0x4caf('62')) > -0x1) {
        _0xc5d19b[_0x4caf('c5')] = _0x4caf('c6') + $[_0x4caf('1e')] + _0x4caf('23') + $[_0x4caf('20')];
        _0xc5d19b[_0x4caf('c7')] = '' + (lz_jdpin_token_cookie && lz_jdpin_token_cookie || '') + ($[_0x4caf('36')] && _0x4caf('c8') + $[_0x4caf('36')] + ';' || '') + activityCookie;
    }
    return {
        'url': _0x5d9243,
        'method': _0x30a78c,
        'headers': _0xc5d19b,
        'body': _0x922c17,
        'timeout': 0x7530
    };
}

function getCk() {
    return new Promise(_0x30e9e6 => {
        let _0x60e006 = {
            'url': _0x4caf('c6') + $[_0x4caf('1e')] + _0x4caf('23') + $[_0x4caf('20')],
            'followRedirect': ![],
            'headers': {
                'User-Agent': $['UA']
            },
            'timeout': 0x7530
        };
        $[_0x4caf('c9')](_0x60e006, async (_0x5b94ac, _0x580156, _0x2085d6) => {
            try {
                if (_0x5b94ac) {
                    if (_0x580156 && typeof _0x580156[_0x4caf('90')] != _0x4caf('91')) {
                        if (_0x580156[_0x4caf('90')] == 0x1ed) {
                            console[_0x4caf('7')](_0x4caf('3a'));
                            $[_0x4caf('16')] = !![];
                        }
                    }
                    console[_0x4caf('7')]('' + $[_0x4caf('92')](_0x5b94ac));
                    console[_0x4caf('7')]($[_0x4caf('1b')] + _0x4caf('ca'));
                } else {
                    setActivityCookie(_0x580156);
                }
            } catch (_0x38a029) {
                $[_0x4caf('30')](_0x38a029, _0x580156);
            } finally {
                _0x30e9e6();
            }
        });
    });
}

function setActivityCookie(_0x5e70b7) {
    let _0x34774b = '';
    let _0x389827 = '';
    let _0x5de139 = '';
    let _0x55bc58 = _0x5e70b7 && _0x5e70b7[_0x4caf('cb')] && (_0x5e70b7[_0x4caf('cb')][_0x4caf('cc')] || _0x5e70b7[_0x4caf('cb')][_0x4caf('cd')] || '') || '';
    let _0xfd6c1b = '';
    if (_0x55bc58) {
        if (typeof _0x55bc58 != _0x4caf('96')) {
            _0xfd6c1b = _0x55bc58[_0x4caf('ce')](',');
        } else _0xfd6c1b = _0x55bc58;
        for (let _0x12704e of _0xfd6c1b) {
            let _0x21eb15 = _0x12704e[_0x4caf('ce')](';')[0x0][_0x4caf('cf')]();
            if (_0x21eb15[_0x4caf('ce')]('=')[0x1]) {
                if (_0x21eb15[_0x4caf('be')](_0x4caf('d0')) > -0x1) _0x34774b = _0x21eb15[_0x4caf('b8')](/ /g, '') + ';';
                if (_0x21eb15[_0x4caf('be')](_0x4caf('d1')) > -0x1) _0x389827 = _0x21eb15[_0x4caf('b8')](/ /g, '') + ';';
                if (_0x21eb15[_0x4caf('be')](_0x4caf('d2')) > -0x1) _0x5de139 = '' + _0x21eb15[_0x4caf('b8')](/ /g, '') + ';';
            }
        }
    }
    if (_0x34774b && _0x389827) activityCookie = _0x34774b + ' ' + _0x389827;
    if (_0x5de139) lz_jdpin_token_cookie = _0x5de139;
}
async function getUA() {
    $['UA'] = _0x4caf('d3') + randomString(0x28) + _0x4caf('d4');
}

function randomString(_0x166376) {
    _0x166376 = _0x166376 || 0x20;
    let _0x15437b = _0x4caf('d5'),
        _0x44feaa = _0x15437b[_0x4caf('24')],
        _0x547a82 = '';
    for (i = 0x0; i < _0x166376; i++) _0x547a82 += _0x15437b[_0x4caf('d6')](Math[_0x4caf('d7')](Math[_0x4caf('4e')]() * _0x44feaa));
    return _0x547a82;
};
_0xodU = 'jsjiami.com.v6';
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
         console.log(data)
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


// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

