 const DB_HOST = process.env.DB_HOST || "localhost";
 const DB_USER = process.env.DB_USER || "postgres";
 const DB_PASSWORD = process.env.DB_PASSWORD || "postgre";
 const DB_NAME = process.env.DB_NAME || "ecommerce";
 const DB_PORT = process.env.DB_PORT || 3000;


console.log(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)

module.exports = {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME}
