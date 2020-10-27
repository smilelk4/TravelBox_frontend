export const GENERATE_USER_INFO = 'CREATE-USER';

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
    default:
      return state;
  }
}

export default userReducer;