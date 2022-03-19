// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContext } from "@adonisjs/core/build/standalone";
import Editorial from "App/Models/Editorial";
export default class EditorialsController {
    async index ({ }) {
        const editorial = await Editorial.all()
        return editorial;
  }
  async store ({ request}:HttpContextContract) {
    const editorial = await Editorial.create({
      nombre:request.input("nombre"),
      direccion:request.input("direccion"),
    })
    await editorial.save()
    }
  
    async update ({ request,params}:HttpContext) {
      const editorial = await Editorial.findOrFail(params.id)
      editorial.nombre=request.input("nombre"),
      editorial.direccion=request.input("direccion"),
      await editorial.save()
    }
  
      async destroy ({ params, response }) {
          const editorial= await Editorial.findOrFail(params.id)
          await editorial.delete();
          return response.json({
            res:true,
            message:"Registro eliminado correctamente"
          })
        }
  
        async show({params}){
          const editorial = await Editorial.findOrFail(params.id)
          return editorial;
  
        }
}
