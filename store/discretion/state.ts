const state = () => ({
  models: [
    'matrix',
    'HRU',
    'Hartson'
  ],
  auth: false,
  model: 'matrix',
  users: [
    {
      username: 'vasya',
      rights: [
        '111',
        '011',
        '101',
      ],
      hru: [
        '110110',
        '000110',
        '000110'
      ],
      abilities: [
        'users',
        'authors'
      ]
    },
    {
      username: 'admin',
      rights: [
        '111',
        '111',
        '111',
      ],
      hru: [
        '111111',
        '111111',
        '111111'
      ]
    }
  ],
  objects: [
    'Object1',
    'Object2',
    'Object3'
  ],
  groupsAbilities: [
    {
      name: 'users',
      rights: [
        'read'
      ]
    },
    {
      name: 'authors',
      rights: [
        'read',
        'write'
      ]
    },
    {
      name: 'admins',
      rights: [
        'read',
        'write',
        'edit'
      ]
    },
  ],
  HruRights: [

  ],

  currentUser: '',
  showLoginForm: false,
  showEditMatrix: false,
  showObjectAccess: false,
});

export default state;
