var environments = {};

environments.staging = {
  'version' : '0.1.0',
  'codeName' : 'UMM',
  'httpPort' : 3003,
  'httpsPort' : 3004,
  'envName' : 'staging',
  'subModuleDirectory' : '/app_modules',
  'sqliteDBFile': 'webworx.db',
  'mysqlDBHost': 'localhost',
  'mysqlDBPort': 3306,
  'mysqlDBUser': 'mysqldbuser',
  'mysqlDBPass': 'mysqldbpassword_4_mysqldbuser',
  'mysqlDBName': 'mysqldbname',
  'hashingPairs' : 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  'hashingSecret' : 'b144700387101111f02422bf234266affcd786eb15289d695b412c0587243947'
};

environments.production = {
  'version' : '0.1.0',
  'codeName' : 'UMM',
  'httpPort' : 3003,
  'httpsPort' : 3004,
  'envName' : 'production',
  'subModuleDirectory' : '/app_modules',
  'sqliteDBFile': 'webworx.db',
  'mysqlDBHost': 'localhost',
  'mysqlDBPort': 3306,
  'mysqlDBUser': 'mysqldbuser',
  'mysqlDBPass': 'mysqldbpassword_4_mysqldbuser',
  'mysqlDBName': 'mysqldbname',
  'hashingPairs' : 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  'hashingSecret' : 'b144700387101111f02422bf234266affcd786eb15289d695b412c0587243947'
};
var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';
var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;
module.exports = environmentToExport;
