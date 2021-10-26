/*
10.19~10.25 大牌强联合 好物提前购 [gua_opencard47.js]
新增开卡脚本 (脚本已加密
一次性脚本

1.邀请一人20豆
2.开2组(共8张) 成功开1组 获得1次抽奖
  抽奖可能获得30京豆
3.关注10豆 
4.加购5京豆
  (默认不加购 如需加购请设置环境变量[guaopencard_addSku47]为"true"
5.浏览店铺1豆/个

第一个账号助力作者 其他依次助力CK1
第一个CK失效会退出脚本

默认脚本不执行
如需执行脚本请设置环境变量
guaopencard47="true"
每个账号之间延迟 100=延迟100秒 0=延迟0秒会使用每3个账号延迟60秒
guaopenwait_All 所有
guaopenwait47="0"


All变量适用
————————————————
入口：[ 10.19~10.25 大牌强联合 好物提前购 (https://lzdz1-isv.isvjcloud.com/dingzhi/dz/openCard/activity?activityId=dz20210929skcnurdk34jkkl3dsf4awqw&shareUuid=1cb8379d162c43fb81cd4d7527721888)]

请求太频繁会被黑ip
过10分钟再执行

============Quantumultx===============
[task_local]
#10.19~10.25 大牌强联合 好物提前购
47 3 19-25 10 * https://raw.githubusercontent.com/smiek2221/scripts/master/gua_opencard47.js, tag=10.19~10.25 大牌强联合 好物提前购, enabled=true

*/
let guaopencard_addSku = "false"
let guaopencard = "false"
let guaopenwait = "0"

const $ = new Env('10.19~10.25 大牌强联合 好物提前购');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';

var _0xodU = 'jsjiami.com.v6',
    _0x4311 = [_0xodU, 'isNode', 'keys', 'forEach', 'push', 'env', 'JD_DEBUG', 'false', 'log', 'getdata', 'CookieJD', 'CookieJD2', 'CookiesJD', 'map', 'cookie', 'filter', 'guaopencard_addSku47', 'guaopencard_addSku_All', 'guaopencard47', 'guaopencard_All', 'guaopenwait47', 'guaopenwait_All', 'hotFlag', 'outFlag', 'activityEnd', 'true', '如需执行脚本请设置环境变量[guaopencard47]为\"true\"', 'msg', 'name', '【提示】请先获取cookie\x0a直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/', 'activityId', 'dz2021101420000sjleowq', 'shareUuid', '1cb8379d162c43fb81cd4d7527721888', '入口:\x0ahttps://lzdz1-isv.isvjcloud.com/dingzhi/dz/openCard/activity?activityId=', '&shareUuid=', 'length', 'UserName', 'match', 'index', 'bean', 'nickName', '\x0a\x0a******开始【京东账号', '*********\x0a', 'actorUuid', '此ip已被限制，请过10分钟后再执行脚本', 'sendNotify', 'catch', 'logErr', 'finally', 'done', 'hasEnd', 'endTime', 'Token', 'Pin', 'isvObfuscator', '获取[token]失败！', '获取cookie失败', '活动结束', '此ip已被限制，请过10分钟后再执行脚本\x0a', 'getSimpleActInfoVo', 'getMyPing', '获取[Pin]失败！', 'accessLogWithAD', 'getUserInfo', 'activityContent', '获取不到[actorUuid]退出执行，请重新执行', 'now', 'drawContent', 'wait', 'openList', 'allOpenCard', 'checkOpenCard', '开卡任务', 'openCard', 'status', 'joinVenderId', 'value', 'random', '已全部开卡', 'openCardScore1', 'startDraw', 'openCardScore2', '关注: ', 'followShop', '加购: ', 'addSku', '如需加购请设置环境变量[guaopencard_addSku47]为\"true\"', 'runFalag', '浏览商品: ', 'toShop', 'toShopList', 'toShopValue', 'getDrawRecordHasCoupon', 'getShareRecord', '当前助力:', '后面的号都会助力:', '休息1分钟，别被黑ip了\x0a可持续发展', 'https://lzdz1-isv.isvjcloud.com', 'POST', 'https://api.m.jd.com/client.action?functionId=isvObfuscator', 'body=%7B%22url%22%3A%22https%3A//lzdz1-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=0846724fe8d803b8e84ebd14b3ba7fac6df80e7a&client=apple&clientVersion=10.1.4&st=1634616247215&sv=120&sign=91a16ae2feb0bd0e1ea48d99e7953c58', '/dz/common/getSimpleActInfoVo', 'activityId=', '/customer/getMyPing', 'userId=', 'shopId', 'venderId', '&token=', '&fromType=APP', '/common/accessLogWithAD', '/drawCenter/activity?activityId=', 'venderId=', '&code=99&pin=', '&activityId=', '&pageUrl=', '&subType=app&adSource=', '/wxActionCommon/getUserInfo', 'pin=', '/dingzhi/dz/openCard/activityContent', '&pin=', '&pinImg=', 'attrTouXiang', '&nick=', 'nickname', '&cjyxPin=&cjhyPin=&shareUuid=', '/dingzhi/taskact/openCardcommon/drawContent', '/dingzhi/dz/openCard/checkOpenCard', '&actorUuid=', '/dingzhi/dz/openCard/startDraw', '&type=', '/dingzhi/dz/openCard/followShop', '&taskType=23&taskValue=', 'followShopValue', 'viewVideo', 'visitSku', '/dingzhi/dz/openCard/saveTask', 'visitSkuValue', 'addSkuValue', '&taskType=', '&taskValue=', '/dingzhi/taskact/openCardcommon/getDrawRecordHasCoupon', '/dingzhi/taskact/openCardcommon/getShareRecord', 'post', 'statusCode', 'undefined', 'toStr', ' API请求失败，请检查网路重试', 'parse', ' 执行任务异常', 'object', 'errcode', 'token', 'message', 'isvObfuscator ', 'result', 'data', 'errorMessage', 'secretPin', 'yunMidImageUrl', 'https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png', 'allStatus', 'settings', 'cardList1', 'cardList2', 'cardList', 'score1', 'score2', 'drawScore', 'addBeanNum', 'sendStatus', 'beanNumMember', 'assistSendStatus', ' 额外获得:', '热门文章', '浏览店铺', '浏览商品', 'drawOk', 'drawInfoType', '空气💨', '获得:', '我的奖品：', '邀请好友', 'infoName', 'replace', 'infoType', '邀请好友(', 'ShareCount', '=========== 你邀请了:', '-> ', 'indexOf', 'application/json', 'gzip, deflate, br', 'zh-cn', 'keep-alive', 'application/x-www-form-urlencoded', 'XMLHttpRequest', 'Referer', 'https://lzdz1-isv.isvjcloud.com/dingzhi/dz/openCard/activity?activityId=', 'Cookie', 'AUTH_C_USER=', 'get', ' cookie API请求失败，请检查网路重试', '活动已结束', 'headers', 'set-cookie', 'Set-Cookie', 'split', 'trim', 'LZ_TOKEN_KEY=', 'LZ_TOKEN_VALUE=', 'lz_jdpin_token=', 'jdapp;iPhone;10.1.4;13.1.2;', ';network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1', 'abcdef0123456789', 'charAt', 'floor', 'jsjiamKfOi.HXcom.wvOQu6XB=='];
var _0x5a74 = function(_0x208abb, _0x578cd8) {
    _0x208abb = ~~'0x' ['concat'](_0x208abb);
    var _0x58a740 = _0x4311[_0x208abb];
    return _0x58a740;
};
(function(_0x4fbee5, _0x193998) {
    var _0x1a28e5 = 0x0;
    for (_0x193998 = _0x4fbee5['shift'](_0x1a28e5 >> 0x2); _0x193998 && _0x193998 !== (_0x4fbee5['pop'](_0x1a28e5 >> 0x3) + '')['replace'](/[KfOHXwOQuXB=]/g, ''); _0x1a28e5++) {
        _0x1a28e5 = _0x1a28e5 ^ 0xafa7b;
    }
}(_0x4311, _0x5a74));
let cookiesArr = [],
    cookie = '';
if ($[_0x5a74('0')]()) {
    Object[_0x5a74('1')](jdCookieNode)[_0x5a74('2')](_0x2d4bce => {
        cookiesArr[_0x5a74('3')](jdCookieNode[_0x2d4bce]);
    });
    if (process[_0x5a74('4')][_0x5a74('5')] && process[_0x5a74('4')][_0x5a74('5')] === _0x5a74('6')) console[_0x5a74('7')] = () => {};
} else {
    cookiesArr = [$[_0x5a74('8')](_0x5a74('9')), $[_0x5a74('8')](_0x5a74('a')), ...jsonParse($[_0x5a74('8')](_0x5a74('b')) || '[]')[_0x5a74('c')](_0x1ba0bb => _0x1ba0bb[_0x5a74('d')])][_0x5a74('e')](_0x4e0313 => !!_0x4e0313);
}
guaopencard_addSku = $[_0x5a74('0')]() ? process[_0x5a74('4')][_0x5a74('f')] ? process[_0x5a74('4')][_0x5a74('f')] : '' + guaopencard_addSku : $[_0x5a74('8')](_0x5a74('f')) ? $[_0x5a74('8')](_0x5a74('f')) : '' + guaopencard_addSku;
guaopencard_addSku = $[_0x5a74('0')]() ? process[_0x5a74('4')][_0x5a74('10')] ? process[_0x5a74('4')][_0x5a74('10')] : '' + guaopencard_addSku : $[_0x5a74('8')](_0x5a74('10')) ? $[_0x5a74('8')](_0x5a74('10')) : '' + guaopencard_addSku;
guaopencard = $[_0x5a74('0')]() ? process[_0x5a74('4')][_0x5a74('11')] ? process[_0x5a74('4')][_0x5a74('11')] : '' + guaopencard : $[_0x5a74('8')](_0x5a74('11')) ? $[_0x5a74('8')](_0x5a74('11')) : '' + guaopencard;
guaopencard = $[_0x5a74('0')]() ? process[_0x5a74('4')][_0x5a74('12')] ? process[_0x5a74('4')][_0x5a74('12')] : '' + guaopencard : $[_0x5a74('8')](_0x5a74('12')) ? $[_0x5a74('8')](_0x5a74('12')) : '' + guaopencard;
guaopenwait = $[_0x5a74('0')]() ? process[_0x5a74('4')][_0x5a74('13')] ? process[_0x5a74('4')][_0x5a74('13')] : '' + guaopenwait : $[_0x5a74('8')](_0x5a74('13')) ? $[_0x5a74('8')](_0x5a74('13')) : '' + guaopenwait;
guaopenwait = $[_0x5a74('0')]() ? process[_0x5a74('4')][_0x5a74('14')] ? process[_0x5a74('4')][_0x5a74('14')] : '' + guaopenwait : $[_0x5a74('8')](_0x5a74('14')) ? $[_0x5a74('8')](_0x5a74('14')) : '' + guaopenwait;
guaopenwait = parseInt(guaopenwait, 0xa) || 0x0;
allMessage = '';
message = '';
$[_0x5a74('15')] = ![];
$[_0x5a74('16')] = ![];
$[_0x5a74('17')] = ![];
let lz_jdpin_token_cookie = '';
let activityCookie = '';
!(async () => {
    if ($[_0x5a74('0')]()) {
        if (guaopencard + '' != _0x5a74('18')) {
            console[_0x5a74('7')](_0x5a74('19'));
        }
        if (guaopencard + '' != _0x5a74('18')) {
            return;
        }
    }
    if (!cookiesArr[0x0]) {
        $[_0x5a74('1a')]($[_0x5a74('1b')], _0x5a74('1c'), _0x5a74('1d'), {
            'open-url': _0x5a74('1d')
        });
        return;
    }
    $[_0x5a74('1e')] = _0x5a74('1f');
    $[_0x5a74('20')] = _0x5a74('21');
    console[_0x5a74('7')](_0x5a74('22') + $[_0x5a74('1e')] + _0x5a74('23') + $[_0x5a74('20')]);
    for (let _0x565423 = 0x0; _0x565423 < cookiesArr[_0x5a74('24')]; _0x565423++) {
        cookie = cookiesArr[_0x565423];
        if (cookie) {
            $[_0x5a74('25')] = decodeURIComponent(cookie[_0x5a74('26')](/pt_pin=([^; ]+)(?=;?)/) && cookie[_0x5a74('26')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $[_0x5a74('27')] = _0x565423 + 0x1;
            message = '';
            $[_0x5a74('28')] = 0x0;
            $[_0x5a74('15')] = ![];
            $[_0x5a74('29')] = '';
            console[_0x5a74('7')](_0x5a74('2a') + $[_0x5a74('27')] + '】' + ($[_0x5a74('29')] || $[_0x5a74('25')]) + _0x5a74('2b'));
            await getUA();
            await run();
            if (_0x565423 == 0x0 && !$[_0x5a74('2c')]) break;
            if ($[_0x5a74('16')] || $[_0x5a74('17')]) break;
        }
    }
    if ($[_0x5a74('16')]) {
        let _0x29f835 = _0x5a74('2d');
        $[_0x5a74('1a')]($[_0x5a74('1b')], '', '' + _0x29f835);
        if ($[_0x5a74('0')]()) await notify[_0x5a74('2e')]('' + $[_0x5a74('1b')], '' + _0x29f835);
    }
})()[_0x5a74('2f')](_0x59eb84 => $[_0x5a74('30')](_0x59eb84))[_0x5a74('31')](() => $[_0x5a74('32')]());
async function run() {
    try {
        $[_0x5a74('33')] = !![];
        $[_0x5a74('34')] = 0x0;
        lz_jdpin_token_cookie = '';
        $[_0x5a74('35')] = '';
        $[_0x5a74('36')] = '';
        let _0x116eb4 = ![];
        await takePostRequest(_0x5a74('37'));
        if ($[_0x5a74('35')] == '') {
            console[_0x5a74('7')](_0x5a74('38'));
            return;
        }
        await getCk();
        if (activityCookie == '') {
            console[_0x5a74('7')](_0x5a74('39'));
            return;
        }
        if ($[_0x5a74('17')] === !![]) {
            console[_0x5a74('7')](_0x5a74('3a'));
            return;
        }
        if ($[_0x5a74('16')]) {
            console[_0x5a74('7')](_0x5a74('3b'));
            return;
        }
        await takePostRequest(_0x5a74('3c'));
        await takePostRequest(_0x5a74('3d'));
        if (!$[_0x5a74('36')]) {
            console[_0x5a74('7')](_0x5a74('3e'));
            return;
        }
        await takePostRequest(_0x5a74('3f'));
        await takePostRequest(_0x5a74('40'));
        await takePostRequest(_0x5a74('41'));
        if (!$[_0x5a74('2c')]) {
            console[_0x5a74('7')](_0x5a74('42'));
            return;
        }
        if ($[_0x5a74('33')] === !![] || Date[_0x5a74('43')]() > $[_0x5a74('34')]) {
            $[_0x5a74('17')] = !![];
            console[_0x5a74('7')](_0x5a74('3a'));
            return;
        }
        await takePostRequest(_0x5a74('44'));
        await $[_0x5a74('45')](0x3e8);
        $[_0x5a74('46')] = [];
        $[_0x5a74('47')] = ![];
        await takePostRequest(_0x5a74('48'));
        if ($[_0x5a74('47')] == ![]) {
            console[_0x5a74('7')](_0x5a74('49'));
            for (o of $[_0x5a74('46')]) {
                $[_0x5a74('4a')] = ![];
                if (o[_0x5a74('4b')] == 0x0) {
                    _0x116eb4 = !![];
                    $[_0x5a74('4c')] = o[_0x5a74('4d')];
                    await $[_0x5a74('45')](parseInt(Math[_0x5a74('4e')]() * 0xbb8 + 0xbb8, 0xa));
                    await joinShop();
                    await $[_0x5a74('45')](parseInt(Math[_0x5a74('4e')]() * 0x3e8 + 0x3e8, 0xa));
                    await takePostRequest(_0x5a74('44'));
                    await takePostRequest(_0x5a74('48'));
                    await $[_0x5a74('45')](parseInt(Math[_0x5a74('4e')]() * 0xbb8 + 0x7d0, 0xa));
                }
            }
            await takePostRequest(_0x5a74('41'));
        } else {
            console[_0x5a74('7')](_0x5a74('4f'));
        }
        if ($[_0x5a74('50')] == 0x1 && !$[_0x5a74('16')]) {
            $[_0x5a74('51')] = 0x1;
            _0x116eb4 = !![];
            await takePostRequest(_0x5a74('51'));
            await $[_0x5a74('45')](parseInt(Math[_0x5a74('4e')]() * 0x3e8 + 0xbb8, 0xa));
        }
        if ($[_0x5a74('52')] == 0x1 && !$[_0x5a74('16')]) {
            $[_0x5a74('51')] = 0x2;
            _0x116eb4 = !![];
            await takePostRequest(_0x5a74('51'));
            await $[_0x5a74('45')](parseInt(Math[_0x5a74('4e')]() * 0x3e8 + 0xbb8, 0xa));
        }
        $[_0x5a74('7')](_0x5a74('53') + $[_0x5a74('54')]);
        if (!$[_0x5a74('54')] && !$[_0x5a74('16')]) {
            _0x116eb4 = !![];
            await takePostRequest(_0x5a74('54'));
            await $[_0x5a74('45')](parseInt(Math[_0x5a74('4e')]() * 0x3e8 + 0x1388, 0xa));
        }
        $[_0x5a74('7')](_0x5a74('55') + $[_0x5a74('56')]);
        if (!$[_0x5a74('56')] && !$[_0x5a74('16')]) {
            if (guaopencard_addSku + '' == _0x5a74('18')) {
                _0x116eb4 = !![];
                await takePostRequest(_0x5a74('56'));
                await $[_0x5a74('45')](parseInt(Math[_0x5a74('4e')]() * 0x3e8 + 0x1388, 0xa));
            } else {
                console[_0x5a74('7')](_0x5a74('57'));
            }
        }
        $[_0x5a74('58')] = !![];
        $[_0x5a74('7')](_0x5a74('59') + $[_0x5a74('5a')]);
        if (!$[_0x5a74('5a')] && !$[_0x5a74('16')]) {
            _0x116eb4 = !![];
            for (let _0x628423 of $[_0x5a74('5b')] || []) {
                if ($[_0x5a74('58')] == ![]) break;
                if (_0x628423[_0x5a74('4d')] && _0x628423[_0x5a74('4b')] === 0x0) {
                    $[_0x5a74('5c')] = _0x628423[_0x5a74('4d')];
                    await takePostRequest(_0x5a74('5a'));
                    await $[_0x5a74('45')](parseInt(Math[_0x5a74('4e')]() * 0xbb8 + 0xbb8, 0xa));
                }
            }
        }
        if (_0x116eb4) {
            await takePostRequest(_0x5a74('41'));
        }
        await $[_0x5a74('45')](parseInt(Math[_0x5a74('4e')]() * 0x3e8 + 0x7d0, 0xa));
        await takePostRequest(_0x5a74('5d'));
        await takePostRequest(_0x5a74('5e'));
        if ($[_0x5a74('16')]) {
            console[_0x5a74('7')](_0x5a74('3b'));
            return;
        }
        console[_0x5a74('7')]($[_0x5a74('2c')]);
        console[_0x5a74('7')](_0x5a74('5f') + $[_0x5a74('20')]);
        if ($[_0x5a74('27')] == 0x1) {
            $[_0x5a74('20')] = $[_0x5a74('2c')];
            console[_0x5a74('7')](_0x5a74('60') + $[_0x5a74('20')]);
        }
        await $[_0x5a74('45')](parseInt(Math[_0x5a74('4e')]() * 0x3e8 + 0x1388, 0xa));
        if (_0x116eb4) await $[_0x5a74('45')](parseInt(Math[_0x5a74('4e')]() * 0x3e8 + 0x2710, 0xa));
        if (guaopenwait) {
            if ($[_0x5a74('27')] != cookiesArr[_0x5a74('24')]) {
                console[_0x5a74('7')]('等待' + guaopenwait + '秒');
                await $[_0x5a74('45')](parseInt(guaopenwait, 0xa) * 0x3e8);
            }
        } else {
            if ($[_0x5a74('27')] % 0x3 == 0x0) console[_0x5a74('7')](_0x5a74('61'));
            if ($[_0x5a74('27')] % 0x3 == 0x0) await $[_0x5a74('45')](parseInt(Math[_0x5a74('4e')]() * 0x1388 + 0xea60, 0xa));
        }
    } catch (_0x1550ce) {
        console[_0x5a74('7')](_0x1550ce);
    }
}
async function takePostRequest(_0x3d944c) {
    if ($[_0x5a74('16')]) return;
    let _0x2644c0 = _0x5a74('62');
    let _0x25d174 = '';
    let _0x1e0b4f = _0x5a74('63');
    let _0x5b822f = '';
    switch (_0x3d944c) {
        case _0x5a74('37'):
            _0x2644c0 = _0x5a74('64');
            _0x25d174 = _0x5a74('65');
            break;
        case _0x5a74('3c'):
            _0x2644c0 = _0x2644c0 + _0x5a74('66');
            _0x25d174 = _0x5a74('67') + $[_0x5a74('1e')];
            break;
        case _0x5a74('3d'):
            _0x2644c0 = _0x2644c0 + _0x5a74('68');
            _0x25d174 = _0x5a74('69') + ($[_0x5a74('6a')] || $[_0x5a74('6b')] || '') + _0x5a74('6c') + $[_0x5a74('35')] + _0x5a74('6d');
            break;
        case _0x5a74('3f'):
            _0x2644c0 = _0x2644c0 + _0x5a74('6e');
            let _0xcc6a2b = _0x2644c0 + _0x5a74('6f') + $[_0x5a74('1e')] + _0x5a74('23') + $[_0x5a74('20')];
            _0x25d174 = _0x5a74('70') + ($[_0x5a74('6a')] || $[_0x5a74('6b')] || '') + _0x5a74('71') + encodeURIComponent($[_0x5a74('36')]) + _0x5a74('72') + $[_0x5a74('1e')] + _0x5a74('73') + encodeURIComponent(_0xcc6a2b) + _0x5a74('74');
            break;
        case _0x5a74('40'):
            _0x2644c0 = _0x2644c0 + _0x5a74('75');
            _0x25d174 = _0x5a74('76') + encodeURIComponent($[_0x5a74('36')]);
            break;
        case _0x5a74('41'):
            _0x2644c0 = _0x2644c0 + _0x5a74('77');
            _0x25d174 = _0x5a74('67') + $[_0x5a74('1e')] + _0x5a74('78') + encodeURIComponent($[_0x5a74('36')]) + _0x5a74('79') + encodeURIComponent($[_0x5a74('7a')]) + _0x5a74('7b') + encodeURIComponent($[_0x5a74('7c')]) + _0x5a74('7d') + $[_0x5a74('20')];
            break;
        case _0x5a74('44'):
            _0x2644c0 = _0x2644c0 + _0x5a74('7e');
            _0x25d174 = _0x5a74('67') + $[_0x5a74('1e')] + _0x5a74('78') + encodeURIComponent($[_0x5a74('36')]);
            break;
        case _0x5a74('48'):
            _0x2644c0 = _0x2644c0 + _0x5a74('7f');
            _0x25d174 = _0x5a74('67') + $[_0x5a74('1e')] + _0x5a74('78') + encodeURIComponent($[_0x5a74('36')]) + _0x5a74('80') + $[_0x5a74('2c')] + _0x5a74('23') + $[_0x5a74('20')];
            break;
        case _0x5a74('51'):
            _0x2644c0 = _0x2644c0 + _0x5a74('81');
            _0x25d174 = _0x5a74('67') + $[_0x5a74('1e')] + _0x5a74('80') + $[_0x5a74('2c')] + _0x5a74('78') + encodeURIComponent($[_0x5a74('36')]) + ($[_0x5a74('51')] && _0x5a74('82') + $[_0x5a74('51')] || '');
            break;
        case _0x5a74('54'):
            _0x2644c0 = _0x2644c0 + _0x5a74('83');
            _0x25d174 = _0x5a74('67') + $[_0x5a74('1e')] + _0x5a74('78') + encodeURIComponent($[_0x5a74('36')]) + _0x5a74('80') + $[_0x5a74('2c')] + _0x5a74('23') + $[_0x5a74('20')] + _0x5a74('84') + $[_0x5a74('85')];
            break;
        case _0x5a74('86'):
        case _0x5a74('87'):
        case _0x5a74('5a'):
        case _0x5a74('56'):
            _0x2644c0 = _0x2644c0 + _0x5a74('88');
            let _0x102c15 = '';
            let _0x404f98 = '';
            if (_0x3d944c == _0x5a74('86')) {
                _0x102c15 = 0x1f;
                _0x404f98 = 0x1f;
            } else if (_0x3d944c == _0x5a74('87')) {
                _0x102c15 = 0x5;
                _0x404f98 = $[_0x5a74('89')] || 0x5;
            } else if (_0x3d944c == _0x5a74('5a')) {
                _0x102c15 = 0xe;
                _0x404f98 = $[_0x5a74('5c')] || 0xe;
            } else if (_0x3d944c == _0x5a74('56')) {
                _0x102c15 = 0x2;
                _0x404f98 = $[_0x5a74('8a')] || 0x2;
            }
            _0x25d174 = _0x5a74('67') + $[_0x5a74('1e')] + _0x5a74('78') + encodeURIComponent($[_0x5a74('36')]) + _0x5a74('80') + $[_0x5a74('2c')] + _0x5a74('8b') + _0x102c15 + _0x5a74('8c') + _0x404f98;
            break;
        case _0x5a74('5d'):
            _0x2644c0 = _0x2644c0 + _0x5a74('8d');
            _0x25d174 = _0x5a74('67') + $[_0x5a74('1e')] + _0x5a74('78') + encodeURIComponent($[_0x5a74('36')]) + _0x5a74('80') + $[_0x5a74('2c')];
            break;
        case _0x5a74('5e'):
            _0x2644c0 = _0x2644c0 + _0x5a74('8e');
            _0x25d174 = _0x5a74('67') + $[_0x5a74('1e')] + _0x5a74('78') + encodeURIComponent($[_0x5a74('36')]) + _0x5a74('80') + $[_0x5a74('2c')];
            break;
        default:
            console[_0x5a74('7')]('错误' + _0x3d944c);
    }
    let _0x4d6aaa = getPostRequest(_0x2644c0, _0x25d174, _0x1e0b4f);
    return new Promise(async _0x5a14a5 => {
        $[_0x5a74('8f')](_0x4d6aaa, (_0x2e90d8, _0x1b59c7, _0x1b912a) => {
            try {
                setActivityCookie(_0x1b59c7);
                if (_0x2e90d8) {
                    if (_0x1b59c7 && typeof _0x1b59c7[_0x5a74('90')] != _0x5a74('91')) {
                        if (_0x1b59c7[_0x5a74('90')] == 0x1ed) {
                            console[_0x5a74('7')](_0x5a74('3b'));
                            $[_0x5a74('16')] = !![];
                        }
                    }
                    console[_0x5a74('7')]('' + $[_0x5a74('92')](_0x2e90d8, _0x2e90d8));
                    console[_0x5a74('7')](_0x3d944c + _0x5a74('93'));
                } else {
                    dealReturn(_0x3d944c, _0x1b912a);
                }
            } catch (_0x4b759b) {
                console[_0x5a74('7')](_0x4b759b, _0x1b59c7);
            } finally {
                _0x5a14a5();
            }
        });
    });
}
async function dealReturn(_0x46d94a, _0x1fa0a6) {
    let _0xb6031b = '';
    try {
        if (_0x46d94a != _0x5a74('3f') || _0x46d94a != _0x5a74('44')) {
            if (_0x1fa0a6) {
                _0xb6031b = JSON[_0x5a74('94')](_0x1fa0a6);
            }
        }
    } catch (_0xfc5e17) {
        console[_0x5a74('7')](_0x46d94a + _0x5a74('95'));
        console[_0x5a74('7')](_0x1fa0a6);
        $[_0x5a74('58')] = ![];
    }
    try {
        switch (_0x46d94a) {
            case _0x5a74('37'):
                if (typeof _0xb6031b == _0x5a74('96')) {
                    if (_0xb6031b[_0x5a74('97')] == 0x0) {
                        if (typeof _0xb6031b[_0x5a74('98')] != _0x5a74('91')) $[_0x5a74('35')] = _0xb6031b[_0x5a74('98')];
                    } else if (_0xb6031b[_0x5a74('99')]) {
                        console[_0x5a74('7')](_0x5a74('9a') + (_0xb6031b[_0x5a74('99')] || ''));
                    } else {
                        console[_0x5a74('7')](_0x1fa0a6);
                    }
                } else {
                    console[_0x5a74('7')](_0x1fa0a6);
                }
                break;
            case _0x5a74('3c'):
                if (typeof _0xb6031b == _0x5a74('96')) {
                    if (_0xb6031b[_0x5a74('9b')] && _0xb6031b[_0x5a74('9b')] === !![]) {
                        if (typeof _0xb6031b[_0x5a74('9c')][_0x5a74('6a')] != _0x5a74('91')) $[_0x5a74('6a')] = _0xb6031b[_0x5a74('9c')][_0x5a74('6a')];
                        if (typeof _0xb6031b[_0x5a74('9c')][_0x5a74('6b')] != _0x5a74('91')) $[_0x5a74('6b')] = _0xb6031b[_0x5a74('9c')][_0x5a74('6b')];
                    } else if (_0xb6031b[_0x5a74('9d')]) {
                        console[_0x5a74('7')](_0x46d94a + ' ' + (_0xb6031b[_0x5a74('9d')] || ''));
                    } else {
                        console[_0x5a74('7')](_0x46d94a + ' ' + _0x1fa0a6);
                    }
                } else {
                    console[_0x5a74('7')](_0x46d94a + ' ' + _0x1fa0a6);
                }
                break;
            case _0x5a74('3d'):
                if (typeof _0xb6031b == _0x5a74('96')) {
                    if (_0xb6031b[_0x5a74('9b')] && _0xb6031b[_0x5a74('9b')] === !![]) {
                        if (_0xb6031b[_0x5a74('9c')] && typeof _0xb6031b[_0x5a74('9c')][_0x5a74('9e')] != _0x5a74('91')) $[_0x5a74('36')] = _0xb6031b[_0x5a74('9c')][_0x5a74('9e')];
                        if (_0xb6031b[_0x5a74('9c')] && typeof _0xb6031b[_0x5a74('9c')][_0x5a74('7c')] != _0x5a74('91')) $[_0x5a74('7c')] = _0xb6031b[_0x5a74('9c')][_0x5a74('7c')];
                    } else if (_0xb6031b[_0x5a74('9d')]) {
                        console[_0x5a74('7')](_0x46d94a + ' ' + (_0xb6031b[_0x5a74('9d')] || ''));
                    } else {
                        console[_0x5a74('7')](_0x46d94a + ' ' + _0x1fa0a6);
                    }
                } else {
                    console[_0x5a74('7')](_0x46d94a + ' ' + _0x1fa0a6);
                }
                break;
            case _0x5a74('40'):
                if (typeof _0xb6031b == _0x5a74('96')) {
                    if (_0xb6031b[_0x5a74('9b')] && _0xb6031b[_0x5a74('9b')] === !![]) {
                        if (_0xb6031b[_0x5a74('9c')] && typeof _0xb6031b[_0x5a74('9c')][_0x5a74('9f')] != _0x5a74('91')) $[_0x5a74('7a')] = _0xb6031b[_0x5a74('9c')][_0x5a74('9f')] || _0x5a74('a0');
                    } else if (_0xb6031b[_0x5a74('9d')]) {
                        console[_0x5a74('7')](_0x46d94a + ' ' + (_0xb6031b[_0x5a74('9d')] || ''));
                    } else {
                        console[_0x5a74('7')](_0x46d94a + ' ' + _0x1fa0a6);
                    }
                } else {
                    console[_0x5a74('7')](_0x46d94a + ' ' + _0x1fa0a6);
                }
                break;
            case _0x5a74('41'):
                if (typeof _0xb6031b == _0x5a74('96')) {
                    if (_0xb6031b[_0x5a74('9b')] && _0xb6031b[_0x5a74('9b')] === !![]) {
                        $[_0x5a74('34')] = _0xb6031b[_0x5a74('9c')][_0x5a74('34')] || 0x0;
                        $[_0x5a74('33')] = _0xb6031b[_0x5a74('9c')][_0x5a74('33')] || ![];
                        $[_0x5a74('2c')] = _0xb6031b[_0x5a74('9c')][_0x5a74('2c')] || '';
                        $[_0x5a74('54')] = _0xb6031b[_0x5a74('9c')][_0x5a74('54')][_0x5a74('a1')] || ![];
                        $[_0x5a74('56')] = _0xb6031b[_0x5a74('9c')][_0x5a74('56')][_0x5a74('a1')] || ![];
                        if (_0xb6031b[_0x5a74('9c')][_0x5a74('54')] && _0xb6031b[_0x5a74('9c')][_0x5a74('54')][_0x5a74('a2')] && _0xb6031b[_0x5a74('9c')][_0x5a74('54')][_0x5a74('a2')][0x0]) {
                            $[_0x5a74('85')] = _0xb6031b[_0x5a74('9c')][_0x5a74('54')][_0x5a74('a2')][0x0][_0x5a74('4d')] || 0x1;
                        }
                        if (_0xb6031b[_0x5a74('9c')][_0x5a74('56')] && _0xb6031b[_0x5a74('9c')][_0x5a74('56')][_0x5a74('a2')] && _0xb6031b[_0x5a74('9c')][_0x5a74('56')][_0x5a74('a2')][0x0]) {
                            $[_0x5a74('8a')] = _0xb6031b[_0x5a74('9c')][_0x5a74('56')][_0x5a74('a2')][0x0][_0x5a74('4d')] || 0x2;
                        }
                        $[_0x5a74('5a')] = _0xb6031b[_0x5a74('9c')][_0x5a74('5a')][_0x5a74('a1')] || ![];
                        $[_0x5a74('5b')] = _0xb6031b[_0x5a74('9c')][_0x5a74('5a')][_0x5a74('a2')] || [];
                    } else if (_0xb6031b[_0x5a74('9d')]) {
                        console[_0x5a74('7')](_0x46d94a + ' ' + (_0xb6031b[_0x5a74('9d')] || ''));
                    } else {
                        console[_0x5a74('7')](_0x46d94a + ' ' + _0x1fa0a6);
                    }
                } else {
                    console[_0x5a74('7')](_0x46d94a + ' ' + _0x1fa0a6);
                }
                break;
            case _0x5a74('48'):
                if (typeof _0xb6031b == _0x5a74('96')) {
                    if (_0xb6031b[_0x5a74('9b')] && _0xb6031b[_0x5a74('9b')] === !![]) {
                        let _0x5f0116 = _0xb6031b[_0x5a74('9c')][_0x5a74('a3')] || [];
                        let _0x4ce733 = _0xb6031b[_0x5a74('9c')][_0x5a74('a4')] || [];
                        let _0x5a2858 = _0xb6031b[_0x5a74('9c')][_0x5a74('a5')] || [];
                        $[_0x5a74('46')] = [..._0x5a2858, ..._0x5f0116, ..._0x4ce733];
                        $[_0x5a74('47')] = _0xb6031b[_0x5a74('9c')][_0x5a74('47')] || ![];
                        $[_0x5a74('50')] = _0xb6031b[_0x5a74('9c')][_0x5a74('a6')] || 0x0;
                        $[_0x5a74('52')] = _0xb6031b[_0x5a74('9c')][_0x5a74('a7')] || 0x0;
                        $[_0x5a74('a8')] = _0xb6031b[_0x5a74('9c')][_0x5a74('a8')] || 0x0;
                    } else if (_0xb6031b[_0x5a74('9d')]) {
                        console[_0x5a74('7')](_0x46d94a + ' ' + (_0xb6031b[_0x5a74('9d')] || ''));
                    } else {
                        console[_0x5a74('7')](_0x46d94a + ' ' + _0x1fa0a6);
                    }
                } else {
                    console[_0x5a74('7')](_0x46d94a + ' ' + _0x1fa0a6);
                }
                break;
            case _0x5a74('51'):
            case _0x5a74('54'):
            case _0x5a74('86'):
            case _0x5a74('87'):
            case _0x5a74('5a'):
            case _0x5a74('56'):
                if (typeof _0xb6031b == _0x5a74('96')) {
                    if (_0xb6031b[_0x5a74('9b')] && _0xb6031b[_0x5a74('9b')] === !![]) {
                        if (typeof _0xb6031b[_0x5a74('9c')] == _0x5a74('96')) {
                            let _0x139696 = '';
                            let _0x312b02 = '抽奖';
                            if (_0xb6031b[_0x5a74('9c')][_0x5a74('a9')] && _0xb6031b[_0x5a74('9c')][_0x5a74('aa')]) {
                                _0x139696 = _0xb6031b[_0x5a74('9c')][_0x5a74('a9')] + '京豆';
                            }
                            if (_0x46d94a == _0x5a74('54')) {
                                _0x312b02 = '关注';
                                if (_0xb6031b[_0x5a74('9c')][_0x5a74('ab')] && _0xb6031b[_0x5a74('9c')][_0x5a74('ac')]) {
                                    _0x139696 += _0x5a74('ad') + _0xb6031b[_0x5a74('9c')][_0x5a74('ab')] + '京豆';
                                }
                            } else if (_0x46d94a == _0x5a74('56')) {
                                _0x312b02 = '加购';
                            } else if (_0x46d94a == _0x5a74('86')) {
                                _0x312b02 = _0x5a74('ae');
                            } else if (_0x46d94a == _0x5a74('5a')) {
                                _0x312b02 = _0x5a74('af');
                            } else if (_0x46d94a == _0x5a74('87')) {
                                _0x312b02 = _0x5a74('b0');
                            } else {
                                _0x139696 = _0xb6031b[_0x5a74('9c')][_0x5a74('b1')] == !![] && (_0xb6031b[_0x5a74('9c')][_0x5a74('b2')] == 0x6 && _0xb6031b[_0x5a74('9c')][_0x5a74('1b')] || '') || _0x5a74('b3');
                            }
                            if (!_0x139696) {
                                _0x139696 = _0x5a74('b3');
                            }
                            console[_0x5a74('7')](_0x312b02 + _0x5a74('b4') + (_0x139696 || _0x1fa0a6));
                        } else {
                            console[_0x5a74('7')](_0x46d94a + ' ' + _0x1fa0a6);
                        }
                    } else if (_0xb6031b[_0x5a74('9d')]) {
                        $[_0x5a74('58')] = ![];
                        console[_0x5a74('7')](_0x46d94a + ' ' + (_0xb6031b[_0x5a74('9d')] || ''));
                    } else {
                        console[_0x5a74('7')](_0x46d94a + ' ' + _0x1fa0a6);
                    }
                } else {
                    console[_0x5a74('7')](_0x46d94a + ' ' + _0x1fa0a6);
                }
                break;
            case _0x5a74('5d'):
                if (typeof _0xb6031b == _0x5a74('96')) {
                    if (_0xb6031b[_0x5a74('9b')] && _0xb6031b[_0x5a74('9b')] === !![]) {
                        console[_0x5a74('7')](_0x5a74('b5'));
                        let _0x572433 = 0x0;
                        let _0x2456a0 = 0x0;
                        for (let _0x44a9e2 in _0xb6031b[_0x5a74('9c')]) {
                            let _0x431ff1 = _0xb6031b[_0x5a74('9c')][_0x44a9e2];
                            if (_0x431ff1[_0x5a74('4d')] == _0x5a74('b6')) _0x572433++;
                            if (_0x431ff1[_0x5a74('4d')] == _0x5a74('b6')) _0x2456a0 = _0x431ff1[_0x5a74('b7')][_0x5a74('b8')]('京豆', '');
                            if (_0x431ff1[_0x5a74('4d')] != _0x5a74('b6')) console[_0x5a74('7')]('' + (_0x431ff1[_0x5a74('b9')] != 0xa && _0x431ff1[_0x5a74('4d')] + ':' || '') + _0x431ff1[_0x5a74('b7')]);
                        }
                        if (_0x572433 > 0x0) console[_0x5a74('7')](_0x5a74('ba') + _0x572433 + '):' + (_0x572433 * parseInt(_0x2456a0, 0xa) || 0x1e) + '京豆');
                    } else if (_0xb6031b[_0x5a74('9d')]) {
                        console[_0x5a74('7')](_0x46d94a + ' ' + (_0xb6031b[_0x5a74('9d')] || ''));
                    } else {
                        console[_0x5a74('7')](_0x46d94a + ' ' + _0x1fa0a6);
                    }
                } else {
                    console[_0x5a74('7')](_0x46d94a + ' ' + _0x1fa0a6);
                }
                break;
            case _0x5a74('5e'):
                if (typeof _0xb6031b == _0x5a74('96')) {
                    if (_0xb6031b[_0x5a74('9b')] && _0xb6031b[_0x5a74('9b')] === !![] && _0xb6031b[_0x5a74('9c')]) {
                        $[_0x5a74('bb')] = _0xb6031b[_0x5a74('9c')][_0x5a74('24')];
                        $[_0x5a74('7')](_0x5a74('bc') + _0xb6031b[_0x5a74('9c')][_0x5a74('24')] + '个');
                    } else if (_0xb6031b[_0x5a74('9d')]) {
                        console[_0x5a74('7')](_0x46d94a + ' ' + (_0xb6031b[_0x5a74('9d')] || ''));
                    } else {
                        console[_0x5a74('7')](_0x46d94a + ' ' + _0x1fa0a6);
                    }
                } else {
                    console[_0x5a74('7')](_0x46d94a + ' ' + _0x1fa0a6);
                }
                break;
            case _0x5a74('3f'):
            case _0x5a74('44'):
                break;
            default:
                console[_0x5a74('7')](_0x46d94a + _0x5a74('bd') + _0x1fa0a6);
        }
        if (typeof _0xb6031b == _0x5a74('96')) {
            if (_0xb6031b[_0x5a74('9d')]) {
                if (_0xb6031b[_0x5a74('9d')][_0x5a74('be')]('火爆') > -0x1) {
                    $[_0x5a74('15')] = !![];
                }
            }
        }
    } catch (_0x4c85ab) {
        console[_0x5a74('7')](_0x4c85ab);
    }
}

function getPostRequest(_0x5f04f2, _0x5c809e, _0x51f80b = _0x5a74('63')) {
    let _0xd979f7 = {
        'Accept': _0x5a74('bf'),
        'Accept-Encoding': _0x5a74('c0'),
        'Accept-Language': _0x5a74('c1'),
        'Connection': _0x5a74('c2'),
        'Content-Type': _0x5a74('c3'),
        'Cookie': cookie,
        'User-Agent': $['UA'],
        'X-Requested-With': _0x5a74('c4')
    };
    if (_0x5f04f2[_0x5a74('be')](_0x5a74('62')) > -0x1) {
        _0xd979f7[_0x5a74('c5')] = _0x5a74('c6') + $[_0x5a74('1e')] + _0x5a74('23') + $[_0x5a74('20')];
        _0xd979f7[_0x5a74('c7')] = '' + (lz_jdpin_token_cookie && lz_jdpin_token_cookie || '') + ($[_0x5a74('36')] && _0x5a74('c8') + $[_0x5a74('36')] + ';' || '') + activityCookie;
    }
    return {
        'url': _0x5f04f2,
        'method': _0x51f80b,
        'headers': _0xd979f7,
        'body': _0x5c809e,
        'timeout': 0x7530
    };
}

function getCk() {
    return new Promise(_0x53b6c3 => {
        let _0xb4a33d = {
            'url': _0x5a74('c6') + $[_0x5a74('1e')] + _0x5a74('23') + $[_0x5a74('20')],
            'followRedirect': ![],
            'headers': {
                'User-Agent': $['UA']
            },
            'timeout': 0x7530
        };
        $[_0x5a74('c9')](_0xb4a33d, async (_0x2bcc8c, _0x45a2ef, _0x3238e7) => {
            try {
                if (_0x2bcc8c) {
                    if (_0x45a2ef && typeof _0x45a2ef[_0x5a74('90')] != _0x5a74('91')) {
                        if (_0x45a2ef[_0x5a74('90')] == 0x1ed) {
                            console[_0x5a74('7')](_0x5a74('3b'));
                            $[_0x5a74('16')] = !![];
                        }
                    }
                    console[_0x5a74('7')]('' + $[_0x5a74('92')](_0x2bcc8c));
                    console[_0x5a74('7')]($[_0x5a74('1b')] + _0x5a74('ca'));
                } else {
                    let _0x591914 = _0x3238e7[_0x5a74('26')](/(活动已经结束)/) && _0x3238e7[_0x5a74('26')](/(活动已经结束)/)[0x1] || '';
                    if (_0x591914) {
                        $[_0x5a74('17')] = !![];
                        console[_0x5a74('7')](_0x5a74('cb'));
                    }
                    setActivityCookie(_0x45a2ef);
                }
            } catch (_0x2efd9a) {
                $[_0x5a74('30')](_0x2efd9a, _0x45a2ef);
            } finally {
                _0x53b6c3();
            }
        });
    });
}

function setActivityCookie(_0x4a8720) {
    let _0xb7cfbb = '';
    let _0x135ea1 = '';
    let _0x1c38a5 = '';
    let _0x49a982 = _0x4a8720 && _0x4a8720[_0x5a74('cc')] && (_0x4a8720[_0x5a74('cc')][_0x5a74('cd')] || _0x4a8720[_0x5a74('cc')][_0x5a74('ce')] || '') || '';
    let _0x230705 = '';
    if (_0x49a982) {
        if (typeof _0x49a982 != _0x5a74('96')) {
            _0x230705 = _0x49a982[_0x5a74('cf')](',');
        } else _0x230705 = _0x49a982;
        for (let _0x19f30b of _0x230705) {
            let _0xd3f0b3 = _0x19f30b[_0x5a74('cf')](';')[0x0][_0x5a74('d0')]();
            if (_0xd3f0b3[_0x5a74('cf')]('=')[0x1]) {
                if (_0xd3f0b3[_0x5a74('be')](_0x5a74('d1')) > -0x1) _0xb7cfbb = _0xd3f0b3[_0x5a74('b8')](/ /g, '') + ';';
                if (_0xd3f0b3[_0x5a74('be')](_0x5a74('d2')) > -0x1) _0x135ea1 = _0xd3f0b3[_0x5a74('b8')](/ /g, '') + ';';
                if (_0xd3f0b3[_0x5a74('be')](_0x5a74('d3')) > -0x1) _0x1c38a5 = '' + _0xd3f0b3[_0x5a74('b8')](/ /g, '') + ';';
            }
        }
    }
    if (_0xb7cfbb && _0x135ea1) activityCookie = _0xb7cfbb + ' ' + _0x135ea1;
    if (_0x1c38a5) lz_jdpin_token_cookie = _0x1c38a5;
}
async function getUA() {
    $['UA'] = _0x5a74('d4') + randomString(0x28) + _0x5a74('d5');
}

function randomString(_0x1ab574) {
    _0x1ab574 = _0x1ab574 || 0x20;
    let _0x5b1e3d = _0x5a74('d6'),
        _0x57a3b1 = _0x5b1e3d[_0x5a74('24')],
        _0x18ad94 = '';
    for (i = 0x0; i < _0x1ab574; i++) _0x18ad94 += _0x5b1e3d[_0x5a74('d7')](Math[_0x5a74('d8')](Math[_0x5a74('4e')]() * _0x57a3b1));
    return _0x18ad94;
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

