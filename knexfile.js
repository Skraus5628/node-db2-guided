// Update with your config settings.

module.exports = {
  client: "sqlite3", 
  // specifying DBMS
  useNullAsDefault: true, 
  // a flag required for SQLite
	connection: {
    filename: "./data/produce.db3", 
    // Location of our database file
	},
}