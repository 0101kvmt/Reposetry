const initialState = {
  errorMessage: '',
  Reposetry: ['https://wwww.google.com']
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_URL':
      return {...state, Reposetry: action.Reposetry}
    default:
      return state;
  }
}