var myMaster = {
    user: process.env.NODE_ENV==='PROD'?process.env.CTS_DB_USER:'lkpct',
    password: process.env.NODE_ENV==='PROD'?process.env.CTS_DB_PASS:'Passw0rd',
    connectString: process.env.NODE_ENV==='PROD'?process.env.CTS_DB_HOST:'10.1.2.231:1521/omprod',
}
module.exports.myMaster = myMaster;

var mySlave = {
    host: '192.168.0.31',
    user: 'ccs',
    password: 'ccs',
    port: '32307',
    database: 'ccs',
}
module.exports.mySlave = mySlave;

