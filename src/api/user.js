import request from '@/utils/request'

const prefix = process.env.NODE_ENV === 'development' ? '/cyan' : ''

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

// admin-farm - 获取用户表
export function getAllUsers() {
  return request({
    url: prefix + '/get_all_users',
    method: 'get',
    // headers: {
    //   Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE3MDIwMDgyNTN9.otXmeZqKkfiyi8tJf2kS5aXwB0hX_ROau0lSdUiiX54'
    // }
  })
}

// admin-farm - 用户注册
export function register(data) {
  return request({
    url: '/register',
    method: 'post',
    data
  })
}

// admin-farm - 用户登录
export function loginFarm(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

// admin-farm - 获取用户单位表(获取组织列表)
export function getOrganizations() {
  return request({
    url: '/get_organizations',
    method: 'get'
  })
}