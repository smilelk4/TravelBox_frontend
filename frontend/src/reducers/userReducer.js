export const GENERATE_USER_INFO = 'GENERATE_USER_INFO';
export const DELETE_USER_INFO = 'DELETE_USER_INFO';

const userReducer = (state = {}, action) => {
  switch(action.type) {
    case GENERATE_USER_INFO:
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
    case DELETE_USER_INFO:
      return {};
    default:
      return state;
  }
}

export default userReducer;