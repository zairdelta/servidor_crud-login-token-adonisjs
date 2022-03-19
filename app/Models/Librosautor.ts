import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Libro from './Libro'
import Autore from './Autore'

export default class Librosautor extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public libro_id: number
  @hasOne(() => Libro, {
    foreignKey: 'libro_id', // defaults to userId
  })
  public Libro: HasOne<typeof Libro>
  @column()
  public autor_id: number
  @hasOne(() => Autore, {
    foreignKey: 'autor_id', // defaults to userId
  })
  public Autore: HasOne<typeof Autore>
 
}
