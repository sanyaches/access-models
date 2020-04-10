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
    if (show) state.showObjectAccess = !show;
  },
  setShowObjectAccess(state, show: boolean) {
    state.showObjectAccess = show;
    if (show) state.showEditMatrix = !show;
  },
  exit(state) {
    state.currentUser = '';
    state.showLoginForm = false;
    state.showEditMatrix = false;
    state.showObjectAccess = false;
  },
  setModel(state, value) {
    state.model = value;
  }

};

export default mutations;
