const actions = {
  hyperVise ({ state, getters }, payload: {
    action: string
    subjectIndex: number
  }) {
    const { action, subjectIndex } = payload;
    const user = getters['getUserData'];
    let can = false;

    if ( state.model === 'matrix' ) {
      switch (action) {
        case 'read': {
          can = !!+user.rights[subjectIndex][0];
          break;
        }
        case 'write': {
          can = !!+user.rights[subjectIndex][1];
          break;
        }
        case 'edit': {
          can = !!+user.rights[subjectIndex][2];
          break;
        }
        default: {
          break;
        }
      }
    }

    console.log(`User ${ user.username } want ${ action } the Subject${ subjectIndex + 1 }`);

    const msg = can ? 'Access allow': 'Access deny';
    alert(msg);

    return can
  }
};

export default actions
