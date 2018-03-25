const initialState = {
  errorMessage: '',
  Reposetry: [['google', 'https://wwww.google.com']],
  modalToggle: 'display'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_URL':
      return {...state, Reposetry: action.Reposetry}
    case 'GET_URL':
      return {...state, Reposetry: action.Reposetry}
    case 'DELETE_URL':
      return {...state, Reposetry: action.Reposetry}
    case 'TOGGLE_MODAL':
      return {...state, modalToggle: action.modalToggle}
    default:
      return state;
  }
}
