var oracledb = require('oracledb');
const dbConfig = require('../config/oracleConfig');
oracledb.getConnection(
    {
        user          : dbConfig.user,
        password      : dbConfig.password,
        connectString : dbConfig.connectString
    },
    function(err, connection) {
        if (err) {
            console.error(err.message);
            return;
        }
        connection.execute(
            "SELECT * FROM user_tables where rownum<10",
            function(err, result) {
                if (err) {
                    console.error(err.message);
                    return;
                }
                console.log(result.rows);     // [ [ 180, 'Construction' ] ]
            });
    });