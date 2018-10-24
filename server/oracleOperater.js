var oracledb = require('oracledb');
const dbConfig = require('./config/oracleConfig');

function query(){
    var resultData="";
    var sql="SELECT * FROM A where rownum<10";
    var oracledb = require('oracledb');
    const dbConfig = require('./server/config/oracleConfig');
    oracledb.getConnection(
        {
            user: dbConfig.myMaster.user,
            password: dbConfig.myMaster.password,
            connectString:dbConfig.myMaster.connectString
        },
        function (err, connection) {
            if (err) {
                console.error(err.message);
                return;
            }
            connection.execute(
                sql,
                function (err, result) {
                    if (err) {
                        console.error(err.message);
                        return;
                    }
                    resultData=result.rows;
                    console.log("************"+JSON.stringify(result.rows))
                });
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
