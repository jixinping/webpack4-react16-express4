var oracledb = require('oracledb');
const co = require("zco");
const dbConfig = require('./config/oracleConfig');
//const con = oracledb.getConnection(config.myMaster);

function query(){
    var sql="SELECT * FROM user_tables where rownum<10";
    return co(function*(co_next){
        let [err, result] = yield con.execute(sql);
        if(err){
            return {"returnCode":1,"returnMessage":err.message}
        }
        console.log(result.rows)
        return {"returnCode":0,"data":result.rows}
    });
}

function query1(){
    var sql="SELECT * FROM user_tables where rownum<10";
    var data = "";
    var con =  function(cb) {
        oracledb.getConnection(
            {
                user          : dbConfig.myMaster.user,
                password      : dbConfig.myMaster.password,
                connectString : dbConfig.myMaster.connectString
            },
            cb);
    };
    con.execute(sql,
        function(err, result)
        {
            if (err) {
                console.error(err.message);
                doRelease(connection);
                return;
            }
            //打印返回的表结构
            //console.log(result.metaData);
            //打印返回的行数据
            console.log(result.rows);
            data=result.rows;
        });
    return data;
}
module.exports = {
    query,
    query1
}
