import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContext } from "@adonisjs/core/build/standalone";
import Autore from "App/Models/Autore";
export default class AutoresController {
    async index ({ }) {
      const autores = await Autore.all()
      return autores;
}
async store ({ request}:HttpContextContract) {
  const autor = await Autore.create({
    nombre:request.input("nombre"),
    nacionalidad:request.input("nacionalidad"),
  })
  await autor.save()
  }

  async update ({ request,params}:HttpContext) {
    const autor = await Autore.findOrFail(params.id)
    autor.nombre=request.input("nombre"),
    autor.nacionalidad=request.input("nacionalidad"),
    await autor.save()
  }

    async destroy ({ params, response }) {
        const autores= await Autore.findOrFail(params.id)
        await autores.delete();
        return response.json({
          res:true,
          message:"Registro eliminado correctamente"
        })
      }

      async show({params}){
        const autor = await Autore.findOrFail(params.id)
        return autor;

      }
      
}
