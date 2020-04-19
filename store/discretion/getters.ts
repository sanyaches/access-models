const getters = {
  getUsers(state) {
    return state.users
  },
  getUserData(state) {
    return state.users.filter( user => user.username === state.currentUser )[0]
  },
  getObjects(state) {
    return state.objects
  },
  getCurrentUser(state) {
    return state.currentUser
  },
  getShowLoginForm(state) {
    return state.showLoginForm
  },
  getShowEditMatrix(state) {
    return state.showEditMatrix
  },
  getShowObjectAccess(state) {
    return state.showObjectAccess
  },
  isAdmin(state) {
    return state.currentUser === 'admin'
  },
  isHru(state) {
    return state.model === 'HRU'
  },
  isAuth(state) {
    return state.currentUser !== ''
  },
  getModels(state) {
    return state.models;
  },
  getCurrentModel(state) {
    return state.model;
  }
};

export default getters;
