import createToken from '../auth/authFunctions';
import { ILogin } from '../interfaces/login.interface';
import userModel from '../models/users.model';

const login = async (loginData: ILogin) => {
  const { username } = loginData;
  const getLoginData = await userModel.getByUsername(username);
  if (!getLoginData || loginData.password !== getLoginData.password) return null;
  const { password, ...remaining } = getLoginData;
  return createToken(remaining);
};

const loginService = { login };

export default loginService;
