import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Libros extends BaseSchema {
  protected tableName = 'libros'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('titulo',50).notNullable()
      table.text('descripcion').defaultTo('Sin descripción')
      table.integer('editorial_id').unsigned().references('id').inTable('editorials')
      table.integer('estante_id').unsigned().references('id').inTable('estantes')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
