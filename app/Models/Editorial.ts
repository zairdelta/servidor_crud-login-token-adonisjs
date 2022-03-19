import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Editorial extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public nombre: string
  @column()
  public direccion: string
}
