const getters = {
  getUsers(state) {
    return state.users
  },
  getSubjects(state) {
    return state.subjects
  },
  getCurrentUser(state) {
    return state.currentUser
  }
};

export default getters;
