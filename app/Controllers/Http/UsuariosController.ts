// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContext } from "@adonisjs/core/build/standalone";
import Usuario from "App/Models/Usuario";
export default class UsuariosController {
    async index ({ }) {
        const usuario = await Usuario.all()
        return usuario;
  }
  async store ({request}:HttpContextContract) {
    const usuario = await Usuario.create({
      nombre:request.input("nombre"),
      correo:request.input("correo"),
      telefono:request.input("telefono"),

    })
    await usuario.save()
    }
  
    async update ({request,params}:HttpContext) {
      const usuario = await Usuario.findOrFail(params.id)
      usuario.nombre=request.input("nombre"),
      usuario.correo=request.input("correo"),
      usuario.telefono=request.input("telefono")
      await usuario.save()
    }
  
      async destroy ({params, response}) {
          const usuario= await Usuario.findOrFail(params.id)
          await usuario.delete();
          return response.json({
            res:true,
            message:"Registro eliminado correctamente"
          })
        }
  
        async show({params}){
          const usuario = await Usuario.findOrFail(params.id)
          return usuario; 
        }
}
