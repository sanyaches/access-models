const getters = {
  getUsers(state) {
    return state.users
  },
  getUserRights(state) {
    return state.users.filter( user => user.username === state.currentUser )[0].rights
  },
  getSubjects(state) {
    return state.subjects
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
  getShowSubjectAccess(state) {
    return state.showSubjectAccess
  },
  isAdmin(state) {
    return state.currentUser === 'admin'
  }
};

export default getters;
