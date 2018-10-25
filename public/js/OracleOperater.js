var oracledb = require('oracledb');
const dbConfig = require('../config/oracleConfig');

class OracleOperater {
    executeSql(sql, async) {
        var data = "";
        oracledb.getConnection(
            {
                user: dbConfig.myMaster.user,
                password: dbConfig.myMaster.password,
                connectString:dbConfig.myMaster.connectString
            },
            function(err, connection) {
                if (err) {
                    console.log("Fail to connect oracle:", err);
                    return;
                }
                 connection.execute(sql, function(err, results) {
                    if (err) {
                        console.log("Fail to query table:", err);
                        return;
                    }
                    data = JSON.stringify(results.rows);
                    console.log("-------------------"+data);
                    connection.close();
                });
            });
        var cont=0;
        while(""==data && async==false) {
            cont++;
            require('deasync').sleep(100);
        }
        console.log("*********************data="+data+"++++++"+cont);
        return data;
    }
}
module.exports=OracleOperater;