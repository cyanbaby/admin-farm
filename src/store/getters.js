const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,


  userName: state => state.user.userName,
  farmToken: state => state.user.farmToken,
  userInfo: state => state.user.userInfo,
  
}
export default getters
