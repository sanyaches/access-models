const actions = {
  hyperVise ({ state, getters }, payload: {
    action: string
    objectIndex: number
  }) {
    const { action, objectIndex } = payload;
    const user = getters['getUserData'];
    let can = false;

    if ( state.model === 'matrix' ) {
      switch (action) {
        case 'read': {
          can = !!+user.rights[objectIndex][0];
          break;
        }
        case 'write': {
          can = !!+user.rights[objectIndex][1];
          break;
        }
        case 'edit': {
          can = !!+user.rights[objectIndex][2];
          break;
        }
        default: {
          break;
        }
      }
    }

    console.log(`User ${ user.username } want ${ action } the Object${ objectIndex + 1 }`);

    const msg = can ? 'Access allow': 'Access deny';
    alert(msg);

    return can
  }
};

export default actions
