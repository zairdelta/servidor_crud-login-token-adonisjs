import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Librosautors extends BaseSchema {
  protected tableName = 'librosautors'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('libro_id').unsigned().references('id').inTable('libros')
      table.integer('autor_id').unsigned().references('id').inTable('autores')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
