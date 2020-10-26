export const CREATE_USER = 'CREATE-USER';
export const GET_USER = 'GET_USER';

const userReducer = (state = {}, action) => {
  switch(action.type) {
    case CREATE_USER:
      return {
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
        imageUrl: action.imageUrl,
        username: action.username
      }
    default:
      return state;
  }
}

export default userReducer;