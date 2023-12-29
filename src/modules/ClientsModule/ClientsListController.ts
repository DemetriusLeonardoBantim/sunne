import { Request, Response } from 'express'
import { listCompanies } from '../../services/companies/listCompanies'
import { listPersons } from '../../services/persons/listPersons'

export class ClientsController {
  
  async execute(request: Request, response: Response) {
    try {
      const resCompanies = await listCompanies()
      let clients = [];
  
      let result: any = {
        total: resCompanies.data.total
      }
      
      for(const res of resCompanies.data.data) {
        const { data } = await listPersons()
        clients.push({
          name: res.name,
          phone: res.phone,
          email: res.email,
          person: {
            fullName: data.data[0].firstname + ' ' + data.data[0].lastname
          } 
        })
      }
  
      result = {
        ...result,
        clients
      } 
  
      return response.json(result)
    }catch(error) {
      return response.status(500).json({ error: "Erro na execução" });
    }

  }
}