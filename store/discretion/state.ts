const state = () => ({
  users: [
    {
      username: 'vasya',
      rights: [
        '111',
        '011',
        '101',
      ]
    }
  ],
  subjects: [
    'Subject1',
    'Subject2',
    'Subject3'
  ],
  currentUser: '',
  showLoginForm: false,
  showEditMatrix: false,
  showSubjectAccess: false,
});

export default state;
