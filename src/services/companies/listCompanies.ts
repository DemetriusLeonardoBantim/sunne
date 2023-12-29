import { api } from '../api'

export const listCompanies = async () => {
  const response = await api.get('companies?_quantity=20')
  return response
}
