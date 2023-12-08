
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

module.exports = [
  // user login
  {
    url: '/vue-admin-template/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/vue-admin-template/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue-admin-template/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  // admin-farm - 用户注册
  {
    url: '/register',
    type: 'post',
    response: _ => {
      return {
        "message": "User registered successfully"
      }
    }
  },

  // admin-farm - 用户登录
  {
    url: '/login',
    type: 'post',
    response: _ => {
      return {
        "email": "admin@123",
        "last_login": "Fri, 08 Dec 2023 20:06:28 GMT",
        "message": "Login successful",
        "organization_name": "Admin Organization",
        "organization_type": "Government",
        "phonenumber": "123123",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE3MDIxMjM2MjB9.iTGwBBTuposMszhZWxCvo9tjfme-IZb0TjgkjCj4hiY",
        "user_type": 999,
        "username": "admin"
      }
    }
  },

  // admin-farm - 获取用户单位表(获取组织列表)
  {
    url: '/get_organizations',
    type: 'get',
    response: _ => {
      return [
        {
          "additional_info": "Organization for administrative users",
          "organization_id": 1,
          "organization_name": "Admin Organization",
          "organization_type": "Government"
        },
        {
          "additional_info": null,
          "organization_id": 2,
          "organization_name": "a县人民政府",
          "organization_type": "政府机构"
        }
      ]
    }
  },

  // admin-farm - 获取用户单位表(获取组织列表)
  {
    url: '/get_organizations',
    type: 'get',
    response: _ => {
      return [
        {
          "additional_info": "Organization for administrative users",
          "organization_id": 1,
          "organization_name": "Admin Organization",
          "organization_type": "Government"
        },
        {
          "additional_info": null,
          "organization_id": 2,
          "organization_name": "a县人民政府",
          "organization_type": "政府机构"
        }
      ]
    }
  },

  // admin-farm 登录

]
