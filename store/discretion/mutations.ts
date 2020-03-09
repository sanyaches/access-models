const mutations = {
  updateRight (state, payload: {
    newRight: string,
    userIndex: number,
    indexRight: number,
  }) {
    const { newRight, userIndex, indexRight } = payload;

    this.users[userIndex].rights[indexRight] = newRight;
  }
};

export default mutations;
