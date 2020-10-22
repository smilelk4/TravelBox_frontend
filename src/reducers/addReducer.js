const addReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADDONE':
      return state + 1;
    case 'ADDTWO':
      return state + 2;
    default:
      return state;
  }
}

export default addReducer;