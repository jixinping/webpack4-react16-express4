var log4js = require("log4js").configure(require("../logConf.json"));
var log = log4js.getLogger('test');

exports.entrance=function (data, res) {
    log.info("processOne entrance recive data:", data)
    var type = data.type;
    var retData = "";
    if(type == 'agree') {
        retData=agree(data);
    } else if(type == 'refuse') {
        retData=refuse(data);
    } else {
        res.send({"list":[],"code":10001,"msg":"获取数据失败,请重试."});
        return;
    }
    if(retData=="") {
        res.send({"list":[],"code":10001,"msg":"获取数据失败,请重试."});
    } else {
        res.send({"list":retData,"code":200,"msg":""});
    }
}

function agree(data){
    var name = data.name;
    if(name) {
        var list = [];
        var temp={};
        temp.key='name';
        temp.value=name + "审核通过！";
        list.push(temp);
        return list;
    } else {
        return "";
    }
}
function refuse(data){
    var name = data.name;
    if(name) {
        var list = [];
        var temp={};
        temp.key='name';
        temp.value=name + "审核不通过！";
        list.push(temp);
        return list;
    } else {
        return "";
    }
}