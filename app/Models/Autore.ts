import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Autore extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public nombre: string

  @column()
  public nacionalidad: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
