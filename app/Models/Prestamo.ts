import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Libro from './Libro'
import Usuario from './Usuario'

export default class Prestamo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  
  @column()
  public usuario_id: number
  @hasOne(() => Usuario, {
    foreignKey: 'usuario_id', // defaults to userId
  })
  public Usuario: HasOne<typeof Usuario>


  @column()
  public libro_id: number
  @hasOne(() => Libro, {
    foreignKey: 'libro_id', // defaults to userId
  })
  public Libro: HasOne<typeof Libro>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
