const getters = {
  getUsers(state) {
    return state.users
  },
  getUserData(state) {
    return state.users.filter( user => user.username === state.currentUser )[0]
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
