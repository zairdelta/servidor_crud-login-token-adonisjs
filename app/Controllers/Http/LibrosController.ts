// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContext } from "@adonisjs/core/build/standalone";
import Libro from "App/Models/Libro";
import Database from '@ioc:Adonis/Lucid/Database';
export default class LibrosController {
    async index ({ response}) {
      const libro=await Database
      .from('libros')
      .join('editorials', 'libros.editorial_id', '=', 'editorials.id')
      .join('estantes', 'libros.estante_id', '=', 'estantes.id')
      .select('libros.id')
      .select('libros.titulo')
      .select('libros.descripcion')
      .select('editorials.nombre as Editorial')
      .select('estantes.seccion as Estante')
      .orderBy("libros.id")
      return response.json(libro)
  
  }
  async store ({request}:HttpContextContract) {
    const libro = await Libro.create({
      titulo:request.input("titulo"),
      descripcion:request.input("descripcion"),
      editorial_id:request.input("editorial_id"),
      estante_id:request.input("estante_id"),


    })
    await libro.save()
    }
  
    async update ({request,params}:HttpContext) {
      const libro = await Libro.findOrFail(params.id)
      libro.titulo=request.input("titulo"),
      libro.descripcion=request.input("descripcion"),
      libro.editorial_id=request.input("editorial_id"),
      libro.estante_id=request.input("editorial_id"),
      await libro.save()
    }
  
      async destroy ({params, response}) {
          const libro= await Libro.findOrFail(params.id)
          await libro.delete();
          return response.json({
            res:true,
            message:"Registro eliminado correctamente"
          })
        }
  
        async show({params}){
          const libro = await Libro.findOrFail(params.id)
          return libro; 
        }
}
