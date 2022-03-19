import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Autores extends BaseSchema {
  protected tableName = 'autores'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre',40)
      table.string('nacionalidad',20)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
