import request from '@/utils/request'
import { getToken } from '@/utils/localStorage'

export const getArticles = (params = {}) => {
  const token = getToken()
  return request.get('/interview/query', {
    params,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
