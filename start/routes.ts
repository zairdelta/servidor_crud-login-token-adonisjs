/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(()=>{
  Route.get('/autores','AutoresController.index');
  Route.post('/autores','AutoresController.store')
  Route.patch('/autores/:id','AutoresController.update')
  Route.delete('/autores/:id','AutoresController.destroy')
  Route.get('/autores/:id','AutoresController.show')

  Route.get('token', async ({ auth}) => {
    await auth.use('api').authenticate()
    console.log(auth.use('api').user!)
    return { resp: 'activo' }
  })
  Route.post('/libro','LibrosController.store');
  Route.delete('/libro/:id','LibrosController.destroy');
  Route.patch('/libro/:id','LibrosController.update');
  Route.get('/libro/:id','LibrosController.show')


  Route.post('/editorial','EditorialsController.store');
  Route.delete('/editorial/:id','EditorialsController.destroy');
  Route.get('/editorial','EditorialsController.index');
  Route.patch('/editorial/:id','EditorialsController.update');
  Route.get('/editorial/:id','EditorialsController.show')

  Route.post('/estante','EstantesController.store');
  Route.delete('/estante/:id','EstantesController.destroy');
  Route.patch('/estante/:id','EstantesController.update');
  Route.get('/estante/:id','EstantesController.show')

  Route.post('/usuario','UsuariosController.store');
  Route.delete('/usuario/:id','UsuariosController.destroy');
  Route.get('/usuario','UsuariosController.index');
  Route.patch('/usuario/:id','UsuariosController.update');
  Route.get('/usuario/:id','UsuariosController.show')

  Route.post('/libroautor','LibroAutorsController.store');
  Route.delete('/libroautor/:id','LibroAutorsController.destroy');
  Route.get('/libroautor','LibroAutorsController.index');
  Route.patch('/libroautor/:id','LibroAutorsController.update');
  Route.get('/libroautor/:id','LibroAutorsController.show')



}).middleware('auth')
Route.post('/login','AuthController.login')
Route.post('/register','AuthController.register')

Route.get('/libro','LibrosController.index');
Route.get('/estante','EstantesController.index');


Route.post('/prestamo','PrestamosController.store');
Route.delete('/prestamo/:id','PrestamosController.destroy');
Route.get('/prestamo','PrestamosController.index');
Route.patch('/prestamo/:id','PrestamosController.update');
Route.get('/prestamo/:id','PrestamosController.show')
