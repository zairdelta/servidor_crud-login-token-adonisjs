import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Prestamos extends BaseSchema {
  protected tableName = 'prestamos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('usuario_id').unsigned().references('id').inTable('usuarios')
      table.integer('libro_id').unsigned().references('id').inTable('libros')
      table.timestamps()      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
