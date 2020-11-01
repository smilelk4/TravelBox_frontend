import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { restoreUserStore } from '../actions/userAction';

const useRestoreUser = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.userInfo);
  const token = useSelector(state => state.token);
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn && !userInfo.id && window.location.pathname !== '/') {
      dispatch(restoreUserStore(token)); 
    }
  }, );
}

export default useRestoreUser;