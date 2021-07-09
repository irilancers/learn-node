module.exports = {
    //user          : process.env.NODE_ORACLEDB_USER || "SNZ",
    user          : "SNZ",
  
    // Get the password from the environment variable
    // NODE_ORACLEDB_PASSWORD.  The password could also be a hard coded
    // string (not recommended), or it could be prompted for.
    // Alternatively use External Authentication so that no password is
    // needed.
    //password      : process.env.NODE_ORACLEDB_PASSWORD,
    password      : 'Apex_12345',
  
    // For information on connection strings see:
    // https://oracle.github.io/node-oracledb/doc/api.html#connectionstrings
    //connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost/orclpdb1",
    connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "185.73.113.105/orcl",
  
    // Setting externalAuth is optional.  It defaults to false.  See:
    // https://oracle.github.io/node-oracledb/doc/api.html#extauth
    externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
  };