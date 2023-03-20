import auth from '../auth/authFunctions';
import { INewUser } from '../interfaces/users.interface';
import userModel from '../models/users.model';

const createUser = async (user: INewUser) => {
  const newUser = await userModel.insertNewUser(user);
  const { password, ...remaining } = newUser;
  const { createToken } = auth;
  return createToken(remaining);
};

const userService = { createUser };

export default userService;