import $ from 'jquery';
var APPID="wx45f898f7029b393c";
var APPSECRET="94dc653d186326bc63b5dfa359c68d08";
var ACCESS_TOKEN_URL="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET";
var Create_MENU_URL="https://api.weixin.qq.com/cgi-bin/menu/create?access_token=ACCESS_TOKEN";
var QUER_MENU_URL="https://api.weixin.qq.com/cgi-bin/menu/get?access_token=ACCESS_TOKEN";
var DELETE_MENU_URL="https://api.weixin.qq.com/cgi-bin/menu/delete?access_token=ACCESS_TOKEN";
var GET_WXUSER_INFO="https://api.weixin.qq.com/cgi-bin/user/info?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN";

var URL = 'http://219.141.78.173';//'http://mrhuangqiwei.6655.la';
var _backend = {
    /**
     * 绑定卡
     * demo:
     * http://mrhuangqiwei.6655.la/Hospital/AddFriend?
     * openid=owEWzwQKO7G_uy4C0X_Wn2boPVI4
     * &sfzh=513427199309232717
     * &ylkh=
     * &brxm=%E9%BB%84%E5%90%AF%E4%BD%8D
     * &brxb=1
     * &brjtzz=%E5%9B%9B%E5%B7%9D
     * &lxdh=15577616194
     * &nl=23 
     * &nldw=1
     * &%E6%8F%90%E4%BA%A4=%E6%8F%90%E4%BA%A4
     * 
     * @param {string} openid  
     * @param {string} sfzh 身份证号
     * @param {string} ylkh 当没有时就为空 ''
     * @param {string} brxm 病人姓名
     * @param {number} brxb  1 男 2 女 3 未知
     * @param {string} brjtzz 
     * @param {string} lxdh  联系电话
     * @param {string} nldw  1岁 2月 3天  年龄单位
     * @return {number} 返回值1 此卡已经绑定无需重复绑卡
                        返回值2 此卡无效请重新绑卡
                        返回值3 绑卡成工
                        返回值4 绑卡失败
     */
    bindCard(openId, sfzh='', ylkh='', brxm='',brxb='',brjtzz='',nl='',lxdh='',nldw=''){
        return $.ajax({
            url:`${URL}/Hospital/AddFriend?openid=${openId}&sfzh=${sfzh}&ylkh=${ylkh}&brxm=${brxm}&brxb=${brxb}&brjtzz=${brjtzz}&nl=${nl}&lxdh=${lxdh}&nldw=1&提交=提交`,
            method:'GET',
            contentType:'text/plain'
        })
    },


    /**
     * 病人基本信息 v_his_brjbxx当有医疗卡号是 使用
     * v_his_brjbxx1     当病人没有身份证号时使用。
     * */ 
    patientBasicInfo(){
        return $.ajax({

        })  
    },

    /**
     * 病人记录
     * demo:
     * http://mrhuangqiwei.6655.la/Hospital/getuserRecord?sfzh=513427197209290026&ylkh=&%E6%8F%90%E4%BA%A4=%E6%8F%90%E4%BA%A4
     * @param {string}  sfzh
       @param {string}  ylkh
                        当没有医疗卡时传空，系统会自动判断 
     * 
     * @returns {json} 
     * [{"ylkh":"",                     医疗卡号
     *   "ylklxbm":"-2",                医疗卡类型编码
     *   "ghxh":"20160705000258",       挂号序号
     *   "brid":"20160705000188",       病人id
     *   "ghrq":"2016-07-05",           挂号日期
     *   "sfzh":"513427197209290026",   身份证号
     *   "brxm":"蒋敏",                  病人姓名
     *   "brnl":"43.00",                病人年龄
     *   "brnldw":"1",                  病人年龄单位
     *   "brxb":"2",                    病人性别
     *   "jtzz":"四川省宁南县披砂镇顺城北街108号2幢1单元24号",     家庭住址
     *   "sj":null}]                    手机
     * 
     *   这里面最有用的就是那个ghxh，那个东西是医院识别病人的一 后个标志，查询它的挂号缴费情况，费用情况，处方情况，报告情况都是根据这个东西来查的
     */
    patientRecord(sfzh,ylkh=''){
        return $.ajax({
            url:`${URL}/Hospital/getuserRecord?sfzh=${sfzh}&ylkh=${ylkh}&%E6%8F%90%E4%BA%A4=%E6%8F%90%E4%BA%A4`,
            method:'GET',
            contentType:'text/plain'
        })
    },

    /** 常用就诊人记录 ok 为跨域
     * demo:
     * http://mrhuangqiwei.6655.la/Hospital/GetFriendinfo?openid=owEWzwQKO7G_uy4C0X_Wn2boPVI4&%E6%8F%90%E4%BA%A4=%E6%8F%90%E4%BA%A4
     * @param  {string} openid
     * @return {json} 
     * [{"sfzh":"513427199309232717",
     *   "ylkh":"",
     *   "brdh":"15577616194",
     *   "brxm":"黄启位",
     *   "brnl":"23",
     *   "brxb":"1",
     *   "jtzz":"四川",
     *   "nldw":"1",
     *   "ph":"owEWzwQKO7G_uy4C0X_Wn2boPVI4"}]
     * */
    commonPatient(openid){
        return $.ajax({
            url:`${URL}/Hospital/GetFriendinfo?openid=${openid}&%E6%8F%90%E4%BA%A4=%E6%8F%90%E4%BA%A4`,
            method:'GET',
            contentType:'text/plain'
        })
    },

    /**
     * 获取住院费用明细 ok
     * demo:
     * http://mrhuangqiwei.6655.la/Hospital/userzyfymx?zyh=2016003850&%E6%8F%90%E4%BA%A4=%E6%8F%90%E4%BA%A4
     * @returns {JOSN} 
     *  userinfo  这里是一个病人费用基本信息的json
        zyh 住院号
        ryrq  入院日期
        cyrq  出院日期
        rycwid 入院床位id
        cyks  出院科室
        ryks  入院科室
        ksmc   科室名称
        brxm   病人姓名

        brnl   病人年龄
        brndw  病人年龄danwei
        brxb     病人性别
        jtzz  家庭住址
        fbmc  费别名称
        fyje  费用金额
        yjje  预交金额

        userfymx 这里是该病人费用宁西信息的json
        这里面的json名称
        dlbm  
        fydj  费用单价
        fymc  费用名称
        fygg  费用规格
        fyje  费用金额
        fysl   费用数量
        jldwmc  剂量单位编码
        mxfyxmbm  明细费用项目编码
        yhje  用户金额
        zyh  住院号
     * */ 
    getHospitalizationFee(zyh=''){
        //2016003423
        return $.ajax({
            url:`${URL}/Hospital/userzyfymx?zyh=${zyh}&%E6%8F%90%E4%BA%A4=%E6%8F%90%E4%BA%A4`,
            method:'GET',
            contentType:'text/plain'
        })
    },

    
    /**
     * 科室信息接口 ok
     * http://mrhuangqiwei.6655.la/Hospital/Ksbmservlet
     * 
     * @returns {JSON}
     * [{"ksbm":"0001","ksmc":"信息科"},
     *  {"ksbm":"0002","ksmc":"内一科"},
     *  {"ksbm":"0003","ksmc":"外科"},
     *  {"ksbm":"0004","ksmc":"妇产科"},
     *  {"ksbm":"0005","ksmc":"儿科"},
     *  {"ksbm":"0007","ksmc":"针灸科"},
     *  {"ksbm":"0008","ksmc":"肛肠科"},
     *  {"ksbm":"0012","ksmc":"手术室"},
     *  {"ksbm":"0013","ksmc":"门诊"},
     *  {"ksbm":"0024","ksmc":"急诊科"},
     *  {"ksbm":"0033","ksmc":"治未病科"},
     *  {"ksbm":"0034","ksmc":"口腔科"},
     *  {"ksbm":"0037","ksmc":"专家门诊"},
     *  {"ksbm":"0043","ksmc":"内二科"},
     *  {"ksbm":"0047","ksmc":"中医妇科"},
     *  {"ksbm":"0048","ksmc":"五官科"},
     *  {"ksbm":"0049","ksmc":"便秘科"},
     *  {"ksbm":"6666","ksmc":"康复科"}].
     *  ksbm 科室编码
        ksmc 科室名称 
    */
    departmentInfomation(){
        return $.ajax({
            url:`${URL}/Hospital/Ksbmservlet`,
            method:'GET',
            contentType:'text/plain'
        })
    },

    /**
     * 删除常用就诊人接口 
     * demo:
     * http://mrhuangqiwei.6655.la/Hospital/deletefriend?openid=owEWzwQKO7G_uy4C0X_Wn2boPVI4&sfzh=513489527456582&ylkh=&%E6%8F%90%E4%BA%A4=%E6%8F%90%E4%BA%A4
     * @param {string} openid 
     * @param {string} yikh 医疗卡号
     * @param {string} sfzh  身份证号
     * 当有医疗卡号和身份证号为空的就传空就行了
    */
    deleteCommonPatient(openid,sfzh,ylkh){
         return $.ajax({
            url:`${URL}/Hospital/deletefriend?openid=${openid}&sfzh=${sfzh}&ylkh=${ylkh}`,
            method:'GET',
            contentType:'text/plain'
         })
    },
    /**
     * 
     * http://mrhuangqiwei.6655.la/Hospital/updatefriend?openid=owEWzwQKO7G_uy4C0X_Wn2boPVI4&sfzh=141341&sfzhold=1&ylkh=&brxm=afa&brxb=1&brjtzz=%E5%B9%B4%E5%85%B3%E9%82%A3%E7%83%A6%E4%BD%A0&brdh=15577616168&nl=23&%E6%8F%90%E4%BA%A4=%E6%8F%90%E4%BA%A4
        提交参数说明
        openid  用户的id
        sfzh    修改后的身份证号
        sfzhold  修改之前的身份证号  该字段从常用就诊人接口就可以获得
        ylkh  医疗卡号   该字段从常用就诊人接口就可以获得
        brxm 病人姓名
        brxb 病人性别  1 男 2  女
        brjtzz 病人家庭住址
        brdh  病人电话
        nl 年龄
    */
    editCommonPatient(openid,sfzh,sfzhold,ylkh,brxm,brxb,brjtzz,brdh,nl){
         return $.ajax({
            url:`${URL}/Hospital/updatefriend?openid=${openid}&sfzh=${sfzh}&sfzhold=${sfzhold}&ylkh=${ylkh}&brxm=${brxm}&brxb=${brxb}&brjtzz=${brjtzz}&brdh=${brdh}&nl=${nl}&%E6%8F%90%E4%BA%A4=%E6%8F%90%E4%BA%A4`,
            method:'GET',
            contentType:'text/plain'
         })
    },

    /**
     * 医生排班  ok
     * http://mrhuangqiwei.6655.la/Hospital/yspb?ksbm=0004&%E6%8F%90%E4%BA%A4=%E6%8F%90%E4%BA%A4
     * @returns {JSON} 
     * 医生排班分上午排班和下午排班但是参数都是一样的
        czybm 操作员编码 也就是医生编码
        czyxm 操作员姓名 也就是医生姓名
        fydj   挂号费用的单价
        ghfybm  挂号费用编码
        ksbm  科室编码
        ksmc 科室名称
        mzsbdd 门诊上班地点 
        sbsj 上班时间
        xbsj  下班时间
        xhzs 限制挂号总数
        xyzs 限制预约总数
        yydjsj 预约登记时间
        yyghsi 预约挂号时间
        yyyxsj 预约有效 时间
        yzrq 医嘱日期 （这个没什么用）
        zcmc 职称名称
     * 
    */
    doctorSchedule(ksbm=''){
        return $.ajax({
            url:`${URL}/Hospital/yspb?ksbm=${ksbm}`,
            method:'GET',
            contentType:'text/plain'
        })
    },

    /**
     * 预约挂号
     * demo：
     * http://mrhuangqiwei.6655.la/Hospital/yyghservlet?yyghrq=2016-10-19+10%3A47%3A29.173&brxm=%E7%BD%97%E9%98%B3&brxb=2&brnldw=1&sfzh=513427199204020224&jtzz=afaga&nl=12&sj=1241412431&yyys=0004&yyks=0004&yydjrq=2016-10-17+10%3A47%3A29.173&yyyxrq=2016-10-29+10%3A47%3A29.173&mxfyxmbm=130002&yyjfbz=1&ylkh=&%E6%8F%90%E4%BA%A4=%E6%8F%90%E4%BA%A4
     * http://mrhuangqiwei.6655.la/Hospital/yyghservlet?yyghrq=2016-10-19&brxm=%E7%BD%97%E9%98%B3&brxb=2&brnldw=1&sfzh=513427199204020224&jtzz=afaga&nl=12&sj=1241412431&yyys=0004&yyks=0004&yydjrq=2016-10-17&yyyxrq=2016-10-29&mxfyxmbm=130002&yyjfbz=1&ylkh=&%E6%8F%90%E4%BA%A4=%E6%8F%90%E4%BA%A4
     * 
     *  yyghrq 预约挂号日期 格式：2016-09-07 12:00:00.000 这些从排班那里取就可以了
        brxm   病人姓名  从病人基本信息里面获得
        brxb   性别     从病人基本信息里面获得
        brnldw  病人年龄单位  从病人基本信息里面获得
        sfzh   身份证号     从病人基本信息里面获得
        jtzz  家庭住址      从病人基本信息里面获得
        nl   年龄          从病人基本信息里面获得
        sj   手机号码          从病人基本信息里面获得
        yyys  预约医生 传入 yspb里面的医生编码 ysbm

        yyks   预约科室 传入 yspb里面的ksbm
        yydjrq  预约登记日期  格式：2016-09-07 12:00:00.000 这些从排班那里取就可以了
        yyyxrq   预约有效日期  格式：2016-09-07 12:00:00.000 这些从排班那里取就可以了
        mxfyxmbm  明细费用项目编码 传入 医生排班里的  ghfyxmbm
        yyjfbz    预约结算标志，当缴费成功时
        ylkh     医疗卡号从病人基本信息里面获得，没有就传空
    */
    appointmentOfregister(yyghrq,brxm,brxb,brnldw,sfzh,jtzz,nl,sj,yyys,yyks,yydjrq,yyyxrq,mxfyxmbm,yyjfbz,ylkh){
        return $.ajax({
            url:`${URL}/Hospital/yyghservlet?
                yyghrq=${yyghrq}
                &brxm=${brxm}
                &brxb=${brxb}
                &brnldw=${brnldw}
                &sfzh=${sfzh}
                &jtzz=${jtzz}
                &nl=${nl}
                &sj=${sj}
                &yyys=${yyys}
                &yyks=${yyks}
                &yydjrq=${yydjrq}
                &yyyxrq=${yyyxrq}
                &mxfyxmbm=${mxfyxmbm}
                &yyjfbz=${yyjfbz}
                &ylkh=${ylkh}`,
            method:'GET',
            contentType:'text/plain'
        })
    },

    /**  用户信息 ok
     * demo:
     * http://mrhuangqiwei.6655.la/Hospital/UserInfoServlet?openid=owEWzwQKO7G_uy4C0X_Wn2boPVI4&%E6%8F%90%E4%BA%A4=%E6%8F%90%E4%BA%A4
     * @returns {json} 
     * [{"userid":"owEWzwQKO7G_uy4C0X_Wn2boPVI4",
     *   "username":"蓝天",
     *   "city":"",
     *   "province":"四川",
     *   "county":"中国",
     *   "sex":"1",                      1男 2女  null未知
     *   "friend1":null,
     *   "friend2":null,
     *   "friend3":null,
     *   "ylkh1":null,
     *   "ylkh2":null,
     *   "ylkh3":null,
     *   "jtzz":null,                    家庭住址 
     *   "headimgurl":"",                头像url
     *   "subscribe":"1",                是否关注
     *   "subscribe_time":"1484295425",  关注时间
     *   "isaddbz":"0",                  是否可添加就诊人 0可以添加 1不可以添加
     *   "isfriendbz":"0"}]              0没有就诊人需要添加 1有一个 2有二个  3有三个
     * 
     *   freind1 和ylkh1有一个就可以了。？？？？
    */
    userInfo(openid){
         return $.ajax({
            // url:`http://mrhuangqiwei.6655.la/Hospital/UserInfoServlet=${openid}&提交=提交`,
            url: `${URL}/Hospital/UserInfoServlet?openid=${openid}&%E6%8F%90%E4%BA%A4=%E6%8F%90%E4%BA%A4`,
            method:'GET',
            contentType:'text/plain'
         })
    },

    /** 检查查询 Lisreport
     * 提交地址：http://mrhuangqiwei.6655.la/Hospital/Lisreport?zyh=2016003850&%E6%8F%90%E4%BA%A4=%E6%8F%90%E4%BA%A4
     * @param {string}
        bah:病案号
        bbbh：仪器号
        brnl：病人年龄
        brxb：病人性别     1男 2 女 3 未知
        brxm：病人姓名
        cwh：床位号
        cyrq：采样日期
        djrq：登记日期
        cklx:  参考类型
        ckz_t ： 参考值-t
        n_max   最大值
        n_min    最小值
        xh       序号
        yblx     样本类型
        ywmc    英文名称
        zt     状态
        zwmc   明细项目名称
        jyxh   检验序号
        jyxm    检验项目
        ksbm    科室编码
        ksmc     科室名称
        mc       项目名称
        nldw  年龄单位 1岁 2月  3 天
        sbmc   设备名称
        shrq   审核日期
        shry    审核人员
        shryxm   审核人员姓名 
        sqrq   申请日期
        sqys       申请医生
        sqysxm    申请医生姓名
        ybbm   样本编码
        ybmc    样本名称
        zxsb    执行设备编码
        zxys    执行医生
        zxysxm  执行医生姓名
        dw      单位
        lczd    临床诊断*/
    getLisreport(zyh){
        return $.ajax({
            url: `${URL}/Hospital/Lisreport?zyh=${zyh}&%E6%8F%90%E4%BA%A4=%E6%8F%90%E4%BA%A4`,
            method:'GET',
            contentType:'text/plain'
        })    
    },

    //彩超结果查询等 
    getRisReport(zyh){
        return $.ajax({
            url: `${URL}/Hospital/RisReport?zyh=${zyh}&submit=%E6%8F%90%E4%BA%A4`,
            method:'GET',
            contentType:'text/plain'
        }) 
    },

    // 查询病人预约信息
    // http://mrhuangqiwei.6655.la/Hospital/FreindsYyinfo?
    // openid=owEWzwQKO7G_uy4C0X_Wn2boPVI4&%E6%8F%90%E4%BA%A4=%E6%8F%90%E4%BA%A4
    // 返回参数说明
    // brxm 病人姓名
    // sfzh 身份证号
    // ylkh  医疗卡号
    // yyys  预约医生
    // czyxm  预约医生姓名
    // yyrqmx 预约明细日期
    // sj 手机
    // ksmc  科室名称
    // yyrq 预约日期
    // yyghid 预约挂号ID
    // brid   病人ID
    // mzsbdd  门诊上班地点
    getPatientAppointmentInfo(openid){
         return $.ajax({
            url: `${URL}/Hospital/FreindsYyinfo?openid=${openid}&%E6%8F%90%E4%BA%A4=%E6%8F%90%E4%BA%A4`,
            method:'GET',
            contentType:'text/plain'
        }) 
    },
    /**
     * 
     * http://mrhuangqiwei.6655.la/Hospital/FriendInfo?sfzh=513426199702174929&ylkh=513426199702174929&submit=%E6%8F%90%E4%BA%A4
        传递参数: sfzh 如：513426199702174929   ylkh 如：00006016 当这两个参数中有为空的时候就传空数据。
        其中sfzh,ylkh 是从患者基本信息里面得到的
        参数说明：
        brid：病人ID
        brnl:病人年龄
        brnldw：病人年龄单位
        brxb：病人性别
        brxm:病人姓名
        ghrq:挂号日期       说明：     精确到了毫秒
        ghxh: 挂号序号       说明：该参数特别重要，所有信息都从这里开始。当ylklxbm="01"时 是挂号序号 ,当医疗卡llklxbm="02"时该字段是住院号
        jtzz:家庭住
        mzbm：名族编码
        sfzh：身份证号
        sj: 手机
        ylkh:医疗卡号
        ylklxbm：医疗卡类型编码
     */
    getPatientDetailInfo(sfzh,ylkh){
         return $.ajax({
            url: `${URL}/Hospital/FriendInfo?sfzh=${sfzh}&ylkh=${ylkh}&submit=%E6%8F%90%E4%BA%A4`,
            method:'GET',
            contentType:'text/plain'
        }) 
    },

    //处方查询
    //http://219.141.78.173/Hospital/Mzzycf?ghxh=20161127000001&%E6%8F%90%E4%BA%A4=%E6%8F%90%E4%BA%A4
    prescriptionQuery(ghxh){
        return $.ajax({
            url: `${URL}/Hospital/Mzzycf?ghxh=${ghxh}&%E6%8F%90%E4%BA%A4=%E6%8F%90%E4%BA%A4`,
            method:'GET',
            contentType:'text/plain'
        }) 
    },

    getTreatSpend(ghxh){
        return $.ajax({
            url: `${URL}/Hospital/getbrmzfyServlet?ghxh=${ghxh}&提交=提交`,
            method:'GET',
            contentType:'text/plain'
        }) 
    }
 };

var Store = {
    login(){
        return new Promise(function(resolve,reject){
                    var info = {
                        openid:'owEWzwQKO7G_uy4C0X_Wn2boPVI4',
                        sfzh:'513427199309232717',
                        brxm:'黄启位',
                        brxb:'1',
                        brjtzz:'四川',
                        lxdh:'15577616194',
                        nl:'23'
                    }
                    resolve( info );
                });
    },

    // 绑卡
    bindCard(param){
        var {openid, sfzh, ylkh, brxm, brxb, brjtzz, nl, lxdh, nldw} = param;
        return _backend.bindCard(openid, sfzh, ylkh, brxm, brxb, brjtzz, nl, lxdh, nldw).then((data)=>{
            // 返回值1 此卡已经绑定无需重复绑卡
            // 返回值2 此卡无效请重新绑卡
            // 返回值3 绑卡成工
            // 返回值4 绑卡失败
            var ret = '';
            switch(data){
                case '1':
                    ret = '此卡已经绑定无需重复绑卡';
                    break;
                case '2':
                    ret = '此卡无效请重新绑卡';
                    break;
                case '3':
                    ret = '绑卡成功';
                    break;
                case '4':
                    ret = '绑卡失败';
                    break;
                default:
                    ret = '请重试';
            }
            return ret;
        })
    },
    // 用户信息
    getUserInfo(weChatInfo){
        var {openid} = weChatInfo;
        return _backend.userInfo(openid).then((data)=>{
            return data;
        })
    },
    // 病人记录/问诊记录 
    getPatientRecord(sfzh='513427197209290026'){
        return _backend.patientRecord(sfzh).then((data)=>{
            return data;
        })
    },
    getDoctorSchedule(ksbm){
        return _backend.doctorSchedule(ksbm).then((data)=>{
            return data;
        })
    },
    getDepartmentNO(){
        return _backend.departmentInfomation().then((data)=>{
            return data;
        })
    },
    getHospitalizationFee(zyh){
        return _backend.getHospitalizationFee(zyh).then((data)=>{
            return data;
        })
    },
    getCommonPatient(openid){
         return _backend.commonPatient(openid).then((data)=>{
            return data;
        })
    },
    // 检查查询 1 
    getLisreport(zyh){
        return _backend.getLisreport(zyh).then((data)=>{
            return data;
        })
    },
    getRisReport(zyh){
        return _backend.getRisReport(zyh).then((data)=>{
            return data;
        })
    },
    // 查询病人预约信息
    getPatientAppointmentInfo(openid){
        return _backend.getPatientAppointmentInfo(openid).then((data)=>{
            return data;
        })
    },
    deleteCommonPatient(openid,sfzh,ylkh){
        return _backend.deleteCommonPatient(openid,sfzh,ylkh).then((data)=>{
            return data;
        })
    },
    editCommonPatient(openid,sfzh,sfzhold,ylkh,brxm,brxb,brjtzz,brdh,nl){
         return _backend.editCommonPatient(openid,sfzh,sfzhold,ylkh,brxm,brxb,brjtzz,brdh,nl).then((data)=>{
            return data;
        })
    },
    getPatientDetailInfo(sfzh='',ylkh=''){
        return _backend.getPatientDetailInfo(sfzh,ylkh).then((data)=>{
            return data;
        })
    },
    getPrescription(ghxh){
        return _backend.prescriptionQuery(ghxh).then((data)=>{
            return data;
        })
    },
    getTreatSpend(ghxh){
        return _backend.getTreatSpend(ghxh).then((data)=>{
            return data;
        })
    }
};

export default Store;