/*
10.15~10.31 惠聚京东 好物连连 [gua_opencard44.js]
新增开卡脚本 (脚本
一次性脚本

1.邀请一人20豆
2.开7张 成功开1张 获得1次抽奖
  抽奖可能获得5/666京豆
3.关注5豆 
4.加购0京豆 1次游戏机会
  (默认不加购 如需加购请设置环境变量[guaopencard_addSku44]为"true"
5.浏览商品0豆 2次游戏机会
6.抽奖 (默认不抽奖 如需抽奖请设置环境变量[guaopencard_draw44]为"3"
填写要抽奖的次数 不足已自身次数为准
guaopencard_draw44="3"
填非数字会全都抽奖

第一个账号助力作者 其他依次助力CK1
第一个CK失效会退出脚本

默认脚本不执行
如需执行脚本请设置环境变量
guaopencard44="true"
每个账号之间延迟 100=延迟100秒 0=延迟0秒会使用每3个账号延迟60秒
guaopenwait_All 所有
guaopenwait44="0"


All变量适用
————————————————
入口：[ 10.15~10.31 惠聚京东 好物连连 (https://lzdz1-isv.isvjcloud.com/dingzhi/customized/common/activity?activityId=llk20211015&shareUuid=46502f0c3e824576b8ec1896dd80920b)]

请求太频繁会被黑ip
过10分钟再执行

============Quantumultx===============
[task_local]
#10.15~10.31 惠聚京东 好物连连
cron "37 5 15-31 10 *" gua_opencard44.js, tag=10.15~10.31 惠聚京东 好物连连, enabled=true

*/
let guaopencard_addSku = "true"
let guaopencard = "true"
let guaopenwait = "0"
let guaopencard_draw = "3"

const $ = new Env('10.15~10.31 惠聚京东 好物连连');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
//IOS等用户直接用NobyDa的jd cookie

/*
 *Progcessed By JSDec in 0.14s
 *JSDec - JSDec.js.org
 */
var _0xodZ = 'jsjiami.com.v6',
    _0x1ef9 = [_0xodZ, 'isNode', 'keys', 'forEach', 'push', 'env', 'JD_DEBUG', 'false', 'log', 'getdata', 'CookieJD', 'CookieJD2', 'CookiesJD', 'map', 'cookie', 'filter', 'guaopencard_addSku44', 'guaopencard_addSku_All', 'guaopencard44', 'guaopencard_All', 'guaopenwait44', 'guaopenwait_All', 'guaopencard_draw44', 'guaopencard_draw', 'hotFlag', 'outFlag', 'activityEnd', 'true', '如需执行脚本请设置环境变量[guaopencard44]为\"true\"', 'msg', 'name', '【提示】请先获取cookie\x0a直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/', 'activityId', 'llk20211015', 'shareUuid', '46502f0c3e824576b8ec1896dd80920b', '入口:\x0ahttps://lzdz1-isv.isvjcloud.com/dingzhi/customized/common/activity?activityId=', '&shareUuid=', 'length', 'UserName', 'match', 'index', 'bean', 'nickName', '\x0a\x0a******开始【京东账号', '*********\x0a', 'actorUuid', '此ip已被限制，请过10分钟后再执行脚本', 'sendNotify', 'catch', 'logErr', 'finally', 'done', 'hasEnd', 'endTime', 'Token', 'Pin', 'isvObfuscator', '获取[token]失败！', '获取cookie失败', '活动结束', '此ip已被限制，请过10分钟后再执行脚本\x0a', 'getSimpleActInfoVo', 'getMyPing', '获取[Pin]失败！', 'accessLogWithAD', 'getUserInfo', 'activityContent', '获取不到[actorUuid]退出执行，请重新执行', 'now', 'drawContent', 'wait', 'openList', 'allOpenCard', 'info', 'checkOpenCard', '开卡任务', 'openCard', 'status', 'joinVenderId', 'venderId', 'random', '已全部开卡', '关注: ', 'followShop', 'yaoqing', '签到: ', 'sign', '加购: ', 'addCart', '如需加购请设置环境变量[guaopencard_addSku44]为\"true\"', 'runFalag', '浏览商品: ', 'visitSku', 'visitSkuList', 'goodsCode', 'visitSkuValue', 'browseGoods', 'drawCount', '抽奖次数为:', '次抽奖', 'startDraw', '抽奖太多次，多余的次数请再执行脚本', '如需博饼请设置环境变量[guaopencard_draw44]为\"3\" 3为次数', 'score', '值 游戏:', 'point', 'getDrawRecordHasCoupon', 'getShareRecord', '当前助力:', '后面的号都会助力:', '休息1分钟，别被黑ip了\x0a可持续发展', 'https://lzdz1-isv.isvjcloud.com', 'POST', 'https://api.m.jd.com/client.action?functionId=isvObfuscator', 'body=%7B%22url%22%3A%22https%3A//lzdz1-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=7088d9018515b8cb0c88ace6e5479762af3e88f3&client=apple&clientVersion=10.1.4&st=1634343624086&sv=120&sign=8b9cea22c3a0d77026abda5d37d2b7e3', '/dz/common/getSimpleActInfoVo', 'activityId=', '/customer/getMyPing', 'userId=', 'shopId', '&token=', '&fromType=APP', '/common/accessLogWithAD', '/drawCenter/activity?activityId=', 'venderId=', '&code=99&pin=', '&activityId=', '&pageUrl=', '&subType=app&adSource=', '/wxActionCommon/getUserInfo', 'pin=', '/dingzhi/linkgame/activity/content', '&pin=', '&pinImg=', 'attrTouXiang', '&nick=', 'nickname', '&cjyxPin=&cjhyPin=&shareUuid=', '/dingzhi/taskact/common/drawContent', '/dingzhi/linkgame/checkOpenCard', '/dingzhi/linkgame/task/info', '/dingzhi/linkgame/draw/bean', '/dingzhi/linkgame/follow/shop', '/dingzhi/linkgame/', '&value=', '/dingzhi/linkgame/assist', '/dingzhi/linkgame/assist/status', 'viewVideo', 'toShop', 'addSku', '/dingzhi/dz/openCard/saveTask', 'toShopValue', 'addSkuValue', '&actorUuid=', '&taskType=', '&taskValue=', '/dingzhi/linkgame/draw/record', '/dingzhi/linkgame/help/list', 'post', 'statusCode', 'undefined', 'toStr', ' API请求失败，请检查网路重试', 'parse', ' 执行任务异常', 'object', 'errcode', 'token', 'message', 'isvObfuscator ', 'result', 'data', 'errorMessage', 'secretPin', 'yunMidImageUrl', 'https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png', 'activity', 'isEnd', 'actor', 'cardList1', 'cardList2', 'cardList', 'openCardList', 'openCardScore1', 'score1', 'openCardScore2', 'score2', 'drawScore', 'addBeanNum', 'addPoint', '游戏机会', 'beanNumMember', 'assistSendStatus', ' 额外获得:', '热门文章', '浏览店铺', '浏览商品', 'drawOk', 'drawInfoType', '空气💨', '获得:', '我的奖品：', 'recordList', 'infoName', '20京豆', 'replace', 'infoType', 'value', '邀请好友(', 'ShareCount', 'shareList', '=========== 你邀请了:', '助力成功', '已经助力过', '已经助力其他人', '-> ', 'indexOf', 'application/json', 'gzip, deflate, br', 'zh-cn', 'keep-alive', 'application/x-www-form-urlencoded', 'XMLHttpRequest', 'Referer', 'https://lzdz1-isv.isvjcloud.com/dingzhi/customized/common/activity?activityId=', 'Cookie', 'AUTH_C_USER=', 'get', ' cookie API请求失败，请检查网路重试', '活动已结束', 'headers', 'set-cookie', 'Set-Cookie', 'split', 'trim', 'LZ_TOKEN_KEY=', 'LZ_TOKEN_VALUE=', 'lz_jdpin_token=', 'jdapp;iPhone;10.1.4;13.1.2;', ';network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1', 'abcdef0123456789', 'charAt', 'floor', 'jhGsjZTNiSAKamiY.cPEeomUGy.zCv6=='];
var _0x1ca2 = function(_0x1a2628, _0x528615) {
    _0x1a2628 = ~~'0x' ['concat'](_0x1a2628);
    var _0xf8c15d = _0x1ef9[_0x1a2628];
    return _0xf8c15d;
};
(function(_0x2730eb, _0x4b53f3) {
    var _0x4dbda2 = 0x0;
    for (_0x4b53f3 = _0x2730eb['shift'](_0x4dbda2 >> 0x2); _0x4b53f3 && _0x4b53f3 !== (_0x2730eb['pop'](_0x4dbda2 >> 0x3) + '')['replace'](/[hGZTNSAKYPEeUGyzC=]/g, ''); _0x4dbda2++) {
        _0x4dbda2 = _0x4dbda2 ^ 0xaf131;
    }
}(_0x1ef9, _0x1ca2));
let cookiesArr = [],
    cookie = '';
if ($[_0x1ca2('0')]()) {
    Object[_0x1ca2('1')](jdCookieNode)[_0x1ca2('2')](_0x424214 => {
        cookiesArr[_0x1ca2('3')](jdCookieNode[_0x424214]);
    });
    if (process[_0x1ca2('4')][_0x1ca2('5')] && process[_0x1ca2('4')][_0x1ca2('5')] === _0x1ca2('6')) console[_0x1ca2('7')] = () => {};
} else {
    cookiesArr = [$[_0x1ca2('8')](_0x1ca2('9')), $[_0x1ca2('8')](_0x1ca2('a')), ...jsonParse($[_0x1ca2('8')](_0x1ca2('b')) || '[]')[_0x1ca2('c')](_0x3d8973 => _0x3d8973[_0x1ca2('d')])][_0x1ca2('e')](_0x5d215d => !!_0x5d215d);
}
guaopencard_addSku = $[_0x1ca2('0')]() ? process[_0x1ca2('4')][_0x1ca2('f')] ? process[_0x1ca2('4')][_0x1ca2('f')] : '' + guaopencard_addSku : $[_0x1ca2('8')](_0x1ca2('f')) ? $[_0x1ca2('8')](_0x1ca2('f')) : '' + guaopencard_addSku;
guaopencard_addSku = $[_0x1ca2('0')]() ? process[_0x1ca2('4')][_0x1ca2('10')] ? process[_0x1ca2('4')][_0x1ca2('10')] : '' + guaopencard_addSku : $[_0x1ca2('8')](_0x1ca2('10')) ? $[_0x1ca2('8')](_0x1ca2('10')) : '' + guaopencard_addSku;
guaopencard = $[_0x1ca2('0')]() ? process[_0x1ca2('4')][_0x1ca2('11')] ? process[_0x1ca2('4')][_0x1ca2('11')] : '' + guaopencard : $[_0x1ca2('8')](_0x1ca2('11')) ? $[_0x1ca2('8')](_0x1ca2('11')) : '' + guaopencard;
guaopencard = $[_0x1ca2('0')]() ? process[_0x1ca2('4')][_0x1ca2('12')] ? process[_0x1ca2('4')][_0x1ca2('12')] : '' + guaopencard : $[_0x1ca2('8')](_0x1ca2('12')) ? $[_0x1ca2('8')](_0x1ca2('12')) : '' + guaopencard;
guaopenwait = $[_0x1ca2('0')]() ? process[_0x1ca2('4')][_0x1ca2('13')] ? process[_0x1ca2('4')][_0x1ca2('13')] : '' + guaopenwait : $[_0x1ca2('8')](_0x1ca2('13')) ? $[_0x1ca2('8')](_0x1ca2('13')) : '' + guaopenwait;
guaopenwait = $[_0x1ca2('0')]() ? process[_0x1ca2('4')][_0x1ca2('14')] ? process[_0x1ca2('4')][_0x1ca2('14')] : '' + guaopenwait : $[_0x1ca2('8')](_0x1ca2('14')) ? $[_0x1ca2('8')](_0x1ca2('14')) : '' + guaopenwait;
guaopenwait = parseInt(guaopenwait, 0xa) || 0x0;
guaopencard_draw = $[_0x1ca2('0')]() ? process[_0x1ca2('4')][_0x1ca2('15')] ? process[_0x1ca2('4')][_0x1ca2('15')] : guaopencard_draw : $[_0x1ca2('8')](_0x1ca2('15')) ? $[_0x1ca2('8')](_0x1ca2('15')) : guaopencard_draw;
guaopencard_draw = $[_0x1ca2('0')]() ? process[_0x1ca2('4')][_0x1ca2('16')] ? process[_0x1ca2('4')][_0x1ca2('16')] : guaopencard_draw : $[_0x1ca2('8')](_0x1ca2('16')) ? $[_0x1ca2('8')](_0x1ca2('16')) : guaopencard_draw;
allMessage = '';
message = '';
$[_0x1ca2('17')] = ![];
$[_0x1ca2('18')] = ![];
$[_0x1ca2('19')] = ![];
let lz_jdpin_token_cookie = '';
let activityCookie = '';
!(async () => {
    if ($[_0x1ca2('0')]()) {
        if (guaopencard + '' != _0x1ca2('1a')) {
            console[_0x1ca2('7')](_0x1ca2('1b'));
        }
        if (guaopencard + '' != _0x1ca2('1a')) {
            return;
        }
    }
    if (!cookiesArr[0x0]) {
        $[_0x1ca2('1c')]($[_0x1ca2('1d')], _0x1ca2('1e'), _0x1ca2('1f'), {
            'open-url': _0x1ca2('1f')
        });
        return;
    }
    $[_0x1ca2('20')] = _0x1ca2('21');
    $[_0x1ca2('22')] = _0x1ca2('23');
    console[_0x1ca2('7')](_0x1ca2('24') + $[_0x1ca2('20')] + _0x1ca2('25') + $[_0x1ca2('22')]);
    for (let _0x3c899b = 0x0; _0x3c899b < cookiesArr[_0x1ca2('26')]; _0x3c899b++) {
        cookie = cookiesArr[_0x3c899b];
        if (cookie) {
            $[_0x1ca2('27')] = decodeURIComponent(cookie[_0x1ca2('28')](/pt_pin=([^; ]+)(?=;?)/) && cookie[_0x1ca2('28')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $[_0x1ca2('29')] = _0x3c899b + 0x1;
            message = '';
            $[_0x1ca2('2a')] = 0x0;
            $[_0x1ca2('17')] = ![];
            $[_0x1ca2('2b')] = '';
            console[_0x1ca2('7')](_0x1ca2('2c') + $[_0x1ca2('29')] + '】' + ($[_0x1ca2('2b')] || $[_0x1ca2('27')]) + _0x1ca2('2d'));
            await getUA();
            await run();
            if (_0x3c899b == 0x0 && !$[_0x1ca2('2e')]) break;
            if ($[_0x1ca2('18')] || $[_0x1ca2('19')]) break;
        }
    }
    if ($[_0x1ca2('18')]) {
        let _0x742ed = _0x1ca2('2f');
        $[_0x1ca2('1c')]($[_0x1ca2('1d')], '', '' + _0x742ed);
        if ($[_0x1ca2('0')]()) await notify[_0x1ca2('30')]('' + $[_0x1ca2('1d')], '' + _0x742ed);
    }
})()[_0x1ca2('31')](_0x8a1ae9 => $[_0x1ca2('32')](_0x8a1ae9))[_0x1ca2('33')](() => $[_0x1ca2('34')]());
async function run() {
    try {
        $[_0x1ca2('35')] = !![];
        $[_0x1ca2('36')] = 0x0;
        lz_jdpin_token_cookie = '';
        $[_0x1ca2('37')] = '';
        $[_0x1ca2('38')] = '';
        let _0x1fd400 = ![];
        await takePostRequest(_0x1ca2('39'));
        if ($[_0x1ca2('37')] == '') {
            console[_0x1ca2('7')](_0x1ca2('3a'));
            return;
        }
        await getCk();
        if (activityCookie == '') {
            console[_0x1ca2('7')](_0x1ca2('3b'));
            return;
        }
        if ($[_0x1ca2('19')] === !![]) {
            console[_0x1ca2('7')](_0x1ca2('3c'));
            return;
        }
        if ($[_0x1ca2('18')]) {
            console[_0x1ca2('7')](_0x1ca2('3d'));
            return;
        }
        await takePostRequest(_0x1ca2('3e'));
        await takePostRequest(_0x1ca2('3f'));
        if (!$[_0x1ca2('38')]) {
            console[_0x1ca2('7')](_0x1ca2('40'));
            return;
        }
        await takePostRequest(_0x1ca2('41'));
        await takePostRequest(_0x1ca2('42'));
        await takePostRequest(_0x1ca2('43'));
        if (!$[_0x1ca2('2e')]) {
            console[_0x1ca2('7')](_0x1ca2('44'));
            return;
        }
        if ($[_0x1ca2('35')] === !![] || Date[_0x1ca2('45')]() > $[_0x1ca2('36')]) {
            $[_0x1ca2('19')] = !![];
            console[_0x1ca2('7')](_0x1ca2('3c'));
            return;
        }
        await takePostRequest(_0x1ca2('46'));
        await $[_0x1ca2('47')](0x3e8);
        $[_0x1ca2('48')] = [];
        $[_0x1ca2('49')] = ![];
        await takePostRequest(_0x1ca2('4a'));
        await takePostRequest(_0x1ca2('4b'));
        if ($[_0x1ca2('49')] == ![]) {
            console[_0x1ca2('7')](_0x1ca2('4c'));
            for (o of $[_0x1ca2('48')]) {
                $[_0x1ca2('4d')] = ![];
                if (o[_0x1ca2('4e')] == 0x0) {
                    _0x1fd400 = !![];
                    $[_0x1ca2('4f')] = o[_0x1ca2('50')];
                    await $[_0x1ca2('47')](parseInt(Math[_0x1ca2('51')]() * 0xbb8 + 0xbb8, 0xa));
                    await joinShop();
                    await $[_0x1ca2('47')](parseInt(Math[_0x1ca2('51')]() * 0x3e8 + 0x3e8, 0xa));
                    await takePostRequest(_0x1ca2('43'));
                    await takePostRequest(_0x1ca2('46'));
                    await takePostRequest(_0x1ca2('4b'));
                    await $[_0x1ca2('47')](parseInt(Math[_0x1ca2('51')]() * 0xbb8 + 0x7d0, 0xa));
                }
            }
        } else {
            console[_0x1ca2('7')](_0x1ca2('52'));
        }
        $[_0x1ca2('7')](_0x1ca2('53') + $[_0x1ca2('54')]);
        if (!$[_0x1ca2('54')] && !$[_0x1ca2('18')]) {
            _0x1fd400 = !![];
            await takePostRequest(_0x1ca2('54'));
            await $[_0x1ca2('47')](parseInt(Math[_0x1ca2('51')]() * 0x7d0 + 0xbb8, 0xa));
        }
        $[_0x1ca2('55')] = ![];
        await takePostRequest('邀请');
        if ($[_0x1ca2('55')]) {
            await takePostRequest('助力');
        }
        $[_0x1ca2('7')](_0x1ca2('56') + $[_0x1ca2('57')]);
        if (!$[_0x1ca2('57')] && !$[_0x1ca2('18')]) {
            _0x1fd400 = !![];
            await takePostRequest(_0x1ca2('57'));
            await $[_0x1ca2('47')](parseInt(Math[_0x1ca2('51')]() * 0x7d0 + 0xbb8, 0xa));
        }
        $[_0x1ca2('7')](_0x1ca2('58') + $[_0x1ca2('59')]);
        if (!$[_0x1ca2('59')] && !$[_0x1ca2('18')]) {
            if (guaopencard_addSku + '' == _0x1ca2('1a')) {
                _0x1fd400 = !![];
                await takePostRequest(_0x1ca2('59'));
                await $[_0x1ca2('47')](parseInt(Math[_0x1ca2('51')]() * 0x7d0 + 0xfa0, 0xa));
            } else {
                console[_0x1ca2('7')](_0x1ca2('5a'));
            }
        }
        $[_0x1ca2('5b')] = !![];
        $[_0x1ca2('7')](_0x1ca2('5c') + $[_0x1ca2('5d')]);
        if (!$[_0x1ca2('5d')] && !$[_0x1ca2('18')]) {
            _0x1fd400 = !![];
            for (let _0x155ecf of $[_0x1ca2('5e')] || []) {
                if ($[_0x1ca2('5b')] == ![]) break;
                if (_0x155ecf[_0x1ca2('5f')] && _0x155ecf[_0x1ca2('4e')] === 0x0) {
                    $[_0x1ca2('60')] = _0x155ecf[_0x1ca2('5f')];
                    await takePostRequest(_0x1ca2('61'));
                    await $[_0x1ca2('47')](parseInt(Math[_0x1ca2('51')]() * 0xbb8 + 0xbb8, 0xa));
                }
            }
        }
        if (guaopencard_draw + '' !== '0') {
            $[_0x1ca2('5b')] = !![];
            let _0x584e49 = parseInt($[_0x1ca2('62')], 0xa);
            guaopencard_draw = parseInt(guaopencard_draw, 0xa);
            if (_0x584e49 > guaopencard_draw) _0x584e49 = guaopencard_draw;
            console[_0x1ca2('7')](_0x1ca2('63') + _0x584e49);
            for (m = 0x1; _0x584e49--; m++) {
                console[_0x1ca2('7')]('第' + m + _0x1ca2('64'));
                await takePostRequest(_0x1ca2('65'));
                if ($[_0x1ca2('5b')] == ![]) break;
                if (Number(_0x584e49) <= 0x0) break;
                if (m >= 0x1e) {
                    console[_0x1ca2('7')](_0x1ca2('66'));
                    break;
                }
                await $[_0x1ca2('47')](parseInt(Math[_0x1ca2('51')]() * 0x7d0 + 0x7d0, 0xa));
            }
        } else console[_0x1ca2('7')](_0x1ca2('67'));
        if (_0x1fd400) {
            await takePostRequest(_0x1ca2('43'));
        }
        console[_0x1ca2('7')]($[_0x1ca2('68')] + _0x1ca2('69') + $[_0x1ca2('6a')]);
        await $[_0x1ca2('47')](parseInt(Math[_0x1ca2('51')]() * 0x3e8 + 0x7d0, 0xa));
        await takePostRequest(_0x1ca2('6b'));
        await takePostRequest(_0x1ca2('6c'));
        if ($[_0x1ca2('18')]) {
            console[_0x1ca2('7')](_0x1ca2('3d'));
            return;
        }
        console[_0x1ca2('7')]($[_0x1ca2('2e')]);
        console[_0x1ca2('7')](_0x1ca2('6d') + $[_0x1ca2('22')]);
        if ($[_0x1ca2('29')] == 0x1) {
            $[_0x1ca2('22')] = $[_0x1ca2('2e')];
            console[_0x1ca2('7')](_0x1ca2('6e') + $[_0x1ca2('22')]);
        }
        await $[_0x1ca2('47')](parseInt(Math[_0x1ca2('51')]() * 0x3e8 + 0x1388, 0xa));
        if (_0x1fd400) await $[_0x1ca2('47')](parseInt(Math[_0x1ca2('51')]() * 0x3e8 + 0x2710, 0xa));
        if (guaopenwait) {
            if ($[_0x1ca2('29')] != cookiesArr[_0x1ca2('26')]) {
                console[_0x1ca2('7')]('等待' + guaopenwait + '秒');
                await $[_0x1ca2('47')](parseInt(guaopenwait, 0xa) * 0x3e8);
            }
        } else {
            if ($[_0x1ca2('29')] % 0x3 == 0x0) console[_0x1ca2('7')](_0x1ca2('6f'));
            if ($[_0x1ca2('29')] % 0x3 == 0x0) await $[_0x1ca2('47')](parseInt(Math[_0x1ca2('51')]() * 0x1388 + 0xea60, 0xa));
        }
    } catch (_0x4be068) {
        console[_0x1ca2('7')](_0x4be068);
    }
}
async function takePostRequest(_0x38548f) {
    if ($[_0x1ca2('18')]) return;
    let _0x1eecfe = _0x1ca2('70');
    let _0x1559b8 = '';
    let _0x5071a3 = _0x1ca2('71');
    let _0x4c14fc = '';
    switch (_0x38548f) {
        case _0x1ca2('39'):
            _0x1eecfe = _0x1ca2('72');
            _0x1559b8 = _0x1ca2('73');
            break;
        case _0x1ca2('3e'):
            _0x1eecfe = _0x1eecfe + _0x1ca2('74');
            _0x1559b8 = _0x1ca2('75') + $[_0x1ca2('20')];
            break;
        case _0x1ca2('3f'):
            _0x1eecfe = _0x1eecfe + _0x1ca2('76');
            _0x1559b8 = _0x1ca2('77') + ($[_0x1ca2('78')] || $[_0x1ca2('50')] || '') + _0x1ca2('79') + $[_0x1ca2('37')] + _0x1ca2('7a');
            break;
        case _0x1ca2('41'):
            _0x1eecfe = _0x1eecfe + _0x1ca2('7b');
            let _0x349a68 = _0x1eecfe + _0x1ca2('7c') + $[_0x1ca2('20')] + _0x1ca2('25') + $[_0x1ca2('22')];
            _0x1559b8 = _0x1ca2('7d') + ($[_0x1ca2('78')] || $[_0x1ca2('50')] || '') + _0x1ca2('7e') + encodeURIComponent($[_0x1ca2('38')]) + _0x1ca2('7f') + $[_0x1ca2('20')] + _0x1ca2('80') + encodeURIComponent(_0x349a68) + _0x1ca2('81');
            break;
        case _0x1ca2('42'):
            _0x1eecfe = _0x1eecfe + _0x1ca2('82');
            _0x1559b8 = _0x1ca2('83') + encodeURIComponent($[_0x1ca2('38')]);
            break;
        case _0x1ca2('43'):
            _0x1eecfe = _0x1eecfe + _0x1ca2('84');
            _0x1559b8 = _0x1ca2('75') + $[_0x1ca2('20')] + _0x1ca2('85') + encodeURIComponent($[_0x1ca2('38')]) + _0x1ca2('86') + encodeURIComponent($[_0x1ca2('87')]) + _0x1ca2('88') + encodeURIComponent($[_0x1ca2('89')]) + _0x1ca2('8a') + $[_0x1ca2('22')];
            break;
        case _0x1ca2('46'):
            _0x1eecfe = _0x1eecfe + _0x1ca2('8b');
            _0x1559b8 = _0x1ca2('75') + $[_0x1ca2('20')] + _0x1ca2('85') + encodeURIComponent($[_0x1ca2('38')]);
            break;
        case _0x1ca2('4b'):
            _0x1eecfe = _0x1eecfe + _0x1ca2('8c');
            _0x1559b8 = _0x1ca2('75') + $[_0x1ca2('20')] + _0x1ca2('85') + encodeURIComponent($[_0x1ca2('38')]);
            break;
        case _0x1ca2('4a'):
            _0x1eecfe = _0x1eecfe + _0x1ca2('8d');
            _0x1559b8 = _0x1ca2('75') + $[_0x1ca2('20')] + _0x1ca2('85') + encodeURIComponent($[_0x1ca2('38')]);
            break;
        case _0x1ca2('65'):
            _0x1eecfe = _0x1eecfe + _0x1ca2('8e');
            _0x1559b8 = _0x1ca2('75') + $[_0x1ca2('20')] + _0x1ca2('85') + encodeURIComponent($[_0x1ca2('38')]);
            break;
        case _0x1ca2('54'):
            _0x1eecfe = _0x1eecfe + _0x1ca2('8f');
            _0x1559b8 = _0x1ca2('75') + $[_0x1ca2('20')] + _0x1ca2('85') + encodeURIComponent($[_0x1ca2('38')]);
            break;
        case _0x1ca2('57'):
        case _0x1ca2('59'):
        case _0x1ca2('61'):
            _0x1eecfe = _0x1eecfe + _0x1ca2('90') + _0x38548f;
            _0x1559b8 = _0x1ca2('75') + $[_0x1ca2('20')] + _0x1ca2('85') + encodeURIComponent($[_0x1ca2('38')]);
            if (_0x38548f == _0x1ca2('61')) _0x1559b8 += _0x1ca2('91') + $[_0x1ca2('60')];
            break;
        case '邀请':
        case '助力':
            if (_0x38548f == '助力') {
                _0x1eecfe = _0x1eecfe + _0x1ca2('92');
            } else {
                _0x1eecfe = _0x1eecfe + _0x1ca2('93');
            }
            _0x1559b8 = _0x1ca2('75') + $[_0x1ca2('20')] + _0x1ca2('85') + encodeURIComponent($[_0x1ca2('38')]) + _0x1ca2('25') + $[_0x1ca2('22')];
            break;
        case _0x1ca2('94'):
        case _0x1ca2('5d'):
        case _0x1ca2('95'):
        case _0x1ca2('96'):
            _0x1eecfe = _0x1eecfe + _0x1ca2('97');
            let _0x1db8eb = '';
            let _0x4366a7 = '';
            if (_0x38548f == _0x1ca2('94')) {
                _0x1db8eb = 0x1f;
                _0x4366a7 = 0x1f;
            } else if (_0x38548f == _0x1ca2('5d')) {
                _0x1db8eb = 0x5;
                _0x4366a7 = $[_0x1ca2('60')] || 0x5;
            } else if (_0x38548f == _0x1ca2('95')) {
                _0x1db8eb = 0xe;
                _0x4366a7 = $[_0x1ca2('98')] || 0xe;
            } else if (_0x38548f == _0x1ca2('96')) {
                _0x1db8eb = 0x2;
                _0x4366a7 = $[_0x1ca2('99')] || 0x2;
            }
            _0x1559b8 = _0x1ca2('75') + $[_0x1ca2('20')] + _0x1ca2('85') + encodeURIComponent($[_0x1ca2('38')]) + _0x1ca2('9a') + $[_0x1ca2('2e')] + _0x1ca2('9b') + _0x1db8eb + _0x1ca2('9c') + _0x4366a7;
            break;
        case _0x1ca2('6b'):
            _0x1eecfe = _0x1eecfe + _0x1ca2('9d');
            _0x1559b8 = _0x1ca2('75') + $[_0x1ca2('20')] + _0x1ca2('85') + encodeURIComponent($[_0x1ca2('38')]) + _0x1ca2('9a') + $[_0x1ca2('2e')];
            break;
        case _0x1ca2('6c'):
            _0x1eecfe = _0x1eecfe + _0x1ca2('9e');
            _0x1559b8 = _0x1ca2('75') + $[_0x1ca2('20')] + _0x1ca2('85') + encodeURIComponent($[_0x1ca2('38')]);
            break;
        default:
            console[_0x1ca2('7')]('错误' + _0x38548f);
    }
    let _0x1d274d = getPostRequest(_0x1eecfe, _0x1559b8, _0x5071a3);
    return new Promise(async _0x1af90e => {
        $[_0x1ca2('9f')](_0x1d274d, (_0x29b489, _0x53ea49, _0x20e4db) => {
            try {
                setActivityCookie(_0x53ea49);
                if (_0x29b489) {
                    if (_0x53ea49 && typeof _0x53ea49[_0x1ca2('a0')] != _0x1ca2('a1')) {
                        if (_0x53ea49[_0x1ca2('a0')] == 0x1ed) {
                            console[_0x1ca2('7')](_0x1ca2('3d'));
                            $[_0x1ca2('18')] = !![];
                        }
                    }
                    console[_0x1ca2('7')]('' + $[_0x1ca2('a2')](_0x29b489, _0x29b489));
                    console[_0x1ca2('7')](_0x38548f + _0x1ca2('a3'));
                } else {
                    dealReturn(_0x38548f, _0x20e4db);
                }
            } catch (_0x1818d0) {
                console[_0x1ca2('7')](_0x1818d0, _0x53ea49);
            } finally {
                _0x1af90e();
            }
        });
    });
}
async function dealReturn(_0x2b9a79, _0x155832) {
    let _0x1205cd = '';
    try {
        if (_0x2b9a79 != _0x1ca2('41') || _0x2b9a79 != _0x1ca2('46')) {
            if (_0x155832) {
                _0x1205cd = JSON[_0x1ca2('a4')](_0x155832);
            }
        }
    } catch (_0x19f93b) {
        console[_0x1ca2('7')](_0x2b9a79 + _0x1ca2('a5'));
        console[_0x1ca2('7')](_0x155832);
        $[_0x1ca2('5b')] = ![];
    }
    try {
        switch (_0x2b9a79) {
            case _0x1ca2('39'):
                if (typeof _0x1205cd == _0x1ca2('a6')) {
                    if (_0x1205cd[_0x1ca2('a7')] == 0x0) {
                        if (typeof _0x1205cd[_0x1ca2('a8')] != _0x1ca2('a1')) $[_0x1ca2('37')] = _0x1205cd[_0x1ca2('a8')];
                    } else if (_0x1205cd[_0x1ca2('a9')]) {
                        console[_0x1ca2('7')](_0x1ca2('aa') + (_0x1205cd[_0x1ca2('a9')] || ''));
                    } else {
                        console[_0x1ca2('7')](_0x155832);
                    }
                } else {
                    console[_0x1ca2('7')](_0x155832);
                }
                break;
            case _0x1ca2('3e'):
                if (typeof _0x1205cd == _0x1ca2('a6')) {
                    if (_0x1205cd[_0x1ca2('ab')] && _0x1205cd[_0x1ca2('ab')] === !![]) {
                        if (typeof _0x1205cd[_0x1ca2('ac')][_0x1ca2('78')] != _0x1ca2('a1')) $[_0x1ca2('78')] = _0x1205cd[_0x1ca2('ac')][_0x1ca2('78')];
                        if (typeof _0x1205cd[_0x1ca2('ac')][_0x1ca2('50')] != _0x1ca2('a1')) $[_0x1ca2('50')] = _0x1205cd[_0x1ca2('ac')][_0x1ca2('50')];
                    } else if (_0x1205cd[_0x1ca2('ad')]) {
                        console[_0x1ca2('7')](_0x2b9a79 + ' ' + (_0x1205cd[_0x1ca2('ad')] || ''));
                    } else {
                        console[_0x1ca2('7')](_0x2b9a79 + ' ' + _0x155832);
                    }
                } else {
                    console[_0x1ca2('7')](_0x2b9a79 + ' ' + _0x155832);
                }
                break;
            case _0x1ca2('3f'):
                if (typeof _0x1205cd == _0x1ca2('a6')) {
                    if (_0x1205cd[_0x1ca2('ab')] && _0x1205cd[_0x1ca2('ab')] === !![]) {
                        if (_0x1205cd[_0x1ca2('ac')] && typeof _0x1205cd[_0x1ca2('ac')][_0x1ca2('ae')] != _0x1ca2('a1')) $[_0x1ca2('38')] = _0x1205cd[_0x1ca2('ac')][_0x1ca2('ae')];
                        if (_0x1205cd[_0x1ca2('ac')] && typeof _0x1205cd[_0x1ca2('ac')][_0x1ca2('89')] != _0x1ca2('a1')) $[_0x1ca2('89')] = _0x1205cd[_0x1ca2('ac')][_0x1ca2('89')];
                    } else if (_0x1205cd[_0x1ca2('ad')]) {
                        console[_0x1ca2('7')](_0x2b9a79 + ' ' + (_0x1205cd[_0x1ca2('ad')] || ''));
                    } else {
                        console[_0x1ca2('7')](_0x2b9a79 + ' ' + _0x155832);
                    }
                } else {
                    console[_0x1ca2('7')](_0x2b9a79 + ' ' + _0x155832);
                }
                break;
            case _0x1ca2('42'):
                if (typeof _0x1205cd == _0x1ca2('a6')) {
                    if (_0x1205cd[_0x1ca2('ab')] && _0x1205cd[_0x1ca2('ab')] === !![]) {
                        if (_0x1205cd[_0x1ca2('ac')] && typeof _0x1205cd[_0x1ca2('ac')][_0x1ca2('af')] != _0x1ca2('a1')) $[_0x1ca2('87')] = _0x1205cd[_0x1ca2('ac')][_0x1ca2('af')] || _0x1ca2('b0');
                    } else if (_0x1205cd[_0x1ca2('ad')]) {
                        console[_0x1ca2('7')](_0x2b9a79 + ' ' + (_0x1205cd[_0x1ca2('ad')] || ''));
                    } else {
                        console[_0x1ca2('7')](_0x2b9a79 + ' ' + _0x155832);
                    }
                } else {
                    console[_0x1ca2('7')](_0x2b9a79 + ' ' + _0x155832);
                }
                break;
            case _0x1ca2('43'):
                if (typeof _0x1205cd == _0x1ca2('a6')) {
                    if (_0x1205cd[_0x1ca2('ab')] && _0x1205cd[_0x1ca2('ab')] === !![]) {
                        $[_0x1ca2('36')] = _0x1205cd[_0x1ca2('ac')][_0x1ca2('36')] || _0x1205cd[_0x1ca2('ac')][_0x1ca2('b1')][_0x1ca2('36')] || 0x0;
                        $[_0x1ca2('35')] = _0x1205cd[_0x1ca2('ac')][_0x1ca2('b2')] || ![];
                        $[_0x1ca2('62')] = _0x1205cd[_0x1ca2('ac')][_0x1ca2('b3')][_0x1ca2('62')] || 0x0;
                        $[_0x1ca2('6a')] = _0x1205cd[_0x1ca2('ac')][_0x1ca2('b3')][_0x1ca2('6a')] || 0x0;
                        $[_0x1ca2('68')] = _0x1205cd[_0x1ca2('ac')][_0x1ca2('b3')][_0x1ca2('68')] || 0x0;
                        $[_0x1ca2('2e')] = _0x1205cd[_0x1ca2('ac')][_0x1ca2('b3')][_0x1ca2('2e')] || '';
                    } else if (_0x1205cd[_0x1ca2('ad')]) {
                        console[_0x1ca2('7')](_0x2b9a79 + ' ' + (_0x1205cd[_0x1ca2('ad')] || ''));
                    } else {
                        console[_0x1ca2('7')](_0x2b9a79 + ' ' + _0x155832);
                    }
                } else {
                    console[_0x1ca2('7')](_0x2b9a79 + ' ' + _0x155832);
                }
                break;
            case _0x1ca2('4a'):
                if (typeof _0x1205cd == _0x1ca2('a6')) {
                    if (_0x1205cd[_0x1ca2('ab')] && _0x1205cd[_0x1ca2('ab')] === !![]) {
                        $[_0x1ca2('59')] = _0x1205cd[_0x1ca2('ac')][_0x1ca2('59')] || ![];
                        $[_0x1ca2('54')] = _0x1205cd[_0x1ca2('ac')][_0x1ca2('54')] || ![];
                        $[_0x1ca2('57')] = _0x1205cd[_0x1ca2('ac')][_0x1ca2('57')] || ![];
                        $[_0x1ca2('5d')] = _0x1205cd[_0x1ca2('ac')][_0x1ca2('5d')] || ![];
                        $[_0x1ca2('5e')] = _0x1205cd[_0x1ca2('ac')][_0x1ca2('5e')] || [];
                    } else if (_0x1205cd[_0x1ca2('ad')]) {
                        console[_0x1ca2('7')](_0x2b9a79 + ' ' + (_0x1205cd[_0x1ca2('ad')] || ''));
                    } else {
                        console[_0x1ca2('7')](_0x2b9a79 + ' ' + _0x155832);
                    }
                } else {
                    console[_0x1ca2('7')](_0x2b9a79 + ' ' + _0x155832);
                }
                break;
            case _0x1ca2('4b'):
                if (typeof _0x1205cd == _0x1ca2('a6')) {
                    if (_0x1205cd[_0x1ca2('ab')] && _0x1205cd[_0x1ca2('ab')] === !![]) {
                        let _0xb4ba9f = _0x1205cd[_0x1ca2('ac')][_0x1ca2('b4')] || [];
                        let _0x590f67 = _0x1205cd[_0x1ca2('ac')][_0x1ca2('b5')] || [];
                        let _0x36c3cb = _0x1205cd[_0x1ca2('ac')][_0x1ca2('b6')] || [];
                        let _0x4b9414 = _0x1205cd[_0x1ca2('ac')][_0x1ca2('b7')] || [];
                        $[_0x1ca2('48')] = [..._0x36c3cb, ..._0xb4ba9f, ..._0x590f67, ..._0x4b9414];
                        $[_0x1ca2('49')] = _0x1205cd[_0x1ca2('ac')][_0x1ca2('49')] || ![];
                        $[_0x1ca2('b8')] = _0x1205cd[_0x1ca2('ac')][_0x1ca2('b9')] || 0x0;
                        $[_0x1ca2('ba')] = _0x1205cd[_0x1ca2('ac')][_0x1ca2('bb')] || 0x0;
                        $[_0x1ca2('bc')] = _0x1205cd[_0x1ca2('ac')][_0x1ca2('bc')] || 0x0;
                    } else if (_0x1205cd[_0x1ca2('ad')]) {
                        console[_0x1ca2('7')](_0x2b9a79 + ' ' + (_0x1205cd[_0x1ca2('ad')] || ''));
                    } else {
                        console[_0x1ca2('7')](_0x2b9a79 + ' ' + _0x155832);
                    }
                } else {
                    console[_0x1ca2('7')](_0x2b9a79 + ' ' + _0x155832);
                }
                break;
            case _0x1ca2('65'):
            case _0x1ca2('54'):
            case _0x1ca2('94'):
            case _0x1ca2('5d'):
            case _0x1ca2('95'):
            case _0x1ca2('96'):
            case _0x1ca2('57'):
            case _0x1ca2('59'):
            case _0x1ca2('61'):
                if (typeof _0x1205cd == _0x1ca2('a6')) {
                    if (_0x1205cd[_0x1ca2('ab')] && _0x1205cd[_0x1ca2('ab')] === !![]) {
                        if (typeof _0x1205cd[_0x1ca2('ac')] == _0x1ca2('a6')) {
                            let _0x33825e = '';
                            let _0x46a5a5 = '抽奖';
                            if (_0x1205cd[_0x1ca2('ac')][_0x1ca2('bd')]) {
                                _0x33825e = _0x1205cd[_0x1ca2('ac')][_0x1ca2('bd')] + '京豆';
                            }
                            if (_0x1205cd[_0x1ca2('ac')][_0x1ca2('be')]) {
                                _0x33825e += ' ' + _0x1205cd[_0x1ca2('ac')][_0x1ca2('be')] + _0x1ca2('bf');
                            }
                            if (_0x2b9a79 == _0x1ca2('54')) {
                                _0x46a5a5 = '关注';
                                if (_0x1205cd[_0x1ca2('ac')][_0x1ca2('c0')] && _0x1205cd[_0x1ca2('ac')][_0x1ca2('c1')]) {
                                    _0x33825e += _0x1ca2('c2') + _0x1205cd[_0x1ca2('ac')][_0x1ca2('c0')] + '京豆';
                                }
                            } else if (_0x2b9a79 == _0x1ca2('96') || _0x2b9a79 == _0x1ca2('59')) {
                                _0x46a5a5 = '加购';
                            } else if (_0x2b9a79 == _0x1ca2('94')) {
                                _0x46a5a5 = _0x1ca2('c3');
                            } else if (_0x2b9a79 == _0x1ca2('95')) {
                                _0x46a5a5 = _0x1ca2('c4');
                            } else if (_0x2b9a79 == _0x1ca2('5d') || _0x2b9a79 == _0x1ca2('61')) {
                                _0x46a5a5 = _0x1ca2('c5');
                            } else if (_0x2b9a79 == _0x1ca2('57')) {
                                _0x46a5a5 = '签到';
                            } else {
                                _0x33825e = _0x1205cd[_0x1ca2('ac')][_0x1ca2('c6')] == !![] && (_0x1205cd[_0x1ca2('ac')][_0x1ca2('c7')] == 0x6 && _0x1205cd[_0x1ca2('ac')][_0x1ca2('1d')] || '') || _0x1ca2('c8');
                            }
                            if (!_0x33825e) {
                                _0x33825e = _0x1ca2('c8');
                            }
                            console[_0x1ca2('7')](_0x46a5a5 + _0x1ca2('c9') + (_0x33825e || _0x155832));
                        } else {
                            console[_0x1ca2('7')](_0x2b9a79 + ' ' + _0x155832);
                        }
                    } else if (_0x1205cd[_0x1ca2('ad')]) {
                        $[_0x1ca2('5b')] = ![];
                        console[_0x1ca2('7')](_0x2b9a79 + ' ' + (_0x1205cd[_0x1ca2('ad')] || ''));
                    } else {
                        console[_0x1ca2('7')](_0x2b9a79 + ' ' + _0x155832);
                    }
                } else {
                    console[_0x1ca2('7')](_0x2b9a79 + ' ' + _0x155832);
                }
                break;
            case _0x1ca2('6b'):
                if (typeof _0x1205cd == _0x1ca2('a6')) {
                    if (_0x1205cd[_0x1ca2('ab')] && _0x1205cd[_0x1ca2('ab')] === !![]) {
                        console[_0x1ca2('7')](_0x1ca2('ca'));
                        let _0x1408fe = 0x0;
                        let _0x58c483 = 0x0;
                        for (let _0x34210e in _0x1205cd[_0x1ca2('ac')][_0x1ca2('cb')]) {
                            let _0x299a99 = _0x1205cd[_0x1ca2('ac')][_0x1ca2('cb')][_0x34210e];
                            if (_0x299a99[_0x1ca2('cc')] == _0x1ca2('cd')) {
                                _0x1408fe++;
                                _0x58c483 = _0x299a99[_0x1ca2('cc')][_0x1ca2('ce')]('京豆', '');
                            } else {
                                console[_0x1ca2('7')]('' + (_0x299a99[_0x1ca2('cf')] != 0xa && _0x299a99[_0x1ca2('d0')] && _0x299a99[_0x1ca2('d0')] + ':' || '') + _0x299a99[_0x1ca2('cc')]);
                            }
                        }
                        if (_0x1408fe > 0x0) console[_0x1ca2('7')](_0x1ca2('d1') + _0x1408fe + '):' + (_0x1408fe * parseInt(_0x58c483, 0xa) || 0x1e) + '京豆');
                    } else if (_0x1205cd[_0x1ca2('ad')]) {
                        console[_0x1ca2('7')](_0x2b9a79 + ' ' + (_0x1205cd[_0x1ca2('ad')] || ''));
                    } else {
                        console[_0x1ca2('7')](_0x2b9a79 + ' ' + _0x155832);
                    }
                } else {
                    console[_0x1ca2('7')](_0x2b9a79 + ' ' + _0x155832);
                }
                break;
            case _0x1ca2('6c'):
                if (typeof _0x1205cd == _0x1ca2('a6')) {
                    if (_0x1205cd[_0x1ca2('ab')] && _0x1205cd[_0x1ca2('ab')] === !![] && _0x1205cd[_0x1ca2('ac')]) {
                        $[_0x1ca2('d2')] = _0x1205cd[_0x1ca2('ac')][_0x1ca2('d3')][_0x1ca2('26')];
                        $[_0x1ca2('7')](_0x1ca2('d4') + _0x1205cd[_0x1ca2('ac')][_0x1ca2('d3')][_0x1ca2('26')] + '个');
                    } else if (_0x1205cd[_0x1ca2('ad')]) {
                        console[_0x1ca2('7')](_0x2b9a79 + ' ' + (_0x1205cd[_0x1ca2('ad')] || ''));
                    } else {
                        console[_0x1ca2('7')](_0x2b9a79 + ' ' + _0x155832);
                    }
                } else {
                    console[_0x1ca2('7')](_0x2b9a79 + ' ' + _0x155832);
                }
                break;
            case '邀请':
            case '助力':
                if (typeof _0x1205cd == _0x1ca2('a6')) {
                    if (_0x1205cd[_0x1ca2('ac')][_0x1ca2('4e')] == 0xc8) {
                        if (_0x2b9a79 == '助力') {
                            console[_0x1ca2('7')](_0x1ca2('d5'));
                        } else {
                            $[_0x1ca2('55')] = !![];
                        }
                    } else if (_0x1205cd[_0x1ca2('ac')][_0x1ca2('4e')] == 0x69) {
                        console[_0x1ca2('7')](_0x1ca2('d6'));
                    } else if (_0x1205cd[_0x1ca2('ac')][_0x1ca2('4e')] == 0x68) {
                        console[_0x1ca2('7')](_0x1ca2('d7'));
                    } else if (_0x1205cd[_0x1ca2('ac')][_0x1ca2('4e')] == 0x65) {} else {
                        console[_0x1ca2('7')](_0x155832);
                    }
                } else {
                    console[_0x1ca2('7')](_0x2b9a79 + ' ' + _0x155832);
                }
                case _0x1ca2('41'):
                case _0x1ca2('46'):
                    break;
                default:
                    console[_0x1ca2('7')](_0x2b9a79 + _0x1ca2('d8') + _0x155832);
        }
        if (typeof _0x1205cd == _0x1ca2('a6')) {
            if (_0x1205cd[_0x1ca2('ad')]) {
                if (_0x1205cd[_0x1ca2('ad')][_0x1ca2('d9')]('火爆') > -0x1) {
                    $[_0x1ca2('17')] = !![];
                }
            }
        }
    } catch (_0xe87112) {
        console[_0x1ca2('7')](_0xe87112);
    }
}

function getPostRequest(_0x5ee71e, _0x3e7179, _0x35061a = _0x1ca2('71')) {
    let _0x4e57d0 = {
        'Accept': _0x1ca2('da'),
        'Accept-Encoding': _0x1ca2('db'),
        'Accept-Language': _0x1ca2('dc'),
        'Connection': _0x1ca2('dd'),
        'Content-Type': _0x1ca2('de'),
        'Cookie': cookie,
        'User-Agent': $['UA'],
        'X-Requested-With': _0x1ca2('df')
    };
    if (_0x5ee71e[_0x1ca2('d9')](_0x1ca2('70')) > -0x1) {
        _0x4e57d0[_0x1ca2('e0')] = _0x1ca2('e1') + $[_0x1ca2('20')] + _0x1ca2('25') + $[_0x1ca2('22')];
        _0x4e57d0[_0x1ca2('e2')] = '' + (lz_jdpin_token_cookie && lz_jdpin_token_cookie || '') + ($[_0x1ca2('38')] && _0x1ca2('e3') + $[_0x1ca2('38')] + ';' || '') + activityCookie;
    }
    return {
        'url': _0x5ee71e,
        'method': _0x35061a,
        'headers': _0x4e57d0,
        'body': _0x3e7179,
        'timeout': 0x7530
    };
}

function getCk() {
    return new Promise(_0x3855ac => {
        let _0x3f2cf7 = {
            'url': _0x1ca2('e1') + $[_0x1ca2('20')] + _0x1ca2('25') + $[_0x1ca2('22')],
            'followRedirect': ![],
            'headers': {
                'User-Agent': $['UA']
            },
            'timeout': 0x7530
        };
        $[_0x1ca2('e4')](_0x3f2cf7, async (_0x30554d, _0x4714cf, _0x503a30) => {
            try {
                if (_0x30554d) {
                    if (_0x4714cf && typeof _0x4714cf[_0x1ca2('a0')] != _0x1ca2('a1')) {
                        if (_0x4714cf[_0x1ca2('a0')] == 0x1ed) {
                            console[_0x1ca2('7')](_0x1ca2('3d'));
                            $[_0x1ca2('18')] = !![];
                        }
                    }
                    console[_0x1ca2('7')]('' + $[_0x1ca2('a2')](_0x30554d));
                    console[_0x1ca2('7')]($[_0x1ca2('1d')] + _0x1ca2('e5'));
                } else {
                    let _0x214a6a = _0x503a30[_0x1ca2('28')](/(活动已经结束)/) && _0x503a30[_0x1ca2('28')](/(活动已经结束)/)[0x1] || '';
                    if (_0x214a6a) {
                        $[_0x1ca2('19')] = !![];
                        console[_0x1ca2('7')](_0x1ca2('e6'));
                    }
                    setActivityCookie(_0x4714cf);
                }
            } catch (_0x3ea3ed) {
                $[_0x1ca2('32')](_0x3ea3ed, _0x4714cf);
            } finally {
                _0x3855ac();
            }
        });
    });
}

function setActivityCookie(_0x14b43c) {
    let _0x1ebe30 = '';
    let _0x47cbc6 = '';
    let _0x1085c8 = '';
    let _0x45777f = _0x14b43c && _0x14b43c[_0x1ca2('e7')] && (_0x14b43c[_0x1ca2('e7')][_0x1ca2('e8')] || _0x14b43c[_0x1ca2('e7')][_0x1ca2('e9')] || '') || '';
    let _0x25726c = '';
    if (_0x45777f) {
        if (typeof _0x45777f != _0x1ca2('a6')) {
            _0x25726c = _0x45777f[_0x1ca2('ea')](',');
        } else _0x25726c = _0x45777f;
        for (let _0x89a102 of _0x25726c) {
            let _0x3b5281 = _0x89a102[_0x1ca2('ea')](';')[0x0][_0x1ca2('eb')]();
            if (_0x3b5281[_0x1ca2('ea')]('=')[0x1]) {
                if (_0x3b5281[_0x1ca2('d9')](_0x1ca2('ec')) > -0x1) _0x1ebe30 = _0x3b5281[_0x1ca2('ce')](/ /g, '') + ';';
                if (_0x3b5281[_0x1ca2('d9')](_0x1ca2('ed')) > -0x1) _0x47cbc6 = _0x3b5281[_0x1ca2('ce')](/ /g, '') + ';';
                if (_0x3b5281[_0x1ca2('d9')](_0x1ca2('ee')) > -0x1) _0x1085c8 = '' + _0x3b5281[_0x1ca2('ce')](/ /g, '') + ';';
            }
        }
    }
    if (_0x1ebe30 && _0x47cbc6) activityCookie = _0x1ebe30 + ' ' + _0x47cbc6;
    if (_0x1085c8) lz_jdpin_token_cookie = _0x1085c8;
}
async function getUA() {
    $['UA'] = _0x1ca2('ef') + randomString(0x28) + _0x1ca2('f0');
}

function randomString(_0x16ca4d) {
    _0x16ca4d = _0x16ca4d || 0x20;
    let _0x263e2f = _0x1ca2('f1'),
        _0x30e368 = _0x263e2f[_0x1ca2('26')],
        _0x5995bb = '';
    for (i = 0x0; i < _0x16ca4d; i++) _0x5995bb += _0x263e2f[_0x1ca2('f2')](Math[_0x1ca2('f3')](Math[_0x1ca2('51')]() * _0x30e368));
    return _0x5995bb;
};
_0xodZ = 'jsjiami.com.v6';

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

