const mutations = {
  updateRight (state, payload: {
    newRight: string,
    userIndex: number,
    indexRight: number,
    hru: boolean
  }) {
    const { newRight, userIndex, indexRight, hru } = payload;
    const { newR, oldR } = {
      newR: newRight,
      oldR: state.users[userIndex].hru[indexRight]
    };

    if (hru) {
      if (state.currentUser == 'admin') { state.users[userIndex].hru[indexRight] = newRight; return; }

      if ( ((newR.length > oldR.length) && (oldR[0] == '1')) || ((newR.length < oldR.length) && (oldR[1] == '1')) ) {
        state.users[userIndex].hru[indexRight] = newRight;
      } else {
        console.error('Error edit hru right')
      }
    } else {
      state.users[userIndex].rights[indexRight] = newRight;
    }
  },

  login (state) {
    state.auth = true
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
    state.auth = false
  },
  setModel(state, value) {
    state.model = value;
  }

};

export default mutations;
