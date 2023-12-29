import { Router } from 'express'
import { ClientsController } from './modules/ClientsModule/ClientsListController'

const routes = Router()

const clientsListController = new ClientsController()

routes.get('/clients/list', clientsListController.execute)

export { routes }