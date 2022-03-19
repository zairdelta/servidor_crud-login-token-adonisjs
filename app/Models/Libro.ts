
import { BaseModel,column,  HasOne, hasOne} from '@ioc:Adonis/Lucid/Orm'
import Editorial from './Editorial'
import Estante from './Estante'

export default class Libro extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public titulo: string
  @column()
  public descripcion: string
  @column()
  public editorial_id: string
  @hasOne(() => Editorial, {
    foreignKey: 'editorial_id', // defaults to userId
  })
  public editorial: HasOne<typeof Editorial>
  @column()
  public estante_id: string
  @hasOne(() => Estante, {
    foreignKey: 'estante_id', // defaults to userId
  })
  public estante: HasOne<typeof Estante>
 
 


}
