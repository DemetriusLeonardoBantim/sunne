import { api } from '../api'

export const listPersons = async () => {
  const response = await api.get('persons?_quantity=1')

  return response
}

