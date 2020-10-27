export const CREATE_USER = 'CREATE-USER';
export const RESTORE_USER = 'RESTORE_USER';

const userReducer = (state = {}, action) => {
  switch(action.type) {
    case CREATE_USER || RESTORE_USER:
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
    // case RESTORE_USER:
    //   return {
    //     token: 
    //   }
    default:
      return state;
  }
}

export default userReducer;