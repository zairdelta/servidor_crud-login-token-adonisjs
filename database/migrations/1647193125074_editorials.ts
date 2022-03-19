import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Editorials extends BaseSchema {
  protected tableName = 'editorials'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre',40)
      table.string('direccion',100).defaultTo('desconocida')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
