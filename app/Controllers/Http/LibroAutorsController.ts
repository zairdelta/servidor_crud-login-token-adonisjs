import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone"
import Librosautor from 'App/Models/Librosautor'
import Database from '@ioc:Adonis/Lucid/Database'

export default class LibroAutorsController {  async index ({ response}) {
    const libro=await Database
    .from('librosautors')
    .join('libros', 'librosautors.libro_id', '=', 'libros.id')
    .join('autores', 'librosautors.autor_id', '=', 'autores.id')
    .select('librosautors.id')
    .select('libros.titulo as libro_id')
    .select('autores.nombre as autor_id')
    .orderBy("librosautors.id")
    
    return response.json(libro)

}
async store ({request}:HttpContextContract) {
  const libro = await Librosautor.create({
  

    libro_id:request.input("libro_id"),
    autor_id:request.input("autor_id"),


  })
  await libro.save()
  }

  async update ({request,params}:HttpContext) {
    const libroautor = await Librosautor.findOrFail(params.id)
    libroautor.libro_id=request.input("libro_id"),
    libroautor.autor_id=request.input("autor_id"),
    
    await libroautor.save()
  }

    async destroy ({params, response}) {
        const libro= await Librosautor.findOrFail(params.id)
        await libro.delete();
        return response.json({
          res:true,
          
          message:"Registro eliminado correctamente"
        })
      }

      async show({params}){
        const libro = await Librosautor.findOrFail(params.id)
        return libro; 
      }}
