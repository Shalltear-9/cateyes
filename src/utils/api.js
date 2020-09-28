// 用于管理所有的接口信息

import http from './http'

// 首页最受欢迎接口
export function getTopRated (params) {
  return http.get('/home/topRatedMovies', params)
}

// 首页的列表接口
export function getIndexList (params) {
  return http.post('/home/movieOnInfoList', params)
}

//下拉加载
export function pullUpLoadList(params) {
  return http.post('/home/moreComingList', params)
}

//详情页请求数据
export function getMovieInfo(params) {
  return http.get('/detail/info', params)
}

//影院请求数据
export function getCinemaInfo(params) {
  return http.get('/cinema/list', params)
}

//城市列表接口 
export function getCitiesList(params) {
  return http.get('/cities/list', params)
}