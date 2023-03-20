import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

const getByUsername = async (username: string): Promise<IUser> => {
  const [[result]] = await connection.execute<IUser[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [username],
  );
  return result;
};

const getByUserId = async (userId: number): Promise<IUser> => {
  const [[result]] = await connection.execute<IUser[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE id = ?',
    [userId],
  );
  return result;
};

const userModel = { insertNewUser, getByUsername, getByUserId };

export default userModel;