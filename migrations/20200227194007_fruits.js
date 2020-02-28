
exports.up = async function(knex) {
    await knex.schema.createTable("fruits", (table) =>{
        // table.integer("id").notNull().unique().primary()
        table.increments("id")
        table.text("name").notNull().unique()
        table.float("avgWeightOz").notNull()
        table.boolean("delicious").defaultTo(1)
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("fruits")
};



// npx knex migrate:make fruits
// npx knex migrate:latest
// npx knex migrate:rollback
// npx knex migrate:make fruits_color
// npx knex seed:make fruits
// npx knex seed:run

// CREATE TABLE "fruits" (
//     "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
//     "name" TEXT NOT NULL UNIQUE,
//     "avgWeightOz" FLOAT NOT NULL,
//     "delicious" BOOLEAN DEFAULT 1,
//     "color" TEXT 