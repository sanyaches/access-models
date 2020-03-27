const mutations = {
  updateRight (state, payload: {
    newRight: string,
    userIndex: number,
    indexRight: number,
  }) {
    const { newRight, userIndex, indexRight } = payload;

    state.users[userIndex].rights[indexRight] = newRight;
  },

  setCurrentUser (state, user: string) {
    state.currentUser = user
  },
  setShowLoginForm(state, show: boolean) {
    state.showLoginForm = show;
  },
  setShowEditMatrix(state, show: boolean) {
    state.showEditMatrix = show;
    if (show) state.showSubjectAccess = !show;
  },
  setShowSubjectAccess(state, show: boolean) {
    state.showSubjectAccess = show;
    if (show) state.showEditMatrix = !show;
  },
  exit(state) {
    state.currentUser = '';
    state.showLoginForm = false;
    state.showEditMatrix = false;
    state.showSubjectAccess = false;
  }

};

export default mutations;
