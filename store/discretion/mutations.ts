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
  }
};

export default mutations;
