import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Estantes extends BaseSchema {
  protected tableName = 'estantes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('seccion',1).notNullable().unique()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
