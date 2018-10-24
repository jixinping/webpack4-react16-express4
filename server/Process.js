var log4js = require("log4js").configure(require("../logConf.json"));
var log = log4js.getLogger('test');

var OracleOperater = require('./js/OracleOperater');

exports.entrance = function(data, res) {
    log.info("processOne entrance recive data:", data.body)
    var type = data.body.type;
    var processId = data.body.id;
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
    var dbTest = new OracleOperater();
    var data = dbTest.executeSql("SELECT * FROM A where rownum<10");
    console.log("################"+data);
    if(processId) {
        var temp={};
        var proccessName = processId;
        temp.key='name';
        temp.value=proccessName + "审核通过！";
        temp.value=data;
        return temp;
    } else {
        return "";
    }
}

function refuse(processId){
    var dbTest = new OracleOperater();
    var data = dbTest.executeSql("SELECT * FROM A where rownum<10", false);
    console.log("################"+data);
    if(processId) {
        var temp={};
        var proccessName = processId;
        temp.key='name';
        temp.value=proccessName + "审核不通过！";
        temp.value=data;
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