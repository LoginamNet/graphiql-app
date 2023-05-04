import { useSelector } from 'react-redux';
import { RootState } from 'store';

export function CheckAuth() {
  const { email, token, id } = useSelector((state: RootState) => state.user);

  return {
    isAuth: !!id,
    email,
    token,
    id,
  };
}
