const state = () => ({
  models: [
    'matrix',
    'HRU',
    'Hartson'
  ],
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
      ]
    }
  ],
  objects: [
    'Object1',
    'Object2',
    'Object3'
  ],
  HruRights: [

  ],

  currentUser: '',
  showLoginForm: false,
  showEditMatrix: false,
  showObjectAccess: false,
});

export default state;
