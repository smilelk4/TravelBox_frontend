export const CREATE_USER = 'CREATE-USER';
export const GET_USER = 'GET_USER';

const userReducer = (state = {}, action) => {
  switch(action.type) {
    case CREATE_USER:
      return {
        token: action.token,
        user: {
          id: action.user.id,
          firstName: action.user.firstName,
          lastName: action.user.lastName,
          imageUrl: action.user.imageUrl,
          username: action.user.username
        }
      }
    default:
      return state;
  }
}

export default userReducer;