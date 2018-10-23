var log4js = require("log4js").configure(require("../logConf.json"));
var log = log4js.getLogger('test');

var oracleOperater = require('./oracleOperater');

exports.entrance = function(data, res) {
    log.info("processOne entrance recive data:", data)
    var type = data.type;
    var processId = data.id;
    log.info("type judge=",type == 'agree');
    var retData = "";
    if(type == 'agree') {
        retData=agree(processId);
    } else if(type == 'refuse') {
        retData=refuse(processId);
    } else if(type == 'detail') {
        retData=detail(processId);
    } else {
        res.send({"retData":[],"code":10001,"msg":"获取数据失败,请重试."});
        return;
    }
    if(retData=="") {
        res.send({"retData":[],"code":10001,"msg":"获取数据失败,请重试."});
    } else {
        res.send({"retData":retData,"code":200,"msg":""});
    }
}

function agree(processId){
    if(processId) {
        var temp={};
        var proccessName = processId;
        temp.key='name';
        temp.value=proccessName + "审核通过！";
        return temp;
    } else {
        return "";
    }
}

function refuse(processId){
    if(processId) {
        var temp={};
        var proccessName = processId;
        temp.key='name';
        temp.value=proccessName + "审核不通过！";
        return temp;
    } else {
        return "";
    }
}

function detail(processId){
    if(processId) {
        var temp={};
        var proccessName = processId;
        temp.id=processId;
        temp.name=proccessName;
        return temp;
    } else {
        return "";
    }
}