import { ResultSetHeader } from 'mysql2';
import { INewUser, IUser } from '../interfaces/users.interface';
import connection from './connection';

const insertNewUser = async (user: INewUser): Promise<IUser> => {
  const { username, vocation, level, password } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  return { id: insertId, ...user };
};

const userModel = { insertNewUser };

export default userModel;