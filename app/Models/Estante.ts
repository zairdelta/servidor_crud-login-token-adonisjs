import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Estante extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public numero: number
  @column()
  public seccion: string
}
