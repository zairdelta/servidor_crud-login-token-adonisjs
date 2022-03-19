// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContext } from "@adonisjs/core/build/standalone";
import Estante from "App/Models/Estante";
import Database from '@ioc:Adonis/Lucid/Database';
export default class EstantesController {
    async index ({ response}) {
      const estantes=await Database
       .from('estantes')
      .select('estantes.*')
      return response.json(estantes)

  }
  async store ({request}:HttpContextContract) {
    const estante = await Estante.create({
      seccion:request.input("seccion"),
    })
    await estante.save()
    }
  
    async update ({request,params}:HttpContext) {
      const estante = await Estante.findOrFail(params.id)
      estante.seccion=request.input("seccion"),
      await estante.save()
    }
  
      async destroy ({params, response}) {
          const estante= await Estante.findOrFail(params.id)
          await estante.delete();
          return response.json({
            res:true,
            message:"Registro eliminado correctamente"
          })
        }
  
        async show({params}){
          const estante = await Estante.findOrFail(params.id)
          return estante;
  
        }

}
