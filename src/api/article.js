import request from '@/utils/request'

export const getArticles = (params = {}) => {
  return request.get('/interview/query', {
    params
  })
}
export const getArticleDetail = (id) => {
  return request.get('/interview/show', {
    params: {
      id
    }
  })
}
export const likeOrCollect = (data) => {
  return request.post('/interview/opt', {
    id: data.id,
    optType: data.optType
  })
}
export const getLike = (page) => {
  return request.get('/interview/opt/list', {
    params: {
      optType: 1,
      pageSize: 5,
      page: page
    }
  })
}

export const getCollect = (page) => {
  return request.get('/interview/opt/list', {
    params: {
      optType: 2,
      pageSize: 5,
      page: page
    }
  })
}
