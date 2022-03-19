import { HttpContext } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Prestamo from 'App/Models/Prestamo'

export default class PrestamosController {
    async index ({ response}) {
        const prestamos=await Database
        .from('prestamos')
        .join('libros', 'prestamos.libro_id', '=', 'libros.id')
        .join('usuarios', 'prestamos.usuario_id', '=', 'usuarios.id')
        .select('prestamos.id')
        .select('libros.titulo as libro_id')
        .select('usuarios.nombre as usuario_id')
        .select('prestamos.created_at as fecha_salida')
        .orderBy("libros.id")
        return response.json(prestamos)
    
    }
    async store ({request}:HttpContextContract) {
      const libro = await Prestamo.create({
        libro_id:request.input("libro_id"),
        usuario_id:request.input("usuario_id")
       
  
  
      })
      await libro.save()
      }
    
      async update ({request,params}:HttpContext) {
        const prestamo = await Prestamo.findOrFail(params.id)
        prestamo.libro_id=request.input("libro_id")
        prestamo.usuario_id=request.input("autor_id")
        await prestamo.save()
      }
    
        async destroy ({params, response}) {
            const prestamo= await Prestamo.findOrFail(params.id)
            await prestamo.delete();
            return response.json({
              res:true,
              message:"Registro eliminado correctamente"
            })
          }
    
          async show({params}){
            const prestamo = await Prestamo.findOrFail(params.id)
            return prestamo; 
          }
}
